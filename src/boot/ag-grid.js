import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

import { createApp }                    from 'vue';

import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from 'ag-grid-enterprise';

import {AgGridVue}                      from 'ag-grid-vue3';

ModuleRegistry.registerModules([AllEnterpriseModule]);

LicenseManager.setLicenseKey('Using_this_{AG_Grid}_Enterprise_key_{AG-085479}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{web4biz_Consulting}_is_granted_a_{Multiple_Applications}_Developer_License_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_{AG_Grid}_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Grid}_Enterprise_versions_released_before_{27_March_2026}____[v3]_[01]_MTc3NDU2OTYwMDAwMA==84d01b5bbd618d3cea10d710c21a46fa');

export default ({ Vue }) => {
    createApp({}).component( 'ag-grid-vue', AgGridVue );
}
