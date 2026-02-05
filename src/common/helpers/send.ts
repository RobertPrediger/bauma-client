import debug                            from 'debug';
const log         = debug('app:components.Send');

export default function send() {

    // send email
    async function EMail( order: any ) {
        log( 'EMail', order );
    }

    // send letter
    async function Mail( order: any ) {
        log( 'Mail', order );
    }

    // send letter
    async function sendDate( order: any ) {
        log( 'Date', order );
    }

    return {
        EMail,
        Mail,
        Date:   sendDate
    };
}
