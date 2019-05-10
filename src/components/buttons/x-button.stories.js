import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xButton from './xButton';
import xIcon from './../icons/xIcon';

const SIZE_VALUE = {
  HERO: "40px",
  XXLARGE: "32px",
  XLARGE: "28px",
  LARGE: "22px",
  MEDIUM: "18px",
  FAIR: "16px",
  BASE: "14px",
  SMALL: "12px",
  TINY: "10px"
}

storiesOf('OnDevelopment|Button', module)
  .add('button-size', () => ({
    components: { xButton },
    template: `
      <div>
        <div>
          Button Large: <x-button @click="action" :size="'large'">Button</x-button>
        </div>
        <div>
          Button Medium: <x-button @click="action" :size="'medium'">Button</x-button>
        </div>
        <div>
          Button Fair: <x-button @click="action" :size="'fair'">Button</x-button>
        </div>
        <div>
          Button Base: <x-button @click="action" :size="'base'">Button</x-button>
        </div>
        <div>
          Button 30px: <x-button @click="action" :size="'30px'">Button</x-button>
        </div>
      </div>
    `,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }))
  .add('button with our ripple', () => ({
    components: { xButton, xIcon },
    template: `<x-button @click="action" :ripple="false" :size="'medium'">Button</x-button>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }))
  .add('button-color', () => ({
    components: { xButton, xIcon },
    template: `<x-button @click="action" :type="'lain'" :size="'medium'">Button</x-button>`,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick') 
    },
  }));

