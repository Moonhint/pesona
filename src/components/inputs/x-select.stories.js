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
    },
    template: `
      <div style="margin: 5px;">
        <x-select v-model="binder" style="width: 150px;">
          <x-select-option value="other">Other</x-select-option>
          <x-select-option value="ios">Ios</x-select-option>
          <x-select-option value="andorid">Andorid</x-select-option>
        </x-select>
        <x-select v-model="binder">
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

