/* 
Pesona Color System

color specs on spesific component: 
1. brand colors (primary, secondary, accent), with on colors (on-primary, on-secondary, on-accent);
3. shade colors (black, semi-black, gray, semi-white, white);
4. action colors (success, error, warning, info), with on colors (on-success, on-error, on-warning, on-info);

*/

import colorUtil from 'utils/color';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, color } from '@storybook/addon-knobs';

import xTheme from './xTheme';
import xColorPanel from './../panels/xColorPanel';

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
        default: colorUtil.toHex(color('Primary', "#336B87", 'Brand Colors'))
      },
      brandSecondary: {
        default: colorUtil.toHex(color('Secondary', "#90AFC5", 'Brand Colors'))
      },
      brandAccent: {
        default: colorUtil.toHex(color('Accent', "#763626", 'Brand Colors'))
      },
      onPrimary: {
        default: colorUtil.toHex(color('On Primary', "#111111", 'Brand Colors'))
      },
      onSecondary: {
        default: colorUtil.toHex(color('On Secondary', "#222222", 'Brand Colors'))
      },
      onAccent: {
        default: colorUtil.toHex(color('On Accent', "#333333", 'Brand Colors'))
      },
      actionSuccess: {
        default: colorUtil.toHex(color('Success', "#4bf442", 'Action Colors'))
      },
      actionError: {
        default: colorUtil.toHex(color('Error', "#4bf442", 'Action Colors'))
      },
      actionWarning: {
        default: colorUtil.toHex(color('Warning', "#4bf442", 'Action Colors'))
      },
      actionInfo: {
        default: colorUtil.toHex(color('Info', "#4bf442", 'Action Colors'))
      },
      onSuccess: {
        default: colorUtil.toHex(color('On Success', "#111111", 'Action Colors'))
      },
      onError: {
        default: colorUtil.toHex(color('On Error', "#222222", 'Action Colors'))
      },
      onWarning: {
        default: colorUtil.toHex(color('On Warning', "#333333", 'Action Colors'))
      },
      onInfo: {
        default: colorUtil.toHex(color('On Info', "#333333", 'Action Colors'))
      },
      shadeBlack: {
        default: colorUtil.toHex(color('Black', "#000000", 'Shade Colors'))
      },
      shadeSemiBlack: {
        default: colorUtil.toHex(color('Semi Black', "#454545", 'Shade Colors'))
      },
      shadeGray: {
        default: colorUtil.toHex(color('Gray', "#888888", 'Shade Colors'))
      },
      shadeSemiWhite: {
        default: colorUtil.toHex(color('Semi White', "#BCBCBC", 'Shade Colors'))
      },
      shadeWhite: {
        default: colorUtil.toHex(color('White', "#FFFFFF", 'Shade Colors'))
      },
      formFrame: {
        default: colorUtil.toHex(color('Frame', "#336B87", 'Form Colors'))
      },
      formText: {
        default: colorUtil.toHex(color('Text', "#90AFC5", 'Form Colors'))
      }
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
               }"
              
               :form-colors="{
                  frame: formFrame,
                  text: formText,
               }">
                
        <x-color-panel/>
      </x-theme>
    `,
    methods: { 
      action: action('clicked'),
    },
  }))

