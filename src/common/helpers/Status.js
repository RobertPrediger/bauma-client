/* global  */
import debug            from 'debug';
const log       = debug('app:Status');

log( 'start' );

export default function status( t ) {
    return [
        { value: 'new',       label: t('messages.LabelStateNew'), selected: true },
        { value: 'open',      label: t('messages.LabelStateOpen') },
        { value: 'pending',   label: t('messages.LabelStatePending') },
        { value: 'closed',    label: t('messages.LabelStateClosed') },
    ];
}