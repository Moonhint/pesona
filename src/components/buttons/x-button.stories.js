import colorUtil from 'utils/color';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-vue-router';

import buttonMarkdown from './markdowns/button.md';

import xButton from './xButton';
import xIcon from './../icons/xIcon';

const Page1 = {
  template: '<h1>Page 1</h1>'
};
 
const Page2 = {
  template: '<h1>Page 2</h1>'
};

storiesOf('OnDevelopment|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: '/', component: Page1 },
      { path: '/page2', component: Page2 }
    ]
  }))
  .add('button', () => ({
    components: { xButton, xIcon },
    template: `<x-button @click="action" 
                    :ripple="ripple"
                    :uppercase="uppercase"
                    :size="sizeValue"
                    :schema="schemaSelect"
                    :background-color="backgroundColor"
                    :color="color"
                    :href="hrefUrl"
                    :open-in-new-tab="openInNewTab"
                    :block="block"
                    :disabled="disabled"
                    :ghost="ghost"
                    :no-border="noBorder"
                    :shape="shape"
                    :texture="texture">
                  {{content}}
               </x-button>`,
    props: {
      sizeSelect: {
        default: select('Size Option', {
          hero: 'hero',
          xxlarge: 'xxlarge',
          large: 'large',
          medium: 'medium',
          fair: 'fair',
          base: 'base',
          small: 'small',
          tiny: 'tiny'
        }, 'fair', 'Size')
      },
      sizeText: {
        default: text('Size', '', 'Size')
      },
      ripple: {
        default: boolean('Ripple', false, 'Effect')
      },
      uppercase: {
        default: boolean('Uppercase', false, 'Effect')
      },
      block: {
        default: boolean('Block', false, 'Effect')
      },
      disabled: {
        default: boolean('Disabled', false, 'Effect')
      },
      ghost: {
        default: boolean('Ghost', false, 'Effect')
      },
      noBorder: {
        default: boolean('No Border', false, 'Effect')
      },
      schemaSelect: {
        default: select('Schema Option', {
          default: 'default',
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        }, 'default', 'Color')
      },
      color: {
        default: colorUtil.toHex(color('Color', "", 'Color'))
      },
      backgroundColor: {
        default: colorUtil.toHex(color('BG Color', "", 'Color'))
      },
      hrefUrl: {
        default: text('href', '', 'Link')
      },
      openInNewTab: {
        default: boolean('Open New Tab', false, 'Link')
      },
      shape: {
        default: select('Shape', {
          rectangle: 'rectangle',
          pill: 'pill',
          round: 'round'
        }, 'rectangle', 'Shape')
      },
      texture: {
        default: select('Texture', {
          flat: 'flat',
          emboss: 'emboss',
          engrave: 'engrave',
        }, 'flat', 'Shape')
      },
      content: {
        default: text('Content', 'Button', 'Content')
      },
    },
    computed: {
      sizeValue(){
        if (this.sizeText){
          return this.sizeText;
        }else{
          return this.sizeSelect;
        }
      }
    },
    methods: { 
      action: action('clicked'),
    },
  }),
  {
    notes: { markdown: buttonMarkdown }
  })
  .add('button with router', () => ({
    components: { xButton, xIcon },
    props: {
      disabled: {
        default: boolean('Disabled', false, 'Effect')
      },
    },
    template: ` <div>
                  <router-view/>
                  <x-button :schema="'info'" :disabled="disabled">
                    <router-link to="/">
                      To Page 1
                    </router-link>
                  </x-button>
                  <x-button :schema="'info'" :disabled="disabled">
                    <router-link to="/page2">
                      To Page 2
                    </router-link>
                  </x-button>
                </div>`,
    methods: { 
      action: action('clicked'),
    },
  }))
  .add('button round with icon', () => ({
    components: { xButton, xIcon },
    props: {
      disabled: {
        default: boolean('Disabled', false, 'Effect')
      },
      shape: {
        default: select('Shape', {
          rectangle: 'rectangle',
          pill: 'pill',
          round: 'round'
        }, 'round', 'Shape')
      },
      texture: {
        default: select('Texture', {
          flat: 'flat',
          emboss: 'emboss',
          engrave: 'engrave',
        }, 'emboss', 'Shape')
      },
    },
    template: ` <div>
                  <x-button :schema="'info'" 
                            :disabled="disabled" 
                            :shape="shape"
                            :texture="texture">
                    <x-icon name="music" hero/>
                  </x-button>
                </div>`,
    methods: { 
      action: action('clicked'),
    },
  }))
  .add('button with dropdown', () => ({
    components: { xButton, xIcon },
    props: {

    },
    template: ` <div>
                  <router-view/>
                  <x-button dropdown>
                    <div slot="options">
                      <router-link to="/">
                        To Page 1
                      </router-link>
                      <router-link to="/page2">
                        To Page 2
                      </router-link>
                    </div>
                    Pages
                  </x-button>
                </div>`,
    methods: { 
      action: action('clicked'),
    },
  }))
  .add('icon button with dropdown', () => ({
    components: { xButton, xIcon },
    props: {

    },
    template: ` <div>
                  <router-view/>
                  <x-button dropdown no-border>
                    <div slot="options">
                      <router-link to="/">
                        To Page 1
                      </router-link>
                      <router-link to="/page2">
                        To Page 2
                      </router-link>
                    </div>
                    <x-icon name="user-circle" medium padding="0"/>
                  </x-button>
                </div>`,
    methods: { 
      action: action('clicked'),
    },
  }))

