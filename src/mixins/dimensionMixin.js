export default {
  data: () => {
    return {
      xPESONA_SIZE_VALUE: {
        HERO: "40px",
        XXLARGE: "32px",
        XLARGE: "28px",
        LARGE: "22px",
        MEDIUM: "18px",
        FAIR: "16px",
        BASE: "14px",
        SMALL: "12px",
        TINY: "10px"
      }
    };
  },
  mounted() {
    document.documentElement.style.setProperty("--pesona-font-hero", this.xPESONA_SIZE_VALUE.HERO);
    document.documentElement.style.setProperty("--pesona-font-xxlarge", this.xPESONA_SIZE_VALUE.XXLARGE);
    document.documentElement.style.setProperty("--pesona-font-xlarge", this.xPESONA_SIZE_VALUE.XLARGE);
    document.documentElement.style.setProperty("--pesona-font-large", this.xPESONA_SIZE_VALUE.LARGE);
    document.documentElement.style.setProperty("--pesona-font-medium", this.xPESONA_SIZE_VALUE.MEDIUM);
    document.documentElement.style.setProperty("--pesona-font-fair", this.xPESONA_SIZE_VALUE.FAIR);
    document.documentElement.style.setProperty("--pesona-font-base", this.xPESONA_SIZE_VALUE.BASE);
    document.documentElement.style.setProperty("--pesona-font-small", this.xPESONA_SIZE_VALUE.SMALL);
    document.documentElement.style.setProperty("--pesona-font-tiny", this.xPESONA_SIZE_VALUE.TINY);
  },
  methods: {
    _normalizeValue: function(size){
      let templateValue = this.xPESONA_SIZE_VALUE[size.toUpperCase()];
      if (templateValue) {
        return templateValue;
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue) {
          return `${sizeValue}px`;
        }else{
          return this.xPESONA_SIZE_VALUE.BASE;
        }
      }
    },
    _normalizeHalfValue: function(size) {
      let templateValue = this.xPESONA_SIZE_VALUE[size.toUpperCase()];
      if (templateValue){
        return `${Math.floor(parseInt(templateValue)/2)}px`;
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue){
          return `${Math.floor(sizeValue/2)}px`;
        }else{
          return `${Math.floor(parseInt(this.xPESONA_SIZE_VALUE.BASE)/2)}px`;
        }
      }
    },
    _normalizeHalfInHalfValue: function(size) {
      let templateValue = this.xPESONA_SIZE_VALUE[size.toUpperCase()];
      let halfValue = 0;
      let inHalfValue = 0;
      if (templateValue){
        halfValue = Math.floor(parseInt(templateValue)/2);
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue){
          halfValue = Math.floor(sizeValue/2);
        }else{
          halfValue = this.xPESONA_SIZE_VALUE.BASE/2;
        }
      }
      inHalfValue = Math.floor(halfValue/2);
      return `${halfValue+inHalfValue}px`;
    },
    _normalizeDoubleValue: function(size) {
      let templateValue = this.xPESONA_SIZE_VALUE[size.toUpperCase()];
      if (templateValue){
        return `${Math.floor(parseInt(templateValue)*2)}px`;
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue){
          return `${Math.floor(sizeValue*2)}px`;
        }else{
          return `${Math.floor(parseInt(this.xPESONA_SIZE_VALUE.BASE)*2)}px`;
        }
      }
    }
  },
}