<template>
  <div class="pesona-sidenav-item">
    <div class="container" @click="containerClicked" :class="{ 
        'wraped': (isWarped && !isShrink), 
        'shrink': isShrink
      }">
      <div class="item icon" v-if="icon">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div v-if="state === 'open'" class="item text" :style="textStyle">
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
        default: 'help'
      },
      iconMode: {
        type: String,
        default: 'material-icons'
      }
    },
    computed: {
      textStyle() {
        let style = {};
        // if (!this.isWarped) {
          style.transform = 'translateY(-10px)';
        // }
        return style;
      },
      isShrink() {
        return this.state === 'shrink' ? true : false;
      }
    },
    data() {
      return {
        state: 'open',
        isWarped: false
      };
    },
    mounted(){
      let parentElName = this.$el.parentElement.parentElement.className;
      if (parentElName.includes('pesona-sidenav-list')){
        this.isWarped = true;
      }

      let ancorElement = this.$el.getElementsByClassName('container');
      if (ancorElement.length > 1) {
        // ancorElement[0].setAttribute('href', ancorElement[1].getAttribute('href'));
        // ancorElement[0].className = "router-link-exact-active router-link-active container";
        // ancorElement[0].__vue__ = ancorElement[1].__vue__;
      }
      this.$parent.$on('stateChange', this.changeInternalState)
    },
    methods: {
      containerClicked(ev) {
        this.$emit('click', ev);
      },
      changeInternalState(state){
        this.state = state;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-item{
    .container {
      display: block;
      border-radius: 5px;
      padding: 4px 8px;
      margin: 0 4%;    

      .item {
        display: inline-block;
      }

      .icon {
        opacity: .3;
      }

      .text {
        padding-left: 4px;
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }
    .wraped {
      padding: 6px 8px;
      width: 70%;
      margin-left: 45px;
    }

    .container:hover {
      background-color: #007bff;
    }

    .shrink {
      text-align: center;
      margin: 10px;
    }
  }

  .active {
    font-weight: 600;
  }

</style>
