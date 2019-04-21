import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import EsIcon from './EsIcon';

storiesOf('OnDevelopment|Icon', module)
  // .addDecorator(withInfo)
  .add('Font Awesome Mode', () => ({
    components: { EsIcon },
    template: '<es-icon name="hand-o-right"/>'
  }))
  .add('Material Icon Mode', () => ({
    components: { EsIcon },
    template: '<es-icon mode="material-icons" name="ac_unit"/>'
  }))
  .add('System and Custom Size', () => ({
    components: { EsIcon },
    template: `
      <div>      
        <p>custom:</p>
        <es-icon name="music" size="100"/>
        <p>hero:</p>
        <es-icon name="music" hero/>
        <p>xxlarge:</p>
        <es-icon name="music" xxlarge/>
        <p>xlarge:</p>
        <es-icon name="music" xlarge/>
        <p>large:</p>
        <es-icon name="music" large/>
        <p>medium:</p>
        <es-icon name="music" medium/>
        <p>fair:</p>
        <es-icon name="music" fair/>
        <p>base:</p>
        <es-icon name="music" base/>
        <p>small:</p>
        <es-icon name="music" small/>
        <p>tiny:</p>
        <es-icon name="music" tiny/>
      </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Color', () => ({
    components: { EsIcon },
    template: `
    <div>
      <p>default (#000):</p>
      <es-icon mode="material-icons"/>
      <p>red:</p>
      <es-icon mode="material-icons" color="red"/>
      <p>green:</p>
      <es-icon mode="material-icons" color="green"/>
      <p>blue:</p>
      <es-icon mode="material-icons" color="blue"/>
      <p>#777888:</p>
      <es-icon mode="material-icons" color="#777888"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Background Color', () => ({
    components: { EsIcon },
    template: `
    <div>
      <p>default (transparent):</p>
      <es-icon mode="material-icons"/>
      <p>red:</p>
      <es-icon mode="material-icons" background="red"/>
      <p>green:</p>
      <es-icon mode="material-icons" background="green"/>
      <p>blue:</p>
      <es-icon mode="material-icons" background="blue"/>
      <p>#777888:</p>
      <es-icon mode="material-icons" background="#777888"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Custom Padding', () => ({
    components: { EsIcon },
    template: `
    <div>
      <p>default (5px):</p>
      <es-icon mode="material-icons"/>
      <p>0 padding:</p>
      <es-icon mode="material-icons" padding="0"/>
      <p>10px padding:</p>
      <es-icon mode="material-icons" padding="10px"/>
      <p>20px padding:</p>
      <es-icon mode="material-icons" padding="20px"/>
      <p>50px padding:</p>
      <es-icon mode="material-icons" padding="50px"/>
    </div>
    `,
    methods: { 
      action: action('clicked') 
    },
  }))
  .add('Icon Style Clickable', () => ({
    components: { EsIcon },
    template: '<es-icon mode="material-icons" name="ac_unit" clickable @click="action"/>',
    methods: { 
      action: action('clicked') 
    },
  }))

