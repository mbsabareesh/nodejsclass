select tab11.* from (select distinct tab10., sdm.dist_company_name as dist_name , sdm.dist_code from 

(select distinct tab9.claim_dist_id,  tab9.sdemm_zone_name, concat(tab9.brand_name, '+' , spcl.category_product_name) as product_name , tab9.purchase_value , tab9.sales_value , tab9.expiry_value , tab9.damage_value , tab9.qc_value , tab9.claim_value , tab9.expiry_percentage , tab9.damage_percentage , tab9.qc_percentage , tab9.claim_percentage from 

(select sbd.brand_name , tab8.claim_dist_id, tab8.claim_item_category_id ,  tab8.sdemm_zone_name, tab8.purchase_value , tab8.sales_value , tab8.expiry_value , tab8.damage_value , tab8.qc_value , tab8.claim_value , trunc((case when tab8.purchase_value > 0 then ((tab8.expiry_value/tab8.purchase_value)*100) else 0 end),2) as expiry_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.damage_value/tab8.purchase_value)*100) else 0 end),2) as damage_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.qc_value/tab8.purchase_value)*100) else 0 end),2) as qc_percentage , trunc((case when tab8.purchase_value > 0 then ((tab8.claim_value/tab8.purchase_value)*100) else 0 end),2) as claim_percentage from 

(SELECT tab7.sdemm_zone_name, tab7.claim_dist_id, tab7.claim_item_brand_id, tab7.claim_item_category_id, COALESCE(SUM(tab7.purchase_value), 0) AS purchase_value, COALESCE(SUM(tab7.sales_value), 0) AS sales_value, COALESCE(SUM(tab7.expiry_value), 0) AS expiry_value, COALESCE(SUM(tab7.damage_value), 0) AS damage_value, COALESCE(SUM(tab7.qc_value), 0) AS qc_value, COALESCE(SUM(tab7.claim_value), 0) AS claim_value FROM 

(SELECT tab5., tab6.purchase_value, tab6.sdemm_zone_name FROM 

(SELECT tab3., tab4.sales_value FROM (SELECT tab1., tab2.expiry_value, tab2.damage_value, tab2.qc_value FROM

(SELECT dct.claim_dist_id, dcit.claim_item_brand_id, dcit.claim_item_category_id, SUM(dcit.claim_item_total_amount) AS claim_value FROM dist_claims_table dct , dist_claims_item_table dcit ON dct.claim_id = dcit.claim_item_unique_id WHERE dct.claim_comp_id = '1' AND dct.claim_month_year >= '2024-10-1 00:00:00' and dct.claim_month_year <= '2024-11-30 23:59:59' AND dcit.claim_item_comp_id = '1' AND (lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'salesreturn' or lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'nonsalesreturn' or lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'purchasereceipt')) GROUP BY dct.claim_dist_id, dcit.claim_item_brand_id, dcit.claim_item_category_id) AS tab1

LEFT JOIN (SELECT dct.claim_dist_id, dcit.claim_item_brand_id, dcit.claim_item_category_id, SUM(CASE WHEN spcl.category_claim_expiry_return_allow_ind = '1' THEN dcit.claim_item_expiry_qty * dcit.claim_item_unit_price * ((100 + claim_item_gst) / 100) ELSE 0 END) AS expiry_value, SUM(CASE WHEN spcl.category_claim_damage_return_allow_ind = '1' THEN dcit.claim_item_damage_qty * dcit.claim_item_unit_price * ((100 + claim_item_gst) / 100) ELSE 0 END) AS damage_value, SUM(CASE WHEN spcl.category_claim_damage_return_allow_ind = '1' THEN dcit.claim_item_qc_qty * dcit.claim_item_unit_price * ((100 + claim_item_gst) / 100) ELSE 0 END) AS qc_value FROM dist_claims_table dct , dist_claims_item_table dcit ON dct.claim_id = dcit.claim_item_unique_id , sal_product_category_list spcl ON dcit.claim_item_category_id = spcl.category_id WHERE dct.claim_comp_id = '1' AND dct.claim_month_year >= '2024-10-1 00:00:00' and dct.claim_month_year <= '2024-11-30 23:59:59' AND dcit.claim_item_comp_id = '1' AND (lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'salesreturn' or lower(REPLACE (dcit.claim_item_type,' ', '' )) = 'nonsalesreturn' AND spcl.category_comp_id = '1' GROUP BY dct.claim_dist_id, dcit.claim_item_brand_id, dcit.claim_item_category_id) AS tab2 

ON tab2.claim_item_category_id = tab1.claim_item_category_id) AS tab3 

LEFT JOIN (SELECT dit.inv_dist_id, dipit.prod_item_brand_id, dipit.prod_item_category_id, SUM(dipit.prod_item_total_amount) AS sales_value FROM dist_invoice_table dit , dist_invoice_product_item_table dipit ON dit.inv_id = dipit.prod_item_inv_id WHERE dit.inv_comp_id = '1' AND dit.inv_creation_datetime >= '2024-10-1 00:00:00' and dit.inv_creation_datetime <= '2024-11-30 23:59:59' AND LOWER(REPLACE(dit.inv_invoice_type, ' ', '')) = 'invoice' AND dit.inv_opening_outstanding_ind = 0 AND dit.inv_cancel_status_ind = 0 AND dipit.prod_item_comp_id = '1' AND dit.inv_dist_id = dipit.prod_item_dist_idGROUP BY dit.inv_dist_id, dipit.prod_item_brand_id, dipit.prod_item_category_id) AS tab4 

ON tab3.claim_item_category_id = tab4.prod_item_category_id) AS tab5 

LEFT JOIN (SELECT drbt.bill_dist_id, drbit.bill_item_brand_id, drbit.bill_item_category_id, SUM(drbit.bill_item_total_amount) AS purchase_value, sdemm.sdemm_zone_name FROM dist_recv_bills_table drbt , dist_recv_bills_item_table drbit ON drbt.bill_id = drbit.bill_item_bill_id LEFT JOIN sal_dist_emp_market_mapping sdemm ON drbt.bill_dist_id = sdemm.sdemm_dist_id WHERE drbt.bill_comp_id = '1' AND drbt.bill_datetime >= '2024-10-1 00:00:00' and drbt.bill_datetime <= '2024-11-30 23:59:59' AND LOWER(REPLACE(drbt.bill_vendor_type, ' ', '')) = 'comp_level' AND LOWER(REPLACE(drbt.bill_type, ' ', '')) = 'invoice' AND drbt.bill_cancel_status_ind = '0' AND drbit.bill_item_comp_id = '1' GROUP BY drbt.bill_dist_id, drbit.bill_item_brand_id, drbit.bill_item_category_id, sdemm.sdemm_zone_name) AS tab6 

ON tab5.claim_item_category_id = tab6.bill_item_category_id) AS tab7 

GROUP BY tab7.claim_dist_id, tab7.sdemm_zone_name, tab7.claim_item_brand_id, tab7.claim_item_category_id ) as tab8 

