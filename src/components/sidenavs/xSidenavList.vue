<template>
  <div class="pesona-sidenav-list">
    <div class="container" :class="[state]">
      <div class="icon" v-if="icon && state !== 'shrink'">
        <x-icon :mode="iconMode" :name="icon" xxlarge padding="0"/>
      </div>
      <div class="text" :class="{ 'bolder': showList }">
        {{ text }}
      </div>
      <div v-if="state !== 'shrink'" class="indicator">
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
        default: 'help'
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
        showList: false,
        state: 'open'
      };
    },
    mounted(){
      let self = this;
      setInterval(()=>{
        if (self.state === 'shrink'){
          self.$emit('stateChange', 'shrink');
          self.showList = true;
        }else{
          if (self.anyUnfoldClass(self.$el)){
            self.showList = true;
          }else{
            self.showList = false;
          }
        }
      }, 200);
      this.$parent.$on('stateChange', this.changeInternalState)
    },
    methods: {
      anyUnfoldClass(el){
        return el.className.split(' ').indexOf('unfold') === -1 ? false : true;
      },
      changeInternalState(state){
        this.state = state;
      }
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
      padding: 4px 8px;
      margin: 0 4%;
      cursor: pointer;
      user-select: none;

      .icon {
        opacity: .3;
      }

      .text {
        flex-grow: 2;
        padding-left: 8px;
      }

      .indicator {
        opacity: .3;
      }
    }
    .container:hover {
      background-color: #007bff;
    }

    .shrink {
      .text {
        font-size: 10px;
        font-weight: 400;
      }
    }
    .shrink:hover {
      background-color: #fff;
    }
  }

  .bolder {
    font-weight: 600;
  }
</style>
