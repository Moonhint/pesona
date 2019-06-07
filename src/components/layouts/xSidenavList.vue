<template>
  <div class="pesona-sidenav-list">
    <div class="container">
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
      let self = this;
      setInterval(()=>{
        if (self.anyActiveClass(self.$el)){
          self.showList = true;
        }else{
          self.showList = false;
        }
      }, 500);
    },
    methods: {
      anyActiveClass(el) {
        let hasActive = false;
        let childs = el.getElementsByClassName('pesona-sidenav-item');
        let parentActive = el.className.split(' ').indexOf('active') === -1 ? false : true;
        let anyActiveChild = false;

        if (childs.length !== 0){
          for(let i=0; i<childs.length; i++){
            let child = childs[i];
            if (child.className.split(' ').indexOf('active') !== -1 ){
              anyActiveChild = true;
              break;
            }
          }
        }

        if (parentActive || anyActiveChild) {
          hasActive = true;
        }

        return hasActive;
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

      .show-list {
        display: block;
      }

      .hide-list {
        display: none;
      }
    }
    .container:hover {
      background-color: yellow;
    }
  }

  .active {
    background-color: grey;
  }
</style>
