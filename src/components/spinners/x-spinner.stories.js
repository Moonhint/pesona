import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ReadMe from './ReadMe.md';

import xSpinner from './xSpinner';

storiesOf('OnDevelopment|Spinner', module)
  .add('x-spinner', () => ({
    components: { xSpinner },
    template: `
      <x-spinner>
      </x-spinner>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }),{
    notes: {
      markdown: ReadMe
    }
  });

