

select sql2 + select '"+result_7.rows[i].emp_unique_id+"' as orig_emp_id, '"+result_7.rows[i].emp_comp_id+"' as orig_comp_id, '"+result_7.rows[i].emp_employee_id+"' as orig_office_emp_id, '"+result_7.rows[i].emp_name+"' as orig_emp_name, tab.emp_unique_id as rept_emp_unique_id, tab.emp_name as rept_emp_name, tab.emp_comp_id, tab.emp_designation as rept_designation, tab.emp_report_id as rept_emp_report_id, tab.emp_employee_id as rept_emp_id, tab.emp_designation_id from 
(WITH RECURSIVE nodes(emp_unique_id, emp_name, emp_comp_id, emp_designation, emp_report_id, emp_employee_id , emp_designation_id) AS 
(SELECT s1.emp_unique_id, s1.emp_name, s1.emp_comp_id, s1.emp_designation, s1.emp_report_id, s1.emp_employee_id , s1.emp_designation_id FROM sal_employee_mst s1 WHERE s1.emp_unique_id='"+result_7.rows[i].emp_unique_id+"' and s1.emp_comp_id = '"+result_7.rows[i].emp_comp_id+"' and s1.emp_active_ind = '1' 
UNION 
SELECT s2.emp_unique_id, s2.emp_name, s2.emp_comp_id, s2.emp_designation, s2.emp_report_id, s2.emp_employee_id , s2.emp_designation_id FROM sal_employee_mst s2, nodes s1 WHERE s1.emp_unique_id=s2.emp_report_id and s2.emp_comp_id = '"+result_7.rows[i].emp_comp_id+"' and s2.emp_active_ind = '1') 
SELECT * FROM nodes ) as tab;

