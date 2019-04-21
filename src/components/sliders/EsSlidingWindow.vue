<template>
  <div class="pesona-sliding-window">
    <div class="window-glass" :style="{ 'background-color': backgroundColor }">
      <div class="side-nav side-nav--right" :style="{ height: adjustedHeightValue }" @click="nextClicked">
        <es-icon class="side-nav--action" color="white" name="angle-right" size="50"/>
      </div>
      <div class="side-nav side-nav--left" :style="{ height: adjustedHeightValue }" @click="prevClicked">
        <es-icon class="side-nav--action" color="white" name="angle-left" size="50"/>
      </div>
      <div class="item-container">
        <div class="sliding-glass" :style="slideValue">
          <div @click="childClicked(item)" class="item" 
            :style="{ 'margin-right': slotGap }" 
            v-for="(item, index) in windowItems" 
            :key="index">
            <p class="item--label">{{item.name}}</p>
            <img class="item--slot" :style="{
              width: slotWidth,
              height: slotHeight
            }" :src="item.item_image_url"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <es-child-navigator :length="windowItems.length" @child-clicked="childNavigatorClicked"/>
    </div>
  </div>
</template>

<script>
  import EsChildNavigator from './../buttons/EsChildNavigator';
  import EsIcon from './../icons/EsIcon';

  // TODO: tails and head optimation
  // TODO: sync the props
  // TODO: auto slide & tempo props
  export default {
    name: 'es-sliding-window',
    components: {
      EsChildNavigator,
      EsIcon
    },
    props: {
      // item to be placed in sliding window
      // array of object { name, item_image_url }
      windowItems: {
        type: Array,
        default: []
      },
      // width of one item
      slotWidth: {
        type: String,
        default: "300px"
      },
      // height of one item
      slotHeight: {
        type: String,
        default: "300px"
      },
      // gap between item
      slotGap: {
        type: String,
        default: "20px"
      },
      backgroundColor: {
        type: String,
        default: "#000"
      }
    },
    computed: {
      // TODO: give back the measurement unit not just pixel
      adjustedHeightValue() {
        let slotHeight = Number.parseInt(this.slotHeight);
        let value = `${slotHeight+2}px`
        return value;
      },
      slideValue(){
        let slotWidth = Number.parseInt(this.slotWidth);
        let slotGap = Number.parseInt(this.slotGap);
        let value = {
          transform: `translateX(-${ (slotWidth + slotGap) * this.currentIndex }px)`
        };
        return value;
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      childNavigatorClicked(index){
        this.currentIndex = index;
      },
      prevClicked(){
        if (this.currentIndex !== 0){
          this.currentIndex--;
        }
      },
      nextClicked(){
        if (this.currentIndex !== this.windowItems.length - 1){
          this.currentIndex++;
        }
      },
      childClicked(item){
        this.$emit('item-click', item);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sliding-window{

    width: 100%;

    .window-glass {
      position: relative;
    }

    .item-container {
      z-index: 1;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      height: 300px;
      border: 1px solid black;

      .sliding-glass {
        transition-timing-function: ease-in;
        transition: 1s;
      }

      .item {
        user-select: none;
        display: inline-block;
        position: relative;
        &--label {
          font-size: 12px;
          position: absolute;
        }
        &--slot {
          object-fit: cover;
        }
      }
    }
    
    .side-nav {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      z-index: 2;

      &--left {
        top: 0;
        left: 0;
        background: rgb(0,0,0);
        background: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.773546918767507) 70%, rgba(0,0,0,1) 100%);
      }

      &--right {
        top: 0;
        right: -1px;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.773546918767507) 70%, rgba(0,0,0,1) 100%);

        svg {
          transform: translateX(55%);
        }
      }

      &--action {
        cursor: pointer;
      }
    }

    .bottom-nav {
      margin-top: 10px;
    }

  }
</style>
