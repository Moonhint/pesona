/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MyButton from './MyButton';

storiesOf('OnDevelopment|Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: { MyButton },
    props: {
      text: {
        default: text('Text', 'Hello Storybook')
      }
    },
    template: `<my-button @click="action">{{text}}</my-button>`,
    methods: { action: action('clicked') },
  }),{
    notes: 'A very simple example of addon notes',
  })
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button>😀 😎 👍 💯</my-button>'
  }), {
    notes: 'A very simple example of addon notes',
  });

/* eslint-enable react/react-in-jsx-scope */
