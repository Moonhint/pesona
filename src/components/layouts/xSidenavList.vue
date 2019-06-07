<template>
  <div class="pesona-sidenav-list">
    <div class="container" @click="containerClicked">
      <div class="item icon" v-if="icon">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div class="item text" >
        {{ text }}
      </div>
      <div v-if="showList" class="list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import xIcon from './../icons/xIcon'; 
  export default {
    components: { xIcon },
    name: 'x-sidenav-list',
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconMode: {
        type: String,
        default: 'material-icons'
      },
      text: {
        type: String,
        default: ''       
      }
    },
    computed: {

    },
    data() {
      return {
        showList: false
      };
    },
    mounted(){

    },
    methods: {
      containerClicked(ev) {
        if (!this.anySideNavItemParent(ev)){
          this.showList = !this.showList;
        }
      },
      anySideNavItemParent(ev) {
        const targetedClass = 'pesona-sidenav-item';
        const stopBandElements = 'pesona-sidenav';
        let currEl = ev.target;
        let foundElement = false;
        while (foundElement === false){
          if (currEl.className === targetedClass) {
            foundElement = true;
          }else{
            if ((currEl.tagName === 'HTML') ||
                (currEl.tagName === 'DIV' && currEl.className === stopBandElements)){
              break;
            }
            currEl = currEl.parentElement;
          }
        }
        return foundElement;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-list{
    .container {
      width: 100%;

      .item {
        display: inline-block;
      }

      .icon {

      }

      .text {
        transform: translateY(-10px);
      }
    }
    .container:hover {
      background-color: yellow;
    }
  }
</style>
