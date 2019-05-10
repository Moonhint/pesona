const SIZE_VALUE = {
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

export default {
  methods: {
    _normalizeValue: function(size){
      let templateValue = SIZE_VALUE[size.toUpperCase()];
      if (templateValue) {
        return templateValue;
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue) {
          return `${sizeValue}px`;
        }else{
          return SIZE_VALUE.BASE;
        }
      }
    },
    _normalizeHalfValue: function(size) {
      let templateValue = SIZE_VALUE[size.toUpperCase()];
      if (templateValue){
        return `${Math.floor(parseInt(templateValue)/2)}px`;
      }else{
        let sizeValue = parseInt(size);
        if (sizeValue){
          return `${Math.floor(sizeValue/2)}px`;
        }else{
          return `${Math.floor(parseInt(SIZE_VALUE.BASE)/2)}px`;
        }
      }
    }
  },
}