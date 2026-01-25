import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:components.Send');

export default function send() {

    // send email
    async function EMail( lead ) {
        log( 'EMail', lead );
    }

    // send letter
    async function Mail( lead ) {
        log( 'Mail', lead );
    }

    // send letter
    async function sendDate( lead ) {
        log( 'Date', lead );
    }

    return {
        EMail,
        Mail,
        Date:   sendDate
    };
}
