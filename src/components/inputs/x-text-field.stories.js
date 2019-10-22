import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';

import xTextField from './xTextField';

storiesOf('OnDevelopment|Text Field', module)
  .addDecorator(withKnobs)
  .add('simple text field', () => ({
    components: { xTextField },
    data: () => {
      return {
        binder: ''
      }
    },
    props: {
      label: {
        default: text('Label', 'Label', 'Indicator')
      },
      placeholder: {
        default: text('Placeholder', 'Placeholder', 'Indicator')
      },
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
      note: {
        default: text('Note', 'Note', 'Indicator')
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-text-field
          @click="logModel"
          v-model="binder" 
          :label="label"
          :placeholder="placeholder"
          :mode="mode"
          :note="note">
        </x-text-field>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))
  .add('password text field', () => ({
    components: { xTextField },
    data: () => {
      return {
        binder: ''
      }
    },
    props: {
      label: {
        default: text('Label', 'Label', 'Indicator')
      },
      placeholder: {
        default: text('Placeholder', 'Placeholder', 'Indicator')
      },
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-text-field
          is-password
          @click="logModel"
          v-model="binder" 
          :label="label"
          :placeholder="placeholder"
          :mode="mode">
        </x-text-field>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))
  .add('Text field with prepend icon', () => ({
    components: { xTextField },
    data: () => {
      return {
        binder: ''
      }
    },
    props: {
      label: {
        default: text('Label', 'Label', 'Indicator')
      },
      placeholder: {
        default: text('Placeholder', 'Placeholder', 'Indicator')
      },
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-text-field
          prepend-icon-name="search"
          @click="logModel"
          v-model="binder" 
          :label="label"
          :mode="mode">
        </x-text-field>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }));

