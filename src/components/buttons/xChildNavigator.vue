<template>
  <div class="pesona-child-navigator">
    <template v-if="type==='by-length'">
      <div class="item item-chevron pointer">
        <x-icon @click="goToVeryFirst()" name="chevron-left" size="8px" padding="0"/>
      </div>
      <div class="item pointer" :class="{
          'active': activedIndex === index,
          'item__round': shape === 'round',
          'item__rectangle': shape === 'rectangle'
        }" v-for="(item, index) in lengthConvert" :key="index" 
        @click="childOnClick(item, index)">
        <div class="item--text pointer">
          <span v-if="!noNumber">{{item+1}}</span>
        </div> 
      </div>
      <div class="item item-chevron pointer">
        <x-icon @click="goToVeryEnd()" name="chevron-right" size="8px" padding="0"/>
      </div>
    </template>
    <template v-else>
      <div class="item" v-for="(item, index) in items" :key="index">

      </div>
    </template>
  </div>
</template>

<script>
  import xIcon from './../icons/xIcon'; 

  export default {
    name: 'x-child-navigator',
    components: {
      xIcon
    },
    props:{
      type: {
        type: String,
        default: "by-length"
      },
      length: {
        type: Number,
        default: 1
      },
      items: {
        type: Array,
        default: () => []
      },
      shape: {
        type: String,
        default: "round"
      },
      active: {
        type: Number,
        default: 0
      },
      noNumber: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activedIndex: 0
      };
    },
    mounted(){
      this.activedIndex = this.active;
    },
    computed: {
      lengthConvert() {
        let array = [];
        for(let i = 0; i < this.length; i++){
          array.push(i);
        }
        return array;
      }
    },
    methods: {
      goToVeryFirst(){
        this.activedIndex = 0;
        this.$emit('child-clicked', 0);
      },
      childOnClick(item, index) {
        this.activedIndex = index;
        this.$emit('child-clicked', item);
      },
      goToVeryEnd(){
        this.activedIndex = this.length - 1;
        this.$emit('child-clicked', this.length - 1);
      },
    },
    watch: {
      active: function(newVal){
        this.activedIndex = newVal;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-child-navigator {
    display: flex;
    justify-content: center;
  }

  .item {
    user-select: none;
    font-size: small;
    background-color: #A1A9B2;
    min-width: 7px;
    min-height: 7px;
    margin: 3px;
    text-align: center;
  }

  .item-chevron {
    height: 0;
    background-color: transparent;
    transform: translateY(-4px);
    svg {
      fill: #A1A9B2 !important;
    }
  }

  .active {
    background-color: #FFFFFF;
  }

  .item__round {
    border-radius: 50%;
  }

  .item--text {
    transform: translateY(15%);
  }

  .pointer {
    cursor: pointer;
  }
</style>
