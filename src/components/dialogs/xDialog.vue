<template>
  <div class="pesona-dialog">
    <div class="container">
      <div class="activator-space">
        <slot name="activator" v-if="showActivator"></slot>
      </div>
      <transition name="fade">
        <x-lo-center v-if="value" class="content-wrapper">
          <div class="content" :class="{ twitching: showTwitching }">
            <slot></slot>
          </div>
          <div ref="overlay" class="overlay" @click="overlayClicked()"></div>
        </x-lo-center>
      </transition>
    </div>
  </div>
</template>

<script>
  import styleMixin from 'mixins/styleMixin';
  import xLoCenter from './../layouts/xLoCenter';

  export default {
    components: { xLoCenter },
    mixins: [styleMixin],
    name: 'x-dialog',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      persistent: {
        type: Boolean,
        default: false
      }
    },
    computed: {

    },
    data() {
      return {
        showTwitching: false,
        showActivator: true
      };
    },
    watch: {
      value: function(){
        this.showActivator = true;
      }
    },
    methods: {
      overlayClicked(){
        let self = this;
        if (!self.persistent){
          self.$emit('input', false);
        }else{
          self.showTwitching = true;
          setTimeout(()=>{
            self.showTwitching = false;
          }, 100);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-dialog{
    .container {
      overflow: hidden;
      .activator-space {
        position: absolute;
      }
      .content-wrapper {
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
      }
      .content {
        position: relative;
        z-index: 999;
      }
      .overlay {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgb(33, 33, 33);
        opacity: 0.46;
      }
    }

    .twitching {
      animation: twitch 0.1s;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    @keyframes twitch {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

  }
</style>
