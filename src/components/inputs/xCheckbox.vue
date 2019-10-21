<template>
  <div class="pesona-checkbox" v-on="emitAll()">
    <label class="container"
         :class="{
           'antd-container': mode === 'antd',
           'material-container': mode === 'material',
           'part-of-group': isPartOfGroup,
           'infocus': inFocus,
           'inhover': inHover
         }"
         @mouseenter="hoverChange"
         @mouseleave="hoverChange">{{label}}
        <input
          :checked="internalIsChecked"
          type='checkbox'
          ref="customInput" 
          @change="emitInputed"
          @focusin="focusChange"
          @focusout="focusChange"/>
        <span :class="{
          'antd-checkbox': mode === 'antd',
          'material': mode === 'material'}"/>
    </label>
  </div>
</template>

<script>
  import _ from 'lodash';
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import dataTypeMixin from 'mixins/dataTypeMixin';

  export default {
    name: 'x-text-field',
    components: { },
    mixins: [dimensionMixin, styleMixin, dataTypeMixin],
    props:{
      // for v-model
      value: {
        default: false
      },
      //for value
      val: {
        default: undefined
      },
      label: {
        type: String,
        default: "Label"
      },
      mode: {
        type: String,
        default: 'antd'
      }
    },
    data: () => {
      return {
        inFocus: false,
        inHover: false,

        isPartOfGroup: false,
        internalIsChecked: false,
        internalModelValue: undefined
      }
    }, 
    mounted(){
      this.$nextTick(()=>{
        this.internalModelValue = this.value;
        if (this._isArray(this.value)){
          this.isPartOfGroup = true; 
          let index = this.value.findIndex(v => _.isEqual(v, this.val))
          if (index === -1){
            this.internalIsChecked = false;
          }else{
            this.internalIsChecked = true;
          }
        }else{
          this.internalIsChecked = this.internalModelValue;
        }
      });
    },
    computed:{

    },
    methods: {
      emitInputed() {
        if (this.isPartOfGroup){
          let tempValue = this.$refs.customInput.checked;
          let tempArr = this.internalModelValue;
          if (tempValue){
            tempArr.push(this.val);
          }else{
            let indexFound = tempArr.findIndex(v => _.isEqual(v, this.val));
            tempArr.splice(indexFound, 1);
          }
          this.$emit('input', tempArr);
        }else{
          this.$emit('input', this.$refs.customInput.checked); 
        }
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
      emitAll(){
        return {
          ...this.$listeners
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-checkbox {

    .antd-container {
      display: inline-block;
      position: relative;
      padding-left: 25px;
      margin: 5px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: 'tnum';


      /* Hide the browser's default checkbox */
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
    }

    /* Ant Design, Create a checkbox */
    .antd-checkbox {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      border-collapse: separate;
      transition: all 0.3s;
    }

    /* Ant Design, On mouse-over */
    .container:hover input ~ .antd-checkbox {
      background-color: #fff;
      border: 1px solid #2196F3;
    }

    /* Ant Design, when the checkbox is checked */
    .container input:checked ~ .antd-checkbox {
      background-color: #2196F3;
    }

    /* Ant Design, Create the checkmark/indicator (hidden when not checked) */
    .antd-checkbox:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Ant Design, Show the checkmark when checked */
    .container input:checked ~ .antd-checkbox:after {
      display: block;
    }

    /* Ant Design, Style the checkmark/indicator */
    .container .antd-checkbox:after {
      left: 30%;
      top: 9%;
      width: 2.714286px;
      height: 8.142857px;
      border: 2px solid #fff;
      border-width: 0 3px 3px 0;
      border-top: 0;
      border-left: 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      transition: all 0.2s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    }
  }

</style>
