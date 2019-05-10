import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xColorPanel from './xColorPanel';

storiesOf('OnDevelopment|ColorPanel', module)
  .add('color-panel', () => ({
    components: { xColorPanel },
    template: `
      <div>
        <div>
          <x-color-panel :color="'red'"/>
        </div>
      </div>
    `,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

