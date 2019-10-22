<template>
  <div class="pesona-select" :class="{
      'antd': mode === 'antd',
      'material': mode === 'material',
      'is-block': block
    }"
    @mouseenter="hoverChange"
    @mouseleave="hoverChange">
    <label>{{label}}</label>
    <div class="select-button-holder" ref='buttonHolder' :class="{
      'in-hover': (inHover || openOptionsFlag)
      }" 
      @click="openOptions()">
      <div class="current-value">
        <span v-if="internalValue">{{internalDisplay}}</span>
        <span v-if="!internalValue" class="placeholder">{{placeholder}}</span>
      </div>
      <div class="downdown-indicator">
        <x-icon class="caret-icon" v-if="openOptionsFlag" mode="material-icons" padding="0" name="expand_less"/>
        <x-icon class="caret-icon" v-if="!openOptionsFlag" mode="material-icons" padding="0" name="expand_more"/>
      </div>
    </div>
    <transition name="fade">
      <div class="select-options" ref='optionContainer' v-if="openOptionsFlag">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import _ from 'lodash';
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import dataTypeMixin from 'mixins/dataTypeMixin';
  import xIcon from './../icons/xIcon';

  export default {
    name: 'x-select',
    components: { xIcon },
    mixins: [dimensionMixin, styleMixin, dataTypeMixin],
    props:{
      value: {
        default: false
      },
      placeholder: {
        type: String,
        default: 'Select an item'
      },
      label: {
        type: String,
        default: "Label"
      },
      mode: {
        type: String,
        default: 'antd'
      },
      block: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        openOptionsFlag: undefined,
        internalValue: undefined,
        internalDisplay: undefined,
        inHover: false,
        optionsWidth: ''
      }
    }, 
    mounted(){
      let self = this;
      this.$nextTick(()=>{
        self.internalValue = this.value;
        self.initListenterForOptionsClick();
        self.calculateOptionContainerWidth();
        document.addEventListener('mousedown', this.handleClickOutside, false);
      });
    },
    beforeDestroy(){
      document.removeEventListener('mousedown', this.handleClickOutside, false);
    },
    computed:{

    },
    methods: {
      calculateOptionContainerWidth(){
        let buttonHolderEl = this.$refs.buttonHolder;
        this.optionsWidth = `${buttonHolderEl.clientWidth}px`;
        this._setLocalCssVariables({
          '--pesona-select-width': this.optionsWidth,
        });
      },
      handleClickOutside(e){
        if (!this.$el.contains(e.target)){
          this.openOptionsFlag = false;
        }
      },
      hoverChange(e){
        if (e.type === 'mouseenter'){
          this.inHover = true;
        }else if (e.type === 'mouseleave'){
          this.inHover = false;
        }
      },
      initListenterForOptionsClick(){
        let self = this;
        self.$el.addEventListener("click", (e) => {
          let optionEl = self.findParentXSelectOption(e.target);
          if (optionEl !== -1){
            self.internalValue = optionEl.__vue__.$props.value;
            self.internalDisplay = optionEl.innerText;
            self.$emit('input', self.internalValue);
            self.openOptionsFlag = false;
            self.inHover = false;
          }
        });
      },
      openOptions(){
        this.openOptionsFlag = !this.openOptionsFlag;
        this.calculateOptionContainerWidth();
      },
      findParentXSelectOption(el){
        let currentElement = el;
        let currentTagName = currentElement.tagName;
        let currentClassName = currentElement.className;
        if (typeof currentClassName === 'object'){
          currentClassName = '';
        }
        if (currentTagName === 'HTML'){
          return -1;
        }else if (currentClassName.includes('pesona-select-option') && currentClassName){
          return currentElement;
        }else{
          return this.findParentXSelectOption(el.parentElement);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-select.antd {
    position: relative;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: var(--pesona-font-fair);

    $ant-blue: #40a9ff;
    $ant-label-blue: #376DB0;

    label {
      line-height: 21px;
      font-size: var(--pesona-font-base);
      color: $ant-label-blue;
      font-weight: 500;
    }

    .select-button-holder {
      display: flex;
      justify-content: space-between;
      border-radius: 5px;
      border: 1px solid #d9d9d9;
      line-height: 2;
      position: relative;

      .current-value {
        display: inline-block;
        color: #314659;
        user-select: none;
        margin: 0 11px;
      }
      .downdown-indicator {
        display: inline-block;
        padding-right: 8px;
        svg {
          vertical-align: middle;
        }
      }
    }
    .in-hover {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    .select-options {
      position: absolute;
      z-index: 999;
      width: var(--pesona-select-width);
      border: 1px solid #d9d9d9;
      max-height: 250px;
      margin-bottom: 0;
      padding-left: 0;
      overflow: auto;
      background-color: #fff;
      border-radius: 4px;
      outline: none;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      margin-top: 2px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateY(2px);
    }
  }

  .pesona-select.antd.is-block {
    display: block;
  }


</style>
