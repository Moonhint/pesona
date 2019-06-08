<template>
  <div class="pesona-sidenav-item">
    <div class="container" @click="containerClicked">
      <div class="item icon" v-if="icon">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div class="item text" :style="textStyle">
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
      let parentElName = this.$el.parentElement.parentElement.className;
      if (parentElName.includes('pesona-sidenav-list')){
        this.isWarped = true;
      }
    },
    methods: {
      containerClicked(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-item{
    .container {
      border-radius: 5px;
      padding: 0 8px;
      width: 100%;

      .item {
        display: inline-block;
      }

      .icon {

      }

      .text {
        padding-left: 4px;
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }

    .container:hover {
      background-color: #007bff;
    }
  }

  .active {
    font-weight: 600;
  }
</style>
