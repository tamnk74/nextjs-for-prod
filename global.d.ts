import { HSAccordion } from 'flyonui/flyonui';

// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/en.json');
declare interface IntlMessages extends Messages {}

declare global {
  interface Window {
    _;
    $: typeof import('jquery');
    jQuery: typeof import('jquery');

    HSStaticMethods: IStaticMethods;
    HSAccordion: typeof HSAccordion;
  }
}

export {};
