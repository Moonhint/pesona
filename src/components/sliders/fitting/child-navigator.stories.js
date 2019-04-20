import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ChildNavigator from './ChildNavigator';

storiesOf('OnDevelopment|FittingSlider/ChildNavigator', module)
  .add('child-navigator-by-length', () => ({
    components: { ChildNavigator },
    template: `<child-navigator 
                  :shape="'rectagle'"
                  :length="5" 
                  @child-clicked="childClick"/>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

