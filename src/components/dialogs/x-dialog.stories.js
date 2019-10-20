import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ReadMe from './ReadMe.md';

import xDialog from './xDialog';
import xCard from './../cards/xCard';
import xButton from './../buttons/xButton';

storiesOf('OnDevelopment|Dialog', module)
  .add('basic dialog', () => ({
    components: { 
      xDialog,
      xCard,
      xButton
    },
    data: () => {
      return {
        dialog: false
      }
    },
    template: `
      <x-dialog v-model="dialog">
        <x-button slot="activator" schema="info" @click="dialog=true">Open</x-button>
        <x-card width="300px" height="200px">
          <div slot="header">X Card Header</div>
          <div slot="content">
            <p>
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content          
            </p>
          </div>
          <div slot="actions">
            <x-button schema="info" no-border @click="dialog=false">Not Okay</x-button>
            <x-button schema="info" no-border @click="dialog=false">Okay</x-button>
          </div>
        </x-card>
      </x-dialog>
    `,
    methods: { 
      logModel(){
        console.info(this.dialog);
      }
    }
  }),{
    notes: {
      markdown: ReadMe
    }
  })
  .add('presistence dialog', () => ({
    components: { 
      xDialog,
      xCard,
      xButton
    },
    data: () => {
      return {
        dialog: false
      }
    },
    template: `
      <x-dialog persistent v-model="dialog">
        <x-button slot="activator" schema="info" @click="dialog=true">Open</x-button>
        <x-card width="300px" height="200px">
          <div slot="header">X Card Header</div>
          <div slot="content">
            <p>
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content
              X Card Content X Card Content X Card Content X Card Content          
            </p>
          </div>
          <div slot="actions">
            <x-button schema="info" no-border @click="dialog=false">Not Okay</x-button>
            <x-button schema="info" no-border @click="dialog=false">Okay</x-button>
          </div>
        </x-card>
      </x-dialog>
    `,
    methods: { 
      logModel(){
        console.info(this.dialog);
      }
    }
  }),{
    notes: {
      markdown: ReadMe
    }
  })
