<template>
  <div class="pesona-sidenav">
    <div class="container" :style="widthByState">
      <div class="header">
        <div class="logo" v-if="state === 'open'">
          <slot name="logo"></slot>
        </div>
        <div class="navigation-action" @click="navActionClicked">
          <x-icon v-if="state === 'open'" mode="material-icons" name="menu" xlarge/>
          <x-icon v-if="state === 'shrink'" mode="material-icons" name="close" xlarge/>
          <x-icon class="open-nav" v-if="state === 'close'" mode="material-icons" name="keyboard_arrow_right" xlarge/>
        </div>
      </div>
      <div @click="eventBubble" class="content" v-if="state === 'open' || state === 'shrink'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import xIcon from './../icons/xIcon'; 
  // TODO style it outt
  // TODO responsive
  // TODO media query for shrink open and close
  export default {
    components: { xIcon },
    name: 'x-sidenav',
    props: {
      height: {
        type: String,
        default: '64px'
      },
    },
    computed: {
      widthByState(){
        let style = { width: '280px' };
        if (this.state === 'close') {
          style.width = '0';
        }else if (this.state === 'shrink'){
          style.width = '45px';
        }
        return style;
      }
    },
    data() {
      return {
        state: 'open',
        sideNavItem: undefined,
        sideNavList: undefined
      };
    },
    mounted(){
      let sideNav = this.$el;
      this.sideNavItem = sideNav.getElementsByClassName('pesona-sidenav-item');
      this.sideNavList = sideNav.getElementsByClassName('pesona-sidenav-list');
    },
    methods: {
      navActionClicked(){
        if (this.state === 'open'){
          this.state = 'shrink';
        }else if (this.state === 'shrink') {
          this.state = 'close';
        }else {
          this.state = 'open';
        }
        this.$emit('stateChange', this.state);
      },
      eventBubble(ev){
        if (this.state === 'open'){
          let element = ev.target;
          let foundElement = false; 
          while (!foundElement){
            let includeItem = element.className.includes('pesona-sidenav-item');
            let includeList = element.className.includes('pesona-sidenav-list');
            if (includeItem || includeList){
              this.removeAllActiveElement();
              element.className = `${element.className} active`;
              foundElement = true;
            }else{
              if ((element.tagName === 'HTML') ||
                  (element.tagName === 'DIV' && element.className === 'pesona-sidenav')){
                break;
              }
              element = element.parentElement;
            }
          }

        }
      },
      removeAllActiveElement(){
        if (this.sideNavItem){
          for (let i=0; i < this.sideNavItem.length; i++){
            this.sideNavItem[i].className = this.sideNavItem[i].className.split(' ')[0];
          }
        }
        if (this.sideNavList){
          for (let i=0; i < this.sideNavList.length; i++){
            this.sideNavList[i].className = this.sideNavList[i].className.split(' ')[0];
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav{
    .container {
      // width: 280px;

      .header {
        height: 60px;
        line-height: 90px;
        padding: 0 4px;
        background-color: red;

        .logo {
          display: inline;
          img {
            width: auto;
            height: 40px;
            max-width: 150px;
          }
        }

        .navigation-action {
          display: inline;
          line-height: 90px;
          float: right;

          .open-nav {
            position: absolute;
            top: 50%;
            z-index: 999;
          }
        }
      }

      .content {

      }
    }
  }
</style>
