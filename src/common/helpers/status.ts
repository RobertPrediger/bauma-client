/* global  */
import debug            from 'debug';
const log       = debug('app:Status');

log( 'start' );

export default function status() {
    return [
        { value: 'new',       label: 'Neu',             selected: true },
        { value: 'open',      label: 'Offen' },
        { value: 'pending',   label: 'Ausstehend' },
        { value: 'closed',    label: 'Geschlossen' },
    ];
}
