import { Data }                     from './data.module';

import debug            from 'debug';
const log       = debug('app:languages.module');

export const useLanguagesStore = Data( 'languages', 'languages' );

// export const useLanguagesStore = defineStore( 'languages', {
//     state:      () => ({
//         _data:      [],
//     }),
//     getters:    {
//         data:       state => state._data,
//         count:      state => state._data.length
//     },
//     actions:    {
//         init() {
//             log( 'init' );                
//         }
//     }
// });
