<template>
  <div class="pesona-select-option" :class="{
      'antd': mode === 'antd',
      'material': mode === 'material',
      'in-hover': inHover,
      'is-selected': selected
    }"
    @mouseenter="hoverChange"
    @mouseleave="hoverChange">
    <slot></slot>
  </div>
</template>

<script>
  import _ from 'lodash';
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import dataTypeMixin from 'mixins/dataTypeMixin';

  export default {
    name: 'x-select-option',
    components: { },
    mixins: [dimensionMixin, styleMixin, dataTypeMixin],
    props:{
      value: {
        default: false
      },
      mode: {
        type: String,
        default: 'antd'
      },
    },
    data: () => {
      return {
        inHover: false,
        selected: false
      }
    }, 
    mounted(){
      if( this.$parent.$data.internalValue === this.value ) {
        this.selected = true;
      }
    },
    computed:{

    },
    methods: {
      hoverChange(e){
        if (e.type === 'mouseenter'){
          this.inHover = true;
        }else if (e.type === 'mouseleave'){
          this.inHover = false;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-select-option.antd {
    position: relative;
    display: block;
    padding: 5px 12px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .pesona-select-option.antd.in-hover {
    background-color: #e6f7ff;
    border: none;
  }
  .pesona-select-option.antd.is-selected {
    font-weight: bold;
  }
</style>
