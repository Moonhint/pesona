import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import EsChildNavigator from './EsChildNavigator';

storiesOf('OnDevelopment|SlidingWindow/EsChildNavigator', module)
  .add('child-navigator-by-length', () => ({
    components: { EsChildNavigator },
    template: `<es-child-navigator 
                  :shape="'rectagle'"
                  :length="5" 
                  @child-clicked="childClick"/>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

