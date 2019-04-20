<template>
  <div class="container">
    <template v-if="type==='by-length'">
      <div class="item" :class="{
          'item__round': shape === 'round',
          'item__rectangle': shape === 'rectangle'
        }" v-for="(item, index) in lengthConvert" :key="index">
        <div class="item--text pointer" @click="childOnClick(item)">{{item}}</div> 
      </div>
    </template>
    <template v-else>
      <div class="item" v-for="(item, index) in items" :key="index">

      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'child-navigator',
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
      }
    },
    data() {
      return {

      };
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
      childOnClick(item) {
        this.$emit('child-clicked', item);
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .item {
    border: 1px solid black;
    font-size: small;
    background-color: gray;
    min-width: 20px;
    min-height: 20px;
    margin: 3px;
    text-align: center;
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
