import webfontloader from 'webfontloader';

export default {
  data: () => {
    return {
      xPESONA_COLORS: {
        // brands
        brandPrimary: "#FF420E",
        brandSecondary: "#F98866",
        brandAccent: "#80BD9E",
        onPrimary: "#FFF",
        onSecondary: "#FFF",
        onAccent: "#FFF",

        // shades
        shadeBlack: "#000",
        shadeSemiBlack: "#454545",
        shadeGray: "#888",
        shadeSemiWhite: "#BCBCBC",
        shadeWhite: "#FFF",

        // actions
        actionSuccess: "#4bf442",
        actionError: "#f44141",
        actionWarning: "#f4ee41",
        actionInfo: "#41f4ee",
        onSuccess: "#000",
        onError: "#FFF",
        onWarning: "#000",
        onInfo: "#000",

        // form
        formFrame: "#336B87",
        formText: "#000",
      },
      xPESONA_FONTS: {
        fallback: 'Arial',
        primary: 'Roboto',
        secondary: 'Oswald',
        tertiary: 'Mansalva',
      }
    };
  },
  mounted() {
    this._loadFont();
    document.documentElement.style.setProperty("--pesona-brand-color-primary", this.xPESONA_COLORS.brandPrimary);
    document.documentElement.style.setProperty("--pesona-brand-color-secondary", this.xPESONA_COLORS.brandSecondary);
    document.documentElement.style.setProperty("--pesona-brand-color-accent", this.xPESONA_COLORS.brandAccent);
    document.documentElement.style.setProperty("--pesona-on-color-primary", this.xPESONA_COLORS.onPrimary);
    document.documentElement.style.setProperty("--pesona-on-color-secondary", this.xPESONA_COLORS.onSecondary);
    document.documentElement.style.setProperty("--pesona-on-color-accent", this.xPESONA_COLORS.onAccent);
    document.documentElement.style.setProperty("--pesona-shade-color-black", this.xPESONA_COLORS.shadeBlack);
    document.documentElement.style.setProperty("--pesona-shade-color-semi-black", this.xPESONA_COLORS.shadeSemiBlack);
    document.documentElement.style.setProperty("--pesona-shade-color-gray", this.xPESONA_COLORS.shadeGray);
    document.documentElement.style.setProperty("--pesona-shade-color-semi-white", this.xPESONA_COLORS.shadeSemiWhite);
    document.documentElement.style.setProperty("--pesona-shade-color-white", this.xPESONA_COLORS.shadeWhite);
    document.documentElement.style.setProperty("--pesona-action-color-success", this.xPESONA_COLORS.actionSuccess);
    document.documentElement.style.setProperty("--pesona-action-color-error", this.xPESONA_COLORS.actionError);
    document.documentElement.style.setProperty("--pesona-action-color-warning", this.xPESONA_COLORS.actionWarning);
    document.documentElement.style.setProperty("--pesona-action-color-info", this.xPESONA_COLORS.actionInfo);
    document.documentElement.style.setProperty("--pesona-on-color-success", this.xPESONA_COLORS.onSuccess);
    document.documentElement.style.setProperty("--pesona-on-color-error", this.xPESONA_COLORS.onError);
    document.documentElement.style.setProperty("--pesona-on-color-warning", this.xPESONA_COLORS.onWarning);
    document.documentElement.style.setProperty("--pesona-on-color-info", this.xPESONA_COLORS.onInfo);
    document.documentElement.style.setProperty("--pesona-form-color-frame", this.xPESONA_COLORS.formFrame);
    document.documentElement.style.setProperty("--pesona-form-color-text", this.xPESONA_COLORS.formText);
    document.documentElement.style.setProperty("--pesona-font-primary", `${this.xPESONA_FONTS.primary}, ${this.xPESONA_FONTS.fallback}`);
    document.documentElement.style.setProperty("--pesona-font-secondary", `${this.xPESONA_FONTS.secondary}, ${this.xPESONA_FONTS.fallback}`);
    document.documentElement.style.setProperty("--pesona-font-tertiary", `${this.xPESONA_FONTS.tertiary}, ${this.xPESONA_FONTS.fallback}`);
  },
  methods: {
    _loadFont(fonts = {}){
      let self = this;
      webfontloader.load({
        google: {
          families: [
            fonts.primary || self.xPESONA_FONTS.primary,
            fonts.secondary || self.xPESONA_FONTS.secondary,
            fonts.tertiary || self.xPESONA_FONTS.tertiary
          ]
        }
      });
    },
    _setLocalCssVariables(variables){
      let self = this;
      let keys = Object.keys(variables);

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        self.$el.style.setProperty(key, variables[key]);
      }
    },
    _setGlobalCssVariables(variables){
      let keys = Object.keys(variables);

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        document.documentElement.style.setProperty(key, variables[key]);
      }
    },
    _colorLuminance(hex, lum) {

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
    },
    _findNearestxThemeorHTML(){
      let element = this.$el;
      let searchEl = true;
      while(searchEl){
        if (!element){
          searchEl = false;
        }else{
          if ((element.tagName === 'HTML') ||
              (element.tagName === 'DIV' && element.className === 'pesona-theme')) 
          {
            searchEl = false;
          }else{
            element = element.parentElement;
          }
        }
      }
      return element;
    },
    _getCurrentColors() {
      let element = this._findNearestxThemeorHTML();
      if (element){
        return {
          brands: {
            primary: element.style.getPropertyValue("--pesona-brand-color-primary"),
            secondary: element.style.getPropertyValue("--pesona-brand-color-secondary"),
            accent: element.style.getPropertyValue("--pesona-brand-color-accent")
          },
          onBrands: {
            primary: element.style.getPropertyValue("--pesona-on-color-primary"),
            secondary: element.style.getPropertyValue("--pesona-on-color-secondary"),
            accent: element.style.getPropertyValue("--pesona-on-color-accent")
          },
          shade: {
            black: element.style.getPropertyValue("--pesona-shade-color-black"),
            semiBlack: element.style.getPropertyValue("--pesona-shade-color-semi-black"),
            gray: element.style.getPropertyValue("--pesona-shade-color-gray"),
            semiWhite: element.style.getPropertyValue("--pesona-shade-color-semi-white"),
            white: element.style.getPropertyValue("--pesona-shade-color-white")
          },
          actions: {
            success: element.style.getPropertyValue("--pesona-action-color-success"),
            error: element.style.getPropertyValue("--pesona-action-color-error"),
            warning: element.style.getPropertyValue("--pesona-action-color-warning"),
            info: element.style.getPropertyValue("--pesona-action-color-info")  
          },
          onActions: {
            success: element.style.getPropertyValue("--pesona-on-color-success"),
            error: element.style.getPropertyValue("--pesona-on-color-error"),
            warning: element.style.getPropertyValue("--pesona-on-color-warning"),
            info: element.style.getPropertyValue("--pesona-on-color-info")  
          },
          forms: {
            frame: element.style.getPropertyValue("--pesona-form-color-frame"),
            text: element.style.getPropertyValue("--pesona-form-color-text"),
          },
        }
      }else{
        return {};
      }
    },
    _getCurrentFonts() {
      let element = this._findNearestxThemeorHTML();
      if (element){
        return {
          fonts: {
            primary: element.style.getPropertyValue("--pesona-font-primary"),
            secondary: element.style.getPropertyValue("--pesona-font-secondary"),
            tertiary: element.style.getPropertyValue("--pesona-font-tertiary")
          }
        }
      }else{
        return {};
      }
    }
  },
}