/* 
Pesona Color System

color specs on spesific component: 
1. brand colors (primary, secondary, accent), with on colors (on-primary, on-secondary, on-accent);
3. shade colors (black, semi-black, gray, semi-white, white);
4. action colors (success, error, warning, info), with on colors (on-success, on-error, on-warning, on-info);

*/


import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, color } from '@storybook/addon-knobs';

import xTheme from './xTheme';
import xColorPanel from './../panels/xColorPanel';


// todo: refactor this function out, and make it not only about from rgb to hex
function toHex(rgb){
  var isHEX  = /^#[0-9A-F]{6}$/i.test(rgb);

  if (isHEX){
    return rgb;
  }else{
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }
 }
 

storiesOf('OnDevelopment|Theme', module)
  .addDecorator(withKnobs)
  .add('default-theme-color', () => ({
    components: { xColorPanel }, 
    template: `
      <x-color-panel/>
    `,
    methods: { 
      action: action('clicked'),
    },
  }))
  .add('custom-theme-color', () => ({
    components: { xTheme, xColorPanel },
    props: {
      // todo: setup a good hex for this example
      brandPrimary: {
        default: toHex(color('Primary', "#336B87", 'Brand Colors'))
      },
      brandSecondary: {
        default: toHex(color('Secondary', "#90AFC5", 'Brand Colors'))
      },
      brandAccent: {
        default: toHex(color('Accent', "#763626", 'Brand Colors'))
      },
      onPrimary: {
        default: toHex(color('On Primary', "#111111", 'Brand Colors'))
      },
      onSecondary: {
        default: toHex(color('On Secondary', "#222222", 'Brand Colors'))
      },
      onAccent: {
        default: toHex(color('On Accent', "#333333", 'Brand Colors'))
      },
      actionSuccess: {
        default: toHex(color('Success', "#4bf442", 'Action Colors'))
      },
      actionError: {
        default: toHex(color('Error', "#4bf442", 'Action Colors'))
      },
      actionWarning: {
        default: toHex(color('Warning', "#4bf442", 'Action Colors'))
      },
      actionInfo: {
        default: toHex(color('Info', "#4bf442", 'Action Colors'))
      },
      onSuccess: {
        default: toHex(color('On Success', "#111111", 'Action Colors'))
      },
      onError: {
        default: toHex(color('On Error', "#222222", 'Action Colors'))
      },
      onWarning: {
        default: toHex(color('On Warning', "#333333", 'Action Colors'))
      },
      onInfo: {
        default: toHex(color('On Info', "#333333", 'Action Colors'))
      },
      shadeBlack: {
        default: toHex(color('Black', "#000000", 'Shade Colors'))
      },
      shadeSemiBlack: {
        default: toHex(color('Semi Black', "#454545", 'Shade Colors'))
      },
      shadeGray: {
        default: toHex(color('Gray', "#888888", 'Shade Colors'))
      },
      shadeSemiWhite: {
        default: toHex(color('Semi White', "#BCBCBC", 'Shade Colors'))
      },
      shadeWhite: {
        default: toHex(color('White', "#FFFFFF", 'Shade Colors'))
      },
    },
    template: `
      <x-theme :brand-colors="{
                  primary: brandPrimary,
                  secondary: brandSecondary,
                  accent: brandAccent,
                  onPrimary: onPrimary,
                  onSecondary: onSecondary,
                  onAccent: onAccent
                }"

               :action-colors="{
                  success: actionSuccess,
                  error: actionError,
                  warning: actionWarning,
                  info: actionInfo,
                  onSuccess: onSuccess,
                  onError: onError,
                  onWarning: onWarning,
                  onInfo: onInfo,
               }"

               :shade-colors="{
                  black: shadeBlack,
                  semiBlack: shadeSemiBlack,
                  gray: shadeGray,
                  semiWhite: shadeSemiWhite,
                  white: shadeWhite
               }">
                
        <x-color-panel/>
      </x-theme>
    `,
    methods: { 
      action: action('clicked'),
    },
  }))

