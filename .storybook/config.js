import { configure } from '@storybook/vue';
// import { withInfo } from '@storybook/addon-info';

// addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
