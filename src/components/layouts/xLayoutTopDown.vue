<template>
  <div class="pesona-layout-top-down">
    <div class="container">
      <div class="header" :style="{ position: currentHeaderPosition }">
        <slot name="header"></slot>
      </div>
      <div class="content-wrapper">
        <div class="main">
          <slot name="main"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-layout-top-down',
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
  .pesona-layout-top-down{
    .container {
      width: 100%;
      height: auto;

      .header {
        position: absolute;
        top: 0;
        z-index: 9999;
        box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);
      }

      .content-wrapper {
        .main {
          display: block;
        }
        .footer {
          display: block;
        }
      }
    }
  }
</style>
