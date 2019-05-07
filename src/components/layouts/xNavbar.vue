<template>
  <div class="pesona-navbar" :style="{ position: currentPosition }">
    <div class="container" :style="{ height, backgroundColor }">
      this is navbar
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-navbar',
    props: {
      height: {
        type: String,
        default: '64px'
      },
      backgroundColor: {
        type: String,
        default: '#000'
      },
      sticky: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      currentPosition(){
        let position = 'sticky';
        if (!this.sticky){
          position = 'unset';
        }
        return position;
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
  .pesona-navbar{
    top: 0;
    .container {
      width: 100%;
    }
  }
</style>
