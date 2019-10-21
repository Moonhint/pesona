import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean, color } from '@storybook/addon-knobs';

import xCheckbox from './xCheckbox';

storiesOf('OnDevelopment|Checkbox', module)
  .addDecorator(withKnobs)
  .add('simple checkbox', () => ({
    components: { xCheckbox },
    data: () => {
      return {
        binder: false
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
        <x-checkbox
          v-model="binder" 
          :label="label"
          :mode="mode"
          @change="logModel()">
        </x-checkbox>
        {{binder}}
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))
  .add('mutiple checkbox', () => ({
    components: { xCheckbox },
    data: () => {
      return {
        binde: false,
        binder: ['vA'],
        binders: [],
        items: [{
          name: 'A',
          value: 'vA'
        },{
          name: 'B',
          value: 'vB'
        },{
          name: 'C',
          value: 'vC'
        },{
          name: 'D',
          value: 'vD'
        },{
          name: 'E',
          value: 'vE'
        }]
      }
    },
    props: {
      mode: {
        default: select('Mode', {
          material: 'material',
          antd: 'antd'
        }, 'antd', 'Mode')
      },
    },
    template: `
      <div style="margin: 5px;">
        <x-checkbox
          v-model="binde" 
          label="Normal"
          :mode="mode"
          @change="logModel()">
        </x-checkbox>
        {{binde}}
        <br/>
        <x-checkbox
          v-for="item in items"
          :key="item.name"
          v-model="binder" 
          :label="item.name"
          :val="item.value"
          :mode="mode"
          @change="logModel()">
        </x-checkbox>
        {{binder}}
        <br/>
      </div>
    `,
    methods: { 
      logModel(){
        console.info(this.binder);
      }
    }
  }))


