<template>
  <div class="pesona-sliding-window">
    <div class="window-glass" :style="{ 'background-color': backgroundColor, 'padding-top': topBottomGap, 'padding-bottom': topBottomGap }">
      <div class="side-nav side-nav--right" v-if="!hideSideNavigation" :style="{ height: adjustedHeightValue }" @click="goToNextIndex">
        <x-icon class="side-nav--action" color="white" name="angle-right" size="50"/>
      </div>
      <div class="side-nav side-nav--left" v-if="!hideSideNavigation" :style="{ height: adjustedHeightValue }" @click="goToPrevIndex">
        <x-icon class="side-nav--action" color="white" name="angle-left" size="50"/>
      </div>
      <div class="item-container" :style="{ height: slotHeight,  border: borderColor }">
        <div class="sliding-glass" :style="slideTranslateObj">
          <div class="side-border" :style="{ width: halfSlotGap, height: slotHeight }"></div>
          <template v-if="!slotMode">
            <div @click="childClicked(item)" class="item unselectable" 
              :style="{ 'margin-right': slotGap }" 
              v-for="(item, index) in windowItems" 
              :key="index">
              <p class="item--label">{{item.name}}</p>
              <img class="item--slot unselectable" :style="{
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
    <div class="bottom-nav" v-if="!hideBottomNavigation">
      <x-child-navigator :active="currentIndex" :length="lengthOfIndex" @child-clicked="childNavigatorClicked"/>
    </div>
  </div>
</template>

<script>
  import xChildNavigator from './../buttons/xChildNavigator';
  import xIcon from './../icons/xIcon';
  import Hammer from 'hammerjs';

  // TODO: style the text
  // TODO: left space and logo header
  // TODO: background image background

  export default {
    name: 'x-sliding-window',
    components: {
      xChildNavigator,
      xIcon
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
      topBottomGap: {
        type: String,
        default: "0"
      },
      // background color behind the items
      backgroundColor: {
        type: String,
        default: "#000"
      },
      // border color
      borderColor: {
        type: String,
        default: "1px solid #000"
      },

      // items per slide
      itemsPerSlide: {
        type: Number,
        default: 1
      },

      // hide navigation 
      hideBottomNavigation: {
        type: Boolean,
        default: false
      },
      hideSideNavigation: {
        type: Boolean,
        default: false
      },

      // auto slide
      autoSlide: {
        type: Boolean,
        default: false
      },
      autoSlideInterval: {
        type: Number,
        default: 3000
      }
    },
    computed: {
      // TODO: give back the measurement unit not just pixel
      adjustedHeightValue() {
        let slotHeight = Number.parseInt(this.slotHeight);
        let topBottomGap = Number.parseInt(this.topBottomGap);
        let value = `${(slotHeight+2) + (topBottomGap*2)}px`
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
        slotItems: [],
        swipeDetector: undefined,
        autoSlideDirection: "right",
        autoSlideTimer: undefined,
        slotCheckingInterval: undefined
      };
    },
    mounted(){
      let self = this;
      this.findWindowWidth();
      this.setupTouchEvent();

      if (this.slotMode){
        this.lockItemDimension();
      }

      if (this.autoSlide){
        self.autoSlideTimer = setInterval(()=>{
          self.triggerAutoSlide();
        }, self.autoSlideInterval)
      }
    },
    methods: {
      triggerAutoSlide(){
        let self = this;
        if (self.autoSlideDirection === 'right'){
          if (this.currentIndex !== this.lengthOfIndex - 1){
            self.currentIndex++;
          }else{
            self.autoSlideDirection = 'left';
          }
        }else{
          if (this.currentIndex !== 0){
            this.currentIndex--;
          }else{
            self.autoSlideDirection = 'right';
          }
        }
      },
      setupTouchEvent(){
        let self = this;
        let slidingGlass = self.$el.getElementsByClassName('sliding-glass')[0];
        this.swipeDetector = new Hammer(slidingGlass, {threshold: 1, velocity: 0.1});
        this.swipeDetector.on('swipeleft', function(ev) {
          self.goToNextIndex();
        });
        this.swipeDetector.on('swiperight', function(ev) {
          self.goToPrevIndex();
        })
      },
      lockItemDimension(){
        //TODO: find more effecient solution
        this.slotItems = this.$el.getElementsByClassName('pesona-sliding-window-item');
        if (this.slotItems.length === 0){
          if (!this.slotCheckingInterval){
            this.slotCheckingInterval = setInterval(()=>{
                this.lockItemDimension();
            }, 1);
          }
        }else{
          if (this.slotCheckingInterval){
            clearInterval(this.slotCheckingInterval);
            this.slotCheckingInterval = undefined;
          }
          for (let i = 0; i < this.slotItems.length; i++){
            let element = this.slotItems[i];
            element.style.width = this.slotWidth;
            element.style.height = this.slotHeight;
            element.style.marginRight = this.slotGap;
          }
        }
      },
      childNavigatorClicked(index){
          this.currentIndex = index;
      },
      goToPrevIndex(){
        if (this.currentIndex !== 0){
            this.currentIndex--;
        }
      },
      goToNextIndex(){
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
      // border: 1px solid black;

      .sliding-glass {
        font-size: 0;
        transition-timing-function: ease-in;
        transition: 1s;
      }

      .side-border {
        display: inline-block;
      }

      .item {
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

  .unselectable {
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
