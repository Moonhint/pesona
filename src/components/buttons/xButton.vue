<template>
  <a  class="pesona-button" 
      :class="{
        'ripple': ripple, 
        'uppercase': uppercase
      }"
      :style="{ 
        'font-size': sizeValue,  
        'padding': `${sizeHalfValue} ${sizeValue}`,
        'margin': margin,
        'font-family': fontFamily
      }"
      v-on="$listeners">
    <slot></slot>
  </a>
</template>

<script>
  // TODO: button with background colors (red, green, blue, yellow, white, black, custom)
  // TODO: button with text colors (?)
  // TODO: button with margin (default and custom margin)
  // TODO: button with font-style (default and custom) 
  // TODO: button with icon (icon position -> right, left)
  // TODO: explore available button style: 'flat'{default}, 'embose'
  // TODO: button with style 'none'{default}, 'ripple', 
  // TODO: button with disable
  // TODO: button with href
  // TODO: button with gradient or solid{default}
  // TODO: button with block property
  // TODO: button shape (round, pill, rectangle{default})
  // TODO: button with ghost property
  // TODO: button with spinners

  import dimensionCalculator from 'mixins/dimensionCalculator';
  import colorPallete from 'mixins/colorPallete';

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

  const COLOR = {
    RED: "",
    GREEN: "",
    BLUE: "",
    YELLOW: "",
    WHITE: "",
    BLACK: ""
  }

  export default {
    name: 'x-button',
    mixins: [colorPallete, dimensionCalculator],
    props:{
      type: {
        type: String,
        default: "flat"
      },
      // size of the button, can string or number
      size: {
        type: String,
        default: "base"
      },
      margin: {
        type: String,
        default: "2px"
      },
      fontFamily: {
        type: String,
        default: 'arial'
      },
      // make button text to uppercase
      uppercase: {
        type: Boolean,
        default: false
      },
      // enable or disable ripple effect when button click
      ripple: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: '#BFBFBF'
      },
      color: {
        type: String,
        default: '#343434'
      }
    },
    data() {
      return {

      };
    },
    created() {

    },
    mounted(){
      this.$el.style.setProperty("--bg-color-value", this.backgroundColorValue);
      this.$el.style.setProperty("--color-value", this.colorValue);
    },
    computed: {
      sizeValue(){
        return this._normalizeValue(this.size);
      },  
      sizeHalfValue() {
        return this._normalizeHalfValue(this.size);
      },
      backgroundColorValue(){
        return this.backgroundColor;
      },
      colorValue(){
        return this.color;
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-button {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    color: var(--color-value);
    background-color: var(--bg-color-value);
    text-align: center;
    letter-spacing: .5px;
    outline: 0;
    border: none;
    border-radius: 2px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .ripple {
    // box-shadow: 0 0 4px #999;
    background-position: center;
    transition: background 0.4s;
  }

  .ripple:hover {
    background: var(--bg-color-value) radial-gradient(circle, transparent 1%, var(--bg-color-value) 1%) center/15000%;
  }

  .ripple:active {
    background-color: var(--color-value);
    background-size: 100%;
    transition: background 0s;
  }

</style>
