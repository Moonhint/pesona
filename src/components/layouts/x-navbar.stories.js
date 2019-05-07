import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xNavbar from './xNavbar';

storiesOf('OnDevelopment|Navbar', module)
  .add('navbar', () => ({
    components: { xNavbar },
    template: `
      <div>
        <x-navbar></x-navbar>
        <div :style="{
          width: '100%',
          height: '1000px',
          border: '1px solid red'
        }"></div>
      </div>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))
  .add('not a sticky navbar', () => ({
    components: { xNavbar },
    template: `
      <div>
        <x-navbar :sticky="false"></x-navbar>
        <div :style="{
          width: '100%',
          height: '1000px',
          border: '1px solid red'
        }"></div>
      </div>
    `
  }))

