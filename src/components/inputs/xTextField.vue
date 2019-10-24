<template>
  <div class="pesona-text-field" v-on="emitAllExceptInput()">
    <div class="container"
         :class="{
           'material-mode': mode === 'material',
           'antd-mode': mode === 'antd',
           'infocus': inFocus,
           'inhover': inHover
         }"
         @mouseenter="hoverChange"
         @mouseleave="hoverChange">
      
      <div ref="prependIcon"
           class="prepend-icon"
           :style="{
            'bottom': quaterOfInputHeight,
            'margin-left': halfSizeValue
           }" 
           v-if="prependIconName">
        <x-icon :name="prependIconName" padding="0" :color="frameColor" :size="sizeValue"/>
      </div>

      <div 
        ref="customPrepend"
        class="custom-prepend" 
        v-if="!prependIconName">
        <slot name="prepend"></slot>
      </div>

      <label v-if="label" :class="{
        'floating-label': floatLabel
      }">{{label}}</label>

      <span class="note" v-if="note">{{note}}</span>

      <input
        :style="{
          'font-size': sizeValue
        }"
        :class="{
          'no-prepend': !anyPrepend,
          'any-prepend': anyPrepend 
        }"
        :placeholder="placeholder" 
        :value="value" 
        ref="customInput" 
        @input="emitInputed"
        @focusin="focusChange"
        @focusout="focusChange"/>
      
    </div>
  </div>
</template>

