<template>
  <div class="pesona-button-wrapper"         
    @mouseenter="hoverChange"
    @mouseleave="hoverChange">
    <div class="pesona-button" :class="{
          'ripple': ripple, 
          'uppercase': uppercase,
          'block': block,
          'disabled': disabled,
          'ghost': ghost,
          'no-border': noBorder,
          'shape-round': (shape === 'round'),
          'shape-pill': (shape === 'pill'),
          'shape-rectangle': (shape === 'rectangle'),
          'texture-flat': (texture === 'flat'),
          'texture-emboss': (texture === 'emboss'),
          'texture-engrave': (texture === 'engrave')
        }"
        :style="{ 
          'font-size': sizeValue,  
          'padding': `${sizeHalfValue} ${sizeValueByAncorCalc}`,
          'margin': margin,
          'padding-right': `${sizeQuarterValue}`
        }"
        :href="href"
        @click="onClick"
        v-on="$listeners">
      <slot></slot>
      <div class="downdown-indicator">
        <x-icon v-if="dropdown && showOption" padding="0" name="caret-up" :size="sizeValue"/>
        <x-icon v-if="dropdown && !showOption" padding="0" name="caret-down" :size="sizeValue"/>
      </div>
    </div>
    <div v-if="dropdown && showOption" class="dropdown-option">
      <slot name="options"></slot>
    </div>
  </div>
</template>

<script>
  // TODO: button with style 'none'{default}, 'ripple', 
  // TODO: button with gradient or solid{default}
  // TODO: button with spinners

  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import xIcon from './../icons/xIcon'; 

  export default {
    name: 'x-button',
    components: { xIcon },
    mixins: [styleMixin, dimensionMixin],
    props:{
      texture: {
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
      schema: {
        type: String,
        default: "default"
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: undefined
      },
      openInNewTab: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      ghost: {
        type: Boolean,
        default: false
      },
      noBorder: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'rectangle'
      },
      dropdown: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        ancorElem: undefined,
        showOption: false,
        inHover: false
      };
    },
    created() {

    },
    mounted(){
      this.ancorElem = this.$el.getElementsByTagName('a')[0];
      this.setColorsByScheme(this.schema);
      this.setPeparedPropColors();
      this._setLocalCssVariables({ 
        '--size-value': this.sizeValue,
        '--size-half-value': this.sizeHalfValue,
        '--size-double-value': this.sizeDoubleValue,
        '--pointer-events-value': this.pointerEventsValue
      });
    },
    computed: {
      sizeValue(){
        return this._normalizeValue(this.size);
      },  
      sizeHalfValue() {
        return this._normalizeHalfValue(this.size);
      },
      sizeDoubleValue() {
        return this._normalizeDoubleValue(this.size);
      },
      sizeHalfInHalfValue(){
        return this._normalizeHalfInHalfValue(this.size);
      },
      sizeQuarterValue(){
        return this._normalizeQuarterValue(this.size);
      },
      anyAncorOnChild(){
        return (this.ancorElem) ? true : false;
      },
      sizeValueByAncorCalc() {
        if (this.anyAncorOnChild && !this.dropdown){
          return 0;
        }else{
          if (this.shape === 'round'){
            return this.sizeHalfInHalfValue;
          }else{
            return this.sizeValue;
          }
        }
      },
      pointerEventsValue(){
        return (this.disabled) ? 'none' : 'auto';
      },
    },
    methods: {
      hoverChange(e){
        if (e.type === 'mouseenter'){
          this.inHover = true;
          this.showOption = true;
        }else if (e.type === 'mouseleave'){
          this.inHover = false;
          this.showOption = false;
        }
      },
      setPeparedPropColors(){
        if (this.backgroundColor){
          this._setLocalCssVariables({ '--bg-color-value': this.backgroundColor });
        }
        if (this.color){
          this._setLocalCssVariables({ '--color-value': this.color });
        }
      },
      setColorsByScheme(val){
        let currentColors = this._getCurrentColors();
        let hex = "";
        let onHex = "";
        if (currentColors.actions){
          hex = currentColors.actions[val];
          onHex = currentColors.onActions[val];
          if (!hex){
            hex = currentColors.shade.gray;
            onHex = currentColors.shade.black;
          }
        }
        this._setLocalCssVariables({
          '--bg-color-value': hex,
          '--color-value': onHex
        });
      },
      onClick(){
        if (!this.disabled){
          if (!this.dropdown){
            if (this.href){
              if (this.openInNewTab){
                window.open(this.href, '_blank');
              }else{
                window.location = this.href;
              }
            }
          }else{
            this.showOption = !this.showOption;
          }
        }
      }
    },
    watch: {
      schema: function (val){
        this.setColorsByScheme(val);
      },
      backgroundColor: function (val){
        this._setLocalCssVariables({ '--bg-color-value': val });
      },
      color: function (val){
        this._setLocalCssVariables({ '--color-value': val });
      },
      disabled: function (val){
        this._setLocalCssVariables({ '--pointer-events-value': (val) ? 'none' : 'auto' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-button-wrapper {
    display: inline-block;
  }
  .pesona-button {
    font-family: var(--pesona-font-primary);
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

    a {
      text-decoration: none;
      color: var(--color-value);
      padding: var(--size-half-value) var(--size-value);
      pointer-events: var(--pointer-events-value);
    }
  }

  .block {
    display: block;
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

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ghost {
    border: 1px solid var(--bg-color-value);
    background-color: transparent;
  }
  
  .no-border {
    border: none;
    background-color: transparent;
  }

  .shape-round {
    border-radius: 50%;
  }

  .shape-pill {
    border-radius: var(--size-double-value);
  }

  .shape-rectangle {
    border-radius: 0;
  }

  .texture-flat {
    box-shadow: none;    
  }

  .texture-emboss {
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);    
  }

  .texture-engrave {
    box-shadow: inset 0.02em 0.08em 0.2em 0.08em rgba(0, 0, 0, 0.5);   
  }

  .downdown-indicator {
    display: inline-block;
    text-align: center;
    margin: 0 2px;
    transform: translateY(15%);
  }

  .dropdown-option {
    display: block;
    position: relative;
    top: 5px;
    background-color: var(--bg-color-value);

    a {
      display: block;
      padding: 6px 8px;
      padding-left: 10px;
      text-decoration: none;
      color: var(--color-value);
      cursor: pointer;
    }
  }

  .dropdown-option:after {
    content: "";
    position: absolute;
    right: 50%;
    top: -6px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent var(--bg-color-value) transparent;
    z-index: 9998;
  }
</style>
