<template>
  <div class="pesona-image-generator">
    <div class="container">
      <div class="canvas-area" :style="{ 
        'width': width, 
        'height': height, 
        'backgroundImage': `url(${backgroundImageUrl})` }">
      </div>
      <div class="action-area">Action</div>
      <div class="item-area"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-image-generator',
    props: {
      width: {
        type: String,
        default: '1080px'
      },
      height: {
        type: String,
        default: '1920px'
      },
      backgroundImageUrl: {
        type: String,
        default: 'https://place-hold.it/400x200.png'
      }
    },
    computed: {

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
  .pesona-image-generator{
    .canvas-area {
      background-size:cover;
      background-repeat: no-repeat;
      border: 1px solid red;
    }
  }
</style>
