import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';

import xSelect from './xSelect';
import xSelectOption from './xSelectOption';

storiesOf('OnDevelopment|Select', module)
  .addDecorator(withKnobs)
  .add('simple select', () => ({
    components: { xSelect, xSelectOption },
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
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-select :size="sizeSelect" v-model="binder">
          <x-select-option value="other">Other</x-select-option>
          <x-select-option value="ios">Ios</x-select-option>
          <x-select-option value="andorid">Andorid</x-select-option>
        </x-select>
        <x-select :size="sizeSelect" v-model="binder">
          <x-select-option value="other">Other</x-select-option>
          <x-select-option value="ios">Ios</x-select-option>
          <x-select-option value="andorid">Andorid</x-select-option>
        </x-select>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))

