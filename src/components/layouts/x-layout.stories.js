import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xLayout from './xLayout';
import xNavbar from './xNavbar';

storiesOf('OnDevelopment|Layout', module)
  .add('layout', () => ({
    components: { xLayout, xNavbar },
    template: `
      <es-layout>
        <template v-slot:header>
          <x-navbar></x-navbar>        
        </template>
        <template v-slot:main>
          <div>this is body</div>    
        </template>
        <template v-slot:footer>
          <div>this is footer</div>
        </template>
      </es-layout>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))

