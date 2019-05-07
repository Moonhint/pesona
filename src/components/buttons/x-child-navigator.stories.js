import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xChildNavigator from './xChildNavigator';

storiesOf('OnDevelopment|SlidingWindow/ChildNavigator', module)
  .add('child-navigator-by-length', () => ({
    components: { xChildNavigator },
    template: `<x-child-navigator 
                  :shape="'rectagle'"
                  :length="5" 
                  @child-clicked="childClick"/>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

