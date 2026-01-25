import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

import { createApp }                    from 'vue';

import { LicenseManager }               from 'ag-grid-enterprise'

import {AgGridVue}                      from 'ag-grid-vue3';

LicenseManager.setLicenseKey('Using_this_AG_Grid_Enterprise_key_( AG-042680 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( ZAD tools GmbH & Co. KG )_is_granted_a_( Single Application )_Developer_License_for_the_application_( Dispolive )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( Dispolive )_need_to_be_licensed___( Dispolive )_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 28 July 2024 )____[v2]_MTcyMjEyMTIwMDAwMA==ba2602769a0de568fe26482e88b87385');

export default ({ Vue }) => {
    createApp({}).component( 'ag-grid-vue', AgGridVue );
}
