<template>
  <div class="pesona-sidenav-list">
    <div class="container">
      <div class="icon" v-if="icon">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div class="text" :class="{ 'bolder': showList }">
        {{ text }}
      </div>
      <div class="indicator">
        <x-icon v-if="showList" mode='material-icons' name='keyboard_arrow_up' large padding="0"/>
        <x-icon v-if="!showList" mode='material-icons' name='keyboard_arrow_down' large padding="0"/>
      </div>
    </div>
    <div v-show="showList" class="list">
      <slot></slot>
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
        if (self.anyUnfoldClass(self.$el)){
          self.showList = true;
        }else{
          self.showList = false;
        }
      }, 500);
    },
    methods: {
      anyUnfoldClass(el){
        return el.className.split(' ').indexOf('unfold') === -1 ? false : true;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-list{
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      border-radius: 5px;
      padding: 0 8px;

      .icon {
        
      }

      .text {
        flex-grow: 2;
        padding-left: 8px;
      }
    }
    .container:hover {
      background-color: #007bff;
    }
  }

  .bolder {
    font-weight: 600;
  }
</style>
