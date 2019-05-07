import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xIcon from './xIcon';

storiesOf('OnDevelopment|Icon', module)
  // .addDecorator(withInfo)
  .add('Font Awesome Mode', () => ({
    components: { xIcon },
    template: '<x-icon name="hand-o-right"/>'
  }))
  .add('Material Icon Mode', () => ({
    components: { xIcon },
    template: '<x-icon mode="material-icons" name="ac_unit"/>'
  }))
  .add('System and Custom Size', () => ({
    components: { xIcon },
    template: `
      <div>      
        <p>custom:</p>
        <x-icon name="music" size="100"/>
        <p>hero:</p>
        <x-icon name="music" hero/>
        <p>xxlarge:</p>
        <x-icon name="music" xxlarge/>
        <p>xlarge:</p>
        <x-icon name="music" xlarge/>
        <p>large:</p>
        <x-icon name="music" large/>
        <p>medium:</p>
        <x-icon name="music" medium/>
        <p>fair:</p>
        <x-icon name="music" fair/>
        <p>base:</p>
        <x-icon name="music" base/>
        <p>small:</p>
        <x-icon name="music" small/>
        <p>tiny:</p>
        <x-icon name="music" tiny/>
      </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Color', () => ({
    components: { xIcon },
    template: `
    <div>
      <p>default (#000):</p>
      <x-icon mode="material-icons"/>
      <p>red:</p>
      <x-icon mode="material-icons" color="red"/>
      <p>green:</p>
      <x-icon mode="material-icons" color="green"/>
      <p>blue:</p>
      <x-icon mode="material-icons" color="blue"/>
      <p>#777888:</p>
      <x-icon mode="material-icons" color="#777888"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Background Color', () => ({
    components: { xIcon },
    template: `
    <div>
      <p>default (transparent):</p>
      <x-icon mode="material-icons"/>
      <p>red:</p>
      <x-icon mode="material-icons" background="red"/>
      <p>green:</p>
      <x-icon mode="material-icons" background="green"/>
      <p>blue:</p>
      <x-icon mode="material-icons" background="blue"/>
      <p>#777888:</p>
      <x-icon mode="material-icons" background="#777888"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Padding', () => ({
    components: { xIcon },
    template: `
    <div>
      <p>default (5px):</p>
      <x-icon mode="material-icons"/>
      <p>0 padding:</p>
      <x-icon mode="material-icons" padding="0"/>
      <p>10px padding:</p>
      <x-icon mode="material-icons" padding="10px"/>
      <p>20px padding:</p>
      <x-icon mode="material-icons" padding="20px"/>
      <p>50px padding:</p>
      <x-icon mode="material-icons" padding="50px"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Icon Style Clickable', () => ({
    components: { xIcon },
    template: '<x-icon mode="material-icons" name="ac_unit" clickable @click="action"/>',
    methods: { 
      action: action('clicked') 
    },
  }))

