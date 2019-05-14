import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xColorPanel from './xColorPanel';

storiesOf('OnDevelopment|ColorPanel', module)
  .add('color-panel', () => ({
    components: { xColorPanel },
    data: () => {
      return {
        light: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
        dark: [-0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9, -1]
      }
    },
    template: `
      <x-color-panel/>
    `,
    methods: { 
      action: action('clicked'),
      childClick: action('childClick'), 
      colorLuminance(hex, lum) {

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
          hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
          c = parseInt(hex.substr(i*2,2), 16);
          c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
          rgb += ("00"+c).substr(c.length);
        }

        return rgb;
      }
    },
  }));

