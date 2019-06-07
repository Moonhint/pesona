<template>
  <div class="pesona-sidenav-item">
    <div class="container" @click="containerClicked">
      <div class="item icon" v-if="icon">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div class="item text" :style="textStyle">
        <span v-if="isWarped">wraped</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import xIcon from './../icons/xIcon'; 
  export default {
    components: { xIcon },
    name: 'x-sidenav-item',
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconMode: {
        type: String,
        default: 'material-icons'
      }
    },
    computed: {
      textStyle() {
        let style = {};
        if (!this.isWarped) {
          style.transform = 'translateY(-10px)';
        }
        return style;
      }
    },
    data() {
      return {
        isWarped: false
      };
    },
    mounted(){
      let parentElName = this.$el.parentElement.parentElement.parentElement.className;
      if (parentElName === 'pesona-sidenav-list'){
        this.isWarped = true;
      }
    },
    methods: {
      containerClicked(ev) {
        console.info("list item clicked");
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-item{
    .container {
      width: 100%;

      .item {
        display: inline-block;
      }

      .icon {

      }

      .text {

      }
    }

    .container:hover {
      background-color: red;
    }
  }
</style>
