import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xNotif from './xNotif';

storiesOf('OnDevelopment|Notif', module)
  .add('simple notif', () => ({
    components: { xNotif },
    data: () => {
      return {
      }
    },
    template: `
      <x-notif >Notif</x-notif>
    `,
    methods: { 
      action: action('clicked'),
    },
  }));

