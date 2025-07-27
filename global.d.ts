import { HSAccordion } from 'flyonui/flyonui';

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
