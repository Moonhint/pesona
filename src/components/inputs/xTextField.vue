<template>
  <div class="pesona-text-field" v-on="emitAllExceptInput()">
    <div class="container"
         :class="{
           'infocus': inFocus,
           'inhover': inHover
         }"
         @mouseenter="hoverChange"
         @mouseleave="hoverChange">
      <label :class="{
        'floating-label': floatLabel
      }">{{label}}</label>
      <input 
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

  // TODO: do styling
  // TODO: integrate icon position and prefix surfix text
  // TODO: integrate loader
  // TODO: integrate validation, error and hint, counter
  // TODO: masking
  // TODO: clearable input
  // TODO: disable and readonly

  export default {
    name: 'x-text-field',
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
    },
    data: () => {
      return {
        inFocus: false,
        inHover: false
      }
    }, 
    mounted(){
    },
    computed:{
      floatLabel(){
        return (!this.placeholder && !this.inFocus && !this.value)
      }
    },
    methods: {
      emitInputed() {
        this.$emit('input', this.$refs.customInput.value); 
      },
      focusChange(e){
        if (e.type === 'focusout'){
          this.inFocus = false;
        }else if (e.type === 'focusin'){
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
      border-bottom: 1px solid var(--pesona-brand-color-primary);
      label {
        color: var(--pesona-brand-color-primary);
      }
    }

    input {
      border-style: none;
      width: 100%;
      padding: 6px 0;
      font-size: var(--pesona-font-fair);
    }

    input::placeholder {
      color: var(--pesona-shade-color-semi-white);
    }

    input:focus {
      outline: none;
    }
  }
</style>
