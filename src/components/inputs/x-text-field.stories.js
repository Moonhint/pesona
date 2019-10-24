import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';

import xTextField from './xTextField';
import xSelect from './xSelect';
import xSelectOption from './xSelectOption';

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
        }, 'xxlarge', 'Size')
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-text-field
          prepend-icon-name="search"
          @click="logModel"
          v-model="binder" 
          :label="label"
          :mode="mode"
          :size="sizeSelect">
        </x-text-field>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))
  .add('Text field with custom prepend', () => ({
    components: { xTextField, xSelect, xSelectOption },
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
    },
    template: `
      <div style="margin: 5px;">
        <x-text-field
          @click="logModel"
          v-model="binder" 
          :label="label"
          :mode="mode"
          :size="sizeSelect">
          <template slot="prepend">
            <span>Rp.</span>
          </template>
        </x-text-field>
        <x-text-field
          @click="logModel"
          v-model="binder" 
          :label="label"
          :mode="mode"
          :size="sizeSelect">
          <template slot="prepend">
            <span style="line-height: 2; margin-left: 12px;">Rp sdhfsdafo.</span>
          </template>
        </x-text-field>
        <x-text-field
          @click="logModel"
          v-model="binder" 
          :label="label"
          :mode="mode"
          :size="sizeSelect">
          <template slot="prepend">
            <x-select size="fair" style="width:150px;" v-model="binder">
              <x-select-option value="other">Other</x-select-option>
              <x-select-option value="ios">Ios</x-select-option>
              <x-select-option value="andorid">Andorid</x-select-option>
            </x-select>
          </template>
        </x-text-field>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }));