left join sal_brand_details sbd on tab8.claim_item_brand_id = sbd.brand_id and sbd.brand_comp_id = '1') as tab9 

left join sal_product_category_list spcl on tab9.claim_item_category_id = spcl.category_id and spcl.category_comp_id = '1') as tab10 

left join sal_distributer_master sdm on tab10.claim_dist_id = sdm.dist_id) as tab11, 

(select distinct sdemm.sdemm_dist_id , sdemm.sdemm_emp_id , sdemm_market_report_id from (select distinct tab1.* from (WITH RECURSIVE nodes (smh_id, sml_hierarchy_name, sml_market_report_id, sml_level_name) AS (SELECT s1.smh_id, s1.sml_hierarchy_name, s1.sml_market_report_id, s1.sml_level_name FROM sal_market_hierarchy s1 WHERE s1.smh_comp_id = '1' and s1.smh_id in ('62') union SELECT s2.smh_id, s2.sml_hierarchy_name, s2.sml_market_report_id, s2.sml_level_name FROM sal_market_hierarchy s2, nodes s1 WHERE s1.smh_id = s2.sml_market_report_id and s2.smh_comp_id = '1') SELECT * FROM nodes) as tab1 where tab1.sml_level_name = 'ZONE') as atab,

sal_dist_emp_market_mapping sdemm where atab.smh_id = sdemm.sdemm_market_report_id and sdemm_comp_id = '1') as btab where btab.sdemm_dist_id = tab11.claim_dist_id ;