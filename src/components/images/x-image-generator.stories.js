import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xImageGenerator from './xImageGenerator';

storiesOf('OnDevelopment|ImageGenerator', module)
  .add('image-generator', () => ({
    components: { xImageGenerator },
    template: `<x-image-generator />`,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))

