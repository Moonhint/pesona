import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';

import xDatetimePicker from './xDatetimePicker';

storiesOf('OnDevelopment|Datetime Picker', module)
  .addDecorator(withKnobs)
  .add('simple datetime picker', () => ({
    components: { xDatetimePicker },
    data: () => {
      return {
        binder: undefined
      }
    },
    props: {
      label: {
        default: text('Label', 'Label', 'Indicator')
      },
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
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
      }
    },
    template: `
      <div style="margin: 5px;">
        <x-datetime-picker :label="label" :mode="mode" :size="sizeSelect" v-model="binder">
        </x-datetime-picker>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))
  .add('simple datetime picker only date', () => ({
    components: { xDatetimePicker },
    data: () => {
      return {
        binder: undefined
      }
    },
    props: {
      label: {
        default: text('Label', 'Label', 'Indicator')
      },
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
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
      }
    },
    template: `
      <div style="margin: 5px;">
        <x-datetime-picker only-date :label="label" :mode="mode" :size="sizeSelect" v-model="binder">
        </x-datetime-picker>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))

