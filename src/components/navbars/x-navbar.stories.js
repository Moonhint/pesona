import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xNavbar from './xNavbar';
import xButton from './../buttons/xButton';
import xIcon from './../icons/xIcon';

storiesOf('OnDevelopment|Navbar', module)
  .add('navbar', () => ({
    components: { xNavbar, xButton, xIcon },
    template: `
      <div>
        <x-navbar topping sticky>
          <div slot="right-side">
            Right Title
          </div>
          <div slot="left-side"> 
            <x-button dropdown>
              <div slot="options">
                <a @click="itemClick" to="/">
                  To Page 1
                </a>
                <a to="/page2">
                  To Page 2
                </a>
              </div>
              Pages
            </x-button>
            <x-button>
              Single Page
            </x-button>
            <x-button v-for="i in [1,2]" dropdown>
              <div slot="options">
                <a @click="itemClick" to="/">
                  To Page 1
                </a>
                <a to="/page2">
                  To Page 2
                </a>
              </div>
              Pages
            </x-button>
            <x-button ghost>
              Single Page
            </x-button>
            <x-button :schema="'info'" :background-color="'blue'" :color="'#fff'">
              Single Page
            </x-button>
          </div>
          <div slot="left-action">
            <x-button dropdown no-border style="width:85px">
              <div slot="options">
                <a @click="itemClick" to="/">
                  To Page 1
                </a>
                <a to="/page2">
                  To Page 2
                </a>
              </div>
              <x-icon name="user-circle" large padding="0"/>
            </x-button>
          </div>
        </x-navbar>
        <div :style="{
          width: '100%',
          height: '1000px'
        }"></div>
      </div>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))
  .add('sticky navbar', () => ({
    components: { xNavbar },
    template: `
      <div>
        <x-navbar sticky></x-navbar>
        <div :style="{
          width: '100%',
          height: '1000px'
        }"></div>
      </div>
    `
  }))

