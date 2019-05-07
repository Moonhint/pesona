import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xButton from './xButton';

storiesOf('OnDevelopment|Button', module)
  .add('button-material', () => ({
    components: { xButton },
    template: `<x-button @click="action">Button</x-button>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

