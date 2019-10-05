<template>
  <div class="pesona-text-field" v-on="emitAllExceptInput()">
    <div class="container"
         :class="{
           'infocus': inFocus,
           'inhover': inHover
         }"
         @mouseenter="hoverChange"
         @mouseleave="hoverChange">
      
      <div class="prepend-icon">
        <x-icon v-if="prependIconName" :name="prependIconName" :color="frameColor"/>
      </div>
      <label :class="{
        'floating-label': floatLabel
      }">{{label}}</label>
      <input
        :class="{
          'any-prepend ': anyPrepend
        }"
        :placeholder="placeholder" 
        :value="value" 
        ref="customInput" 
        @input="emitInputed"
        @focusin="focusChange"
        @focusout="focusChange"></input>
      
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
        default: "Label"
      },
      placeholder: {
        type: String,
        default: ''
      },
      prependIconName: {
        type: String,
        default: ''
      }
    },
    data: () => {
      return {
        inFocus: false,
        inHover: false,

        frameColor: undefined,
        formColorTemplate: undefined
      }
    }, 
    mounted(){
      this.formColorTemplate = this._getCurrentColors().forms;
    },
    computed:{
      floatLabel(){
        return (!this.placeholder && !this.inFocus && !this.value)
      },
      anyPrepend(){
        return (this.prependIconName) ? true : false;
      }
    },
    methods: {
      emitInputed() {
        this.$emit('input', this.$refs.customInput.value); 
      },
      focusChange(e){
        if (e.type === 'focusout'){
          this.frameColor = this.formColorTemplate.text;
          this.inFocus = false;
        }else if (e.type === 'focusin'){
          this.frameColor = this.formColorTemplate.frame;
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
    font-family: 'Roboto', sans-serif;
    
    .container {
      margin: 8px;
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

    }

    .inhover{
      border-bottom: 1px solid var(--pesona-shade-color-black);
    }

    .infocus{
      border-bottom: 1px solid var(--pesona-form-color-frame);
      label {
        color: var(--pesona-form-color-frame);
      }
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
      color: var(--pesona-shade-color-semi-black);
    }

    .any-prepend {
      margin-left: 25px;
      width: calc( 99% - 28px);
    }
  }
</style>
