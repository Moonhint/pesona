<template>
  <div class="pesona-layout">
    <div class="container">
      <div class="header" :style="{ position: currentHeaderPosition }">
        <slot name="header"></slot>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-layout',
    props: {
      // to make the header sticky
      stickyHeader: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      currentHeaderPosition(){
        let position = 'sticky';
        if (!this.stickyHeader){
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
  .pesona-layout{
    .container {
      width: 100%;
      height: 1000px;
      border: 1px solid red;

      .header {
        top: 0;
      }
    }
  }
</style>
