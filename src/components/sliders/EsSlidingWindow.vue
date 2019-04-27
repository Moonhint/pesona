<template>
  <div class="pesona-sliding-window">
    <div class="window-glass" :style="{ 'background-color': backgroundColor }">
      <div class="side-nav side-nav--right" :style="{ height: adjustedHeightValue }" @click="nextClicked">
        <es-icon class="side-nav--action" color="white" name="angle-right" size="50"/>
      </div>
      <div class="side-nav side-nav--left" :style="{ height: adjustedHeightValue }" @click="prevClicked">
        <es-icon class="side-nav--action" color="white" name="angle-left" size="50"/>
      </div>
      <div class="item-container" :style="{ height: slotHeight }">
        <div class="sliding-glass" :style="slideTranslateObj">
          <div class="side-border" :style="{ width: halfSlotGap, height: slotHeight }"></div>
          <template v-if="!slotMode">
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
          </template>
          <template v-else>
            <slot class="items-in-slot-container">Insert item here</slot>
          </template>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <es-child-navigator :active="currentIndex" :length="lengthOfIndex" @child-clicked="childNavigatorClicked"/>
    </div>
  </div>
</template>

<script>
  import EsChildNavigator from './../buttons/EsChildNavigator';
  import EsIcon from './../icons/EsIcon';

  // TODO: style the text
  // TODO: add swipe library
  // TODO: sync the props
  // TODO: auto slide & tempo props

  export default {
    name: 'es-sliding-window',
    components: {
      EsChildNavigator,
      EsIcon
    },
    props: {
      slotMode: {
        type: Boolean,
        default: false
      },
      // item to be placed in sliding window
      // array of object { name, item_image_url }
      // these props used when it is not in slotMode
      windowItems: {
        type: Array,
        default: () => {
          return []
        }
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
      // background color behind the items
      backgroundColor: {
        type: String,
        default: "#000"
      },
      // items per slide
      itemsPerSlide: {
        type: Number,
        default: 1
      }
    },
    computed: {
      // TODO: give back the measurement unit not just pixel
      adjustedHeightValue() {
        let slotHeight = Number.parseInt(this.slotHeight);
        let value = `${slotHeight+2}px`
        return value;
      },
      slideTranslateObj(){
        let slotWidth = Number.parseInt(this.slotWidth);
        let slotGap = Number.parseInt(this.slotGap);

        let value = {
          transform: `translateX(-${ ((slotWidth + slotGap) * this.currentIndex) * this.usedItemPerSlide }px)`
        };

        return value;
      },
      halfSlotGap(){
        let slotGap = Number.parseInt(this.slotGap);
        let value = `${slotGap/2}px`;
        return value;
      },
      maximumItemsSlideByWindowWidth(){
        this.findWindowWidth();
        let oneStep = Number.parseInt(this.slotGap) + Number.parseInt(this.slotWidth);
        let maxSlide = 1;
        if (this.windowWidth !== 0){
          maxSlide = Math.floor(this.windowWidth / oneStep);
        }
        return maxSlide;
      },
      usedItemPerSlide(){
        let slide = this.itemsPerSlide;
        let maximumSlide = this.maximumItemsSlideByWindowWidth;
        if (this.itemsPerSlide > maximumSlide){
          slide = maximumSlide;
        }
        return slide;
      },
      lengthOfIndex(){
        let itemLength = this.slotItems.length;
        if (!this.slotMode){
          itemLength = this.windowItems.length;
        }
        let adjustedItemLength = Math.ceil(itemLength / this.usedItemPerSlide);
        return adjustedItemLength;
      },
    },
    data() {
      return {
        currentIndex: 0,
        windowWidth: 0,
        slotItems: []
      };
    },
    mounted(){
      this.findWindowWidth();

      if (this.slotMode){
        this.lockItemDimension();
      }
    },
    methods: {
      lockItemDimension(){
        this.slotItems = this.$el.getElementsByClassName('pesona-sliding-window-item');

        for (let i = 0; i < this.slotItems.length; i++){
          let element = this.slotItems[i];
          element.style.width = this.slotWidth;
          element.style.height = this.slotHeight;
          element.style.marginRight = this.slotGap;
        }
      },
      childNavigatorClicked(index){
          this.currentIndex = index;
      },
      prevClicked(){
        if (this.currentIndex !== 0){
            this.currentIndex--;
        }
      },
      nextClicked(){
        if (this.currentIndex !== this.lengthOfIndex - 1){
            this.currentIndex++;
        }
      },
      childClicked(item){
        this.$emit('item-click', item);
      },
      findWindowWidth(){
        if (this.$el){
          let slidingGlass = this.$el.getElementsByClassName('sliding-glass')[0];
          this.windowWidth = slidingGlass.clientWidth;
        }
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
      // height: 300px;
      border: 1px solid black;

      .sliding-glass {
        font-size: 0;
        transition-timing-function: ease-in;
        transition: 1s;
      }

      .side-border {
        display: inline-block;
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
        overflow: hidden;

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