<script>
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import xIcon from './../icons/xIcon'; 

  // TODO: do styling
  // TODO: integrate icon position and prefix surfix text
  // TODO: integrate loader
  // TODO: integrate validation, error and hint, counter
  // TODO: masking
  // TODO: clearable input
  // TODO: disable and readonly

  export default {
    name: 'x-text-field',
    components: { xIcon },
    mixins: [dimensionMixin, styleMixin],
    props:{
      value: {
        default: ''
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: ''
      },
      prependIconName: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: 'material'
      },
      isPassword: {
        type: Boolean,
        default: false
      },
      note: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'fair'
      }
    },
    data: () => {
      return {
        inFocus: false,
        inHover: false,

        frameColor: undefined,
        formColorTemplate: undefined,
        shadeColorTemplate: undefined
      }
    }, 
    mounted(){
      let currentColor =  this._getCurrentColors();
      this.formColorTemplate = currentColor.forms;
      this.shadeColorTemplate = currentColor.shade;

      if (this.mode === 'antd'){
        this.frameColor = this.shadeColorTemplate.semiWhite;
      }

      this.$nextTick(()=>{
        if (this.isPassword && this.$refs.customInput){
          this.$refs.customInput.type = "password"
        }
        this.prependIconWidth;
      });
    },
    computed:{
      floatLabel(){
        return (!this.placeholder && !this.inFocus && !this.value)
      },
      anyPrepend(){
        this.$nextTick(()=>{
          this.initCalculatePrependPadding();
        });
        return (this.prependIconName || this.$slots.prepend) ? true : false;
      },
      sizeValue(){
        this.$nextTick(()=>{
          this.initCalculatePrependPadding();
        });
        return this._normalizeValue(this.size);
      },
      halfSizeValue(){
        return this._normalizeHalfValue(this.size);
      },
      quaterOfInputHeight(){
        let inputHeight = (parseFloat(this.sizeValue) * 2) + 6;
        return `${inputHeight / 4}px`;
      }
    },
    methods: {
      initCalculatePrependPadding(){
        let self = this;
        let clientWidth = 0;
        if (self.prependIconName){
          clientWidth = self.$refs.prependIcon.clientWidth;
        }else if (self.$slots.prepend){
          clientWidth = self.$refs.customPrepend.clientWidth;
        }
        let width = clientWidth + parseFloat(self.sizeValue);
        this._setLocalCssVariables({
          '--pesona-text-field-prepend-padding': `${width}px`,
        });
        return `${width}px`;
      },
      emitInputed() {
        this.$emit('input', this.$refs.customInput.value); 
      },
      focusChange(e){
        if (e.type === 'focusout'){
          if (this.mode === 'material'){
            this.frameColor = this.formColorTemplate.text;
          }
          this.inFocus = false;
        }else if (e.type === 'focusin'){
          if (this.mode === 'material'){
            this.frameColor = this.formColorTemplate.frame;
          }
          this.inFocus = true;
        }
      },
      hoverChange(e){
        if (e.type === 'mouseenter'){
          this.inHover = true;
        }else if (e.type === 'mouseleave'){
          this.inHover = false;
        }
      },
      emitAllExceptInput(){
        return {
          ...this.$listeners,
          input: event => this.$emit('input', event.target.value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-text-field {
    position: relative;
    font-family: 'Roboto', sans-serif;
    
    .material-mode {
      border-bottom: 1px solid var(--pesona-shade-color-gray);
      label {
        color: var(--pesona-shade-color-gray);
        font-size: var(--pesona-font-small);
      }
      .floating-label {
        position: relative;
        font-size: var(--pesona-font-fair);
        top: 22px;
      }

      input {
        border-style: none;
        width: 100%;
        padding: 6px 3px;
        font-size: var(--pesona-font-fair);
      }

      input::placeholder {
        color: var(--pesona-shade-color-semi-white);
      }

      input:focus {
        outline: none;
      }

      .prepend-icon {
        display: inline-block;
        top: 28px;
        position: relative;
      }

      .any-prepend {
        margin-left: 25px;
        width: calc( 99% - 28px);
      }

    }

    .material-mode.inhover{
      border-bottom: 1px solid var(--pesona-shade-color-black);
    }

    .material-mode.infocus{
      border-bottom: 1px solid var(--pesona-form-color-frame);
      label {
        color: var(--pesona-form-color-frame);
      }
    }

    $ant-blue: #40a9ff;
    $ant-label-blue: #376DB0;

    .antd-mode {

      label {
        line-height: 21px;
        font-size: var(--pesona-font-base);
        color: $ant-label-blue;
        font-weight: 500;
      }

      .note {
        font-size: var(--pesona-font-small);
        color: var(--pesona-shade-color-semi-white);
        float: right;
        clear: both;
        margin-right: 4px;
        line-height: 21px;
      }

      input {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        margin-top: 4px;
        font-variant: tabular-nums;
        list-style: none;
        -webkit-font-feature-settings: 'tnum';
        font-feature-settings: 'tnum';
        position: relative;
        display: inline-block;
        width: 100%;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-right: 12px;
        color: rgba(0,0,0,0.65);
        line-height: 2;
        background-color: var(--pesona-shade-color-white);
        background-image: none;
        border: 1px solid #d9d9d9;
        border-top-color: rgb(217, 217, 217);
        border-right-color: rgb(217, 217, 217);
        border-right-width: 1px;
        border-bottom-color: rgb(217, 217, 217);
        border-left-color: rgb(217, 217, 217);
        border-radius: 4px;
        -webkit-transition: all .3s;
        transition: all .3s;
      }

      input::placeholder {
        color: var(--pesona-shade-color-semi-white);
        font-weight: 500;
      }

      .prepend-icon {
        display: inline-block;
        left: 0;
        transform: translateY(10%);
        position: absolute;
        z-index: 10;
      }

      .custom-prepend {
        display: inline-block;
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 10;
      }

      .any-prepend {
        padding-left: var(--pesona-text-field-prepend-padding);
      }

      .no-prepend {
        padding-left: var(--pesona-font-small);
      }
    }

    .antd-mode.inhover {
      input {
        border: 1px solid $ant-blue;
      }
    }
    .antd-mode.infocus {
      input {
        border-style: none;
        outline-color: transparent;
        border: 1px solid $ant-blue;
        transition: none;
      }
    }
  }
</style>
