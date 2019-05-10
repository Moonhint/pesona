<template>
  <svg class="default-padding" 
       :class="{ 'pointer': clickable }"
       :style="{ fill: color, 'background-color': background, padding: padding}" 
       :width="sizeValue" 
       :height="sizeValue" 
       viewBox="0 0 1024 1024"
       @click="$emit('click')">
    <path :d="pathValue"></path>
  </svg>
</template>

<script>
  import fontAwesome from './sources/font-awesome';
  import materialIcons from './sources/material-icons';
  
  // TODO: handle icon not found by mode, by name;

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
    name: 'x-icon',
    props: {
      // currenty support 2 type of icon (font-awesome, material-icons)
      mode: {
        type: String,
        default: 'font-awesome'
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: SIZE_VALUE.BASE
      },
      hero: Boolean,
      xxlarge: Boolean,
      xlarge: Boolean,
      large: Boolean,
      medium: Boolean,
      fair: Boolean,
      base: Boolean,
      small: Boolean,
      tiny: Boolean,
      color: {
        type: String,
        default: "#000"
      },
      background: {
        type: String,
        default: "transparent"
      },
      padding: {
        type: String,
        default: "5px"
      },
      clickable: Boolean
    },
    computed:{
      pathValue(){
        let index = -1;
        if (this.mode === "font-awesome"){
          index = fontAwesome.selection.findIndex((n) => n.name === this.name);
        }else if (this.mode === "material-icons"){
          index = materialIcons.selection.findIndex((n) => n.ligatures === this.name);
        }

        if (index === -1){
          index = 0;
        }
        
        if (this.mode === "font-awesome"){
          return fontAwesome.icons[index].paths[0];
        }else if (this.mode === "material-icons"){
          return materialIcons.icons[index].paths[0];
        }
      },
      sizeValue(){
        let sizeHierarki = ["hero", "xxlarge", "xlarge", "large", "medium", "fair", "base", "small", "tiny"];
        let value = this.size || SIZE_VALUE.BASE;

        for (let i = 0; i < sizeHierarki.length; i++){
          let currentCheckpoint = sizeHierarki[i];
          if (this[currentCheckpoint]){
            value = SIZE_VALUE[currentCheckpoint.toUpperCase()];
            break;
          }
        }

        return value;
      }
    },
    data() {
      return {
        onLoad: true,
      };
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .default-padding {
    padding: 5px;
  }
  .change-my-color {
    background-color: transparent;
  }
  .pointer {
    cursor: pointer;
  }
</style>
