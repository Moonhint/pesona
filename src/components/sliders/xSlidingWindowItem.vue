<template>
  <div class="pesona-sliding-window-item">
      <div class="pesona-sliding-window-item--container">
        <slot></slot>
      </div>
      <img v-if="!useOnlyBackgroundColor" class="pesona-sliding-window-item--background unselectable"
           :src="backgroundImage"/>
      <div v-if="useOnlyBackgroundColor"
           :style="{'background-color': backgroundColor }"
           class="pesona-sliding-window-item--background-color"></div>
  </div>
</template>

<script>
  export default {
    name: 'x-sliding-window-item',
    props: {
      backgroundImage: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: '#000'
      }
    },
    computed: {
      useOnlyBackgroundColor(){
        return (this.backgroundImage === '') ? true : false;
      }
    },
    data() {
      return {

      };
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sliding-window-item{
    user-select: none;
    display: inline-block;
    position: relative;
    &--container {
      font-size: 12px;
      position: absolute;
    }
    &--background {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
    &--background-color {
      width: inherit;
      height: inherit;
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
