<template>
  <div class="pesona-theme">
    <div :key="componentKey">
      <slot></slot>
    </div>
  </div>
</template>



<script>
  import styleMixin from 'mixins/styleMixin';

  export default {
    name: 'x-theme',
    mixins: [styleMixin],
    props:{
      brandColors: {
        type: Object,
        default: () => {
          return {}
        }
      },
      actionColors: {
        type: Object,
        default: () => {
          return {}
        }
      },
      shadeColors: {
        type: Object,
        default: () => {
          return {}
        }
      },
      formColors: {
        type: Object,
        default: () => {
          return {}
        }
      },
      fonts: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data: () => {
      return {
        componentKey: 1
      }
    },
    mounted(){
      this.setColors();
      this.setFonts();
    },
    methods: {
      setColors(){

        let brandColors = {
          primary: this.brandColors.primary || this.xPESONA_COLORS.brandPrimary,
          secondary: this.brandColors.secondary || this.xPESONA_COLORS.brandSecondary,
          accent: this.brandColors.accent || this.xPESONA_COLORS.brandAccent,
          onPrimary: this.brandColors.onPrimary || this.xPESONA_COLORS.onPrimary,
          onSecondary: this.brandColors.onSecondary || this.xPESONA_COLORS.onSecondary,
          onAccent: this.brandColors.onAccent || this.xPESONA_COLORS.onAccent,
        }

        let shadeColors = {
          black: this.shadeColors.primary || this.xPESONA_COLORS.shadeBlack,
          semiBlack: this.shadeColors.semiBlack || this.xPESONA_COLORS.shadeSemiBlack,
          gray: this.shadeColors.secondary || this.xPESONA_COLORS.shadeGray,
          semiWhite: this.shadeColors.semiWhite || this.xPESONA_COLORS.shadeSemiWhite,
          white: this.shadeColors.accent || this.xPESONA_COLORS.shadeWhite,
        }

        let actionColors = {
          success: this.actionColors.success || this.xPESONA_COLORS.actionSuccess,
          info: this.actionColors.info || this.xPESONA_COLORS.actionInfo,
          error: this.actionColors.error || this.xPESONA_COLORS.actionError,
          warning: this.actionColors.warning || this.xPESONA_COLORS.actionWarning,
          onSuccess: this.actionColors.onSuccess || this.xPESONA_COLORS.onSuccess,
          onInfo: this.actionColors.onInfo || this.xPESONA_COLORS.onInfo,
          onWarning: this.actionColors.onWarning || this.xPESONA_COLORS.onWarning,
          onError: this.actionColors.onError || this.xPESONA_COLORS.onError,       
        }

        let formColors = {
          frame: this.formColors.frame || this.xPESONA_COLORS.formFrame,
          text: this.formColors.text || this.xPESONA_COLORS.formText,
        }

        this._setLocalCssVariables({
          '--pesona-brand-color-primary': brandColors.primary,
          '--pesona-brand-color-secondary': brandColors.secondary,
          '--pesona-brand-color-accent': brandColors.accent,
          '--pesona-on-color-primary': brandColors.onPrimary,
          '--pesona-on-color-secondary': brandColors.onSecondary,
          '--pesona-on-color-accent': brandColors.onAccent,
          '--pesona-shade-color-black': shadeColors.black,
          '--pesona-shade-color-semi-black': shadeColors.semiBlack,
          '--pesona-shade-color-gray': shadeColors.gray,
          '--pesona-shade-color-semi-white': shadeColors.semiWhite,
          '--pesona-shade-color-white': shadeColors.white,
          '--pesona-action-color-success': actionColors.success,
          '--pesona-action-color-error': actionColors.error,
          '--pesona-action-color-warning': actionColors.warning,
          '--pesona-action-color-info': actionColors.info,
          '--pesona-on-color-success': actionColors.onSuccess,
          '--pesona-on-color-error': actionColors.onError,
          '--pesona-on-color-warning': actionColors.onWarning,
          '--pesona-on-color-info': actionColors.onInfo,
          '--pesona-form-color-frame': formColors.frame,
          '--pesona-form-color-text': formColors.text,
        });

        this.componentKey++;
      },
      setFonts(){

        let fonts = {
          primary: this.fonts.primary || this.xPESONA_FONTS.primary,
          secondary: this.fonts.secondary || this.xPESONA_FONTS.secondary,
          tertiary: this.fonts.tertiary || this.xPESONA_FONTS.tertiary,
        }

        this._loadFont({
          primary: fonts.primary,
          secondary: fonts.secondary,
          tertiary: fonts.tertiary
        });

        this._setLocalCssVariables({
          '--pesona-font-primary': `${this.fonts.primary}, ${this.xPESONA_FONTS.fallback}`,
          '--pesona-font-secondary': `${this.fonts.secondary}, ${this.xPESONA_FONTS.fallback}`,
          '--pesona-font-tertiary': `${this.fonts.tertiary}, ${this.xPESONA_FONTS.fallback}`,
        });
      }
    },
    watch: {
      brandColors: function () {
        this.setColors();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-theme {

  }
</style>
