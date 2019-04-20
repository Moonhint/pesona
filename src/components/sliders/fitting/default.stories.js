import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import FittingSlider from './FittingSlider.vue';

storiesOf('OnDevelopment|FittingSlider', module)
  .add('default', () => ({
    components: { FittingSlider },
    template: '<fitting-slider @click="action"/>',
    methods: { 
      action: action('clicked') 
    },
  }));

