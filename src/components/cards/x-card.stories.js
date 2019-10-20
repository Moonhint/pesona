import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ReadMe from './ReadMe.md';

import xCard from './xCard';
import xButton from './../buttons/xButton';

storiesOf('OnDevelopment|Card', module)
  .add('basic card', () => ({
    components: { 
      xCard,
      xButton
    },
    data: () => {
      return {
      }
    },
    template: `
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
    `,
    methods: { 

    }
  }),{
    notes: {
      markdown: ReadMe
    }
  });