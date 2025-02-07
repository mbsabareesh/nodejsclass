select distinct tab8.* , sdm.dist_code , sdm.dist_company_name as dist_name , trunc((case when tab8.purchase_value > 0 then ((tab8.expiry_value/tab8.purchase_value)*100) else 0 end),2) as expiry_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.damage_value/tab8.purchase_value)*100) else 0 end),2) as damage_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.qc_value/tab8.purchase_value)*100) else 0 end),2) as qc_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.other_claims_value/tab8.purchase_value)*100) else 0 end),2) as other_claims_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.claim_value/tab8.purchase_value)*100) else 0 end),2) as claim_percentage from (



    select tab7.sdemm_dist_id , tab7.state_name, tab7.market_name, tab7.zone_name , coalesce(tab7.purchase_value,0) as purchase_value , coalesce(tab7.sales_value,0) as sales_value , coalesce(tab7.expiry_value,0) as expiry_value , coalesce(tab7.damage_value,0) as damage_value , coalesce(tab7.qc_value,0) as qc_value , coalesce(tab7.other_claims_value,0) as other_claims_value ,coalesce(tab7.total_approval_value,0) as total_approval_value, coalesce(tab7.claim_value,0) as claim_value from (



        select tab6.*, sum(drbt.bill_total_amount) as purchase_value from (

            select tab5.*, sum(dit.inv_invoice_total_amount) as sales_value from (

                select distinct tab3.* , sum(tab4.claim_total_claim_value) as claim_value , sum(tab4.claim_total_other_claims_claim_value) as other_claims_value , sum(tab4.expiry_value) as expiry_value, sum(tab4.damage_value) as damage_value, sum(tab4.qc_value) as qc_value,sum(tab4.claim_total_approval_value) as total_approval_value from (
                    
                    select distinct sdemm.sdemm_id,sdemm.sdemm_dist_id,sdemm.sdemm_market_report_id,sdemm.sdemm_zone_name as zone_name ,sdemm.sdemm_state_name as state_name , sdemm.sdemm_market_name as market_name from (

                        select distinct * from (WITH RECURSIVE nodes(smh_id, sml_hierarchy_name, sml_market_report_id, sml_level_name) AS (SELECT s1.smh_id,s1.sml_hierarchy_name, s1.sml_market_report_id, s1.sml_level_name FROM sal_market_hierarchy s1 WHERE   s1.smh_id= '0' UNION SELECT s2.smh_id,s2.sml_hierarchy_name, s2.sml_market_report_id, s2.sml_level_name FROM sal_market_hierarchy s2, nodes s1 WHERE s1.smh_id=s2.sml_market_report_id) SELECT * FROM nodes
                        ) as tab1 where tab1.sml_level_name='ZONE'

                    ) as tab2 left join sal_dist_emp_market_mapping as sdemm on tab2.smh_id = sdemm.sdemm_market_report_id
                ) as tab3 left join (
                    
                    select dct.claim_id ,dct.claim_total_approval_value, dct.claim_dist_id, dct.claim_total_claim_value, dct.claim_total_other_claims_claim_value , sum(trunc((((case when spcl.category_claim_expiry_return_allow_ind ='1' then dcit.claim_item_expiry_qty else '0' end) * dcit.claim_item_unit_price)((100 + claim_item_gst)/100)),2)) as expiry_value, sum(trunc((((case when spcl.category_claim_damage_return_allow_ind ='1' then dcit.claim_item_damage_qty else '0' end) * dcit.claim_item_unit_price)((100 + claim_item_gst)/100)),2)) as damage_value, sum(trunc((((case when spcl.category_claim_damage_return_allow_ind ='1' then dcit.claim_item_qc_qty else '0' end) * dcit.claim_item_unit_price)*((100 + claim_item_gst)/100)),2)) as qc_value from dist_claims_table dct, dist_claims_item_table dcit, sal_product_category_list spcl where dct.claim_comp_id = '1' and dct.claim_month_year >= '2024-10-1 00:00:00' and dct.claim_month_year <= '2024-11-30 23:59:59' and dct.claim_id = dcit.claim_item_unique_id and dcit.claim_item_comp_id = '1' and (lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'salesreturn' or lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'nonsalesreturn') and dcit.claim_item_category_id = spcl.category_id and category_comp_id = '1' group by dct.claim_id , dct.claim_dist_id, dct.claim_total_claim_value, dct.claim_total_other_claims_claim_value,dct.claim_total_approval_value
                    
                ) as tab4 on tab3.sdemm_dist_id = tab4.claim_dist_id group by tab3.sdemm_id,tab3.sdemm_dist_id,tab3.sdemm_market_report_id,tab3.zone_name,tab3.state_name,tab3.market_name

            ) as tab5 left join dist_invoice_table as dit on tab5.sdemm_dist_id = dit.inv_dist_id and dit.inv_comp_id  = '1' and dit.inv_creation_datetime >= '2024-10-1 00:00:00' and dit.inv_creation_datetime <= '2024-11-30 23:59:59' and lower(REPLACE (dit.inv_invoice_type, ' ', '' )) = 'invoice' and dit.inv_opening_outstanding_ind = 0 and dit.inv_cancel_status_ind = 0 group by tab5.sdemm_id,tab5.sdemm_dist_id,tab5.sdemm_market_report_id,tab5.zone_name,tab5.state_name,tab5.market_name,tab5.claim_value,tab5.other_claims_value,tab5.expiry_value,tab5.damage_value,tab5.qc_value,tab5.total_approval_value

        ) as tab6 left join dist_recv_bills_table as drbt on tab6.sdemm_dist_id = drbt.bill_dist_id and drbt.bill_comp_id  = '1' and drbt.bill_datetime >= '2024-10-1 00:00:00' and drbt.bill_datetime <= '2024-11-30 23:59:59' and lower(REPLACE (drbt.bill_vendor_type, ' ', '' )) = 'comp_level' and lower(REPLACE (drbt.bill_type, ' ', '' )) = 'invoice' and drbt.bill_cancel_status_ind = '0' group by tab6.sdemm_id,tab6.sdemm_dist_id,tab6.sdemm_market_report_id,tab6.zone_name,tab6.state_name,tab6.market_name,tab6.claim_value,tab6.other_claims_value,tab6.expiry_value,tab6.damage_value,tab6.qc_value,tab6.sales_value,tab6.total_approval_value
        
        ) as tab7 where claim_value > 0 or other_claims_value > 0 or sales_value > 0 or expiry_value > 0 or damage_value > 0 or qc_value > 0 or purchase_value > 0
    ) as tab8

    left join sal_distributer_master as sdm on tab8.sdemm_dist_id = sdm.dist_id and sdm.dist_comp_id = '1' order by sdm.dist_company_name asc ;