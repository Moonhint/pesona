<template>
  <div class="pesona-sidenav">
    <div class="container" :class="[state]" :style="widthByState">
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
      <div v-if="withSearch && state === 'open'" class="search-area">
        <x-text-field
          prepend-icon-name="search"
          label="Search"
          @input="searchContent">
        </x-text-field>
      </div>
      <div id="navigation-content" @click="eventBubble" v-if="state === 'open' || state === 'shrink'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import dataTypeMixin from 'mixins/dataTypeMixin';
  import styleMixin from 'mixins/styleMixin';
  import xIcon from './../icons/xIcon'; 
  import xTextField from './../inputs/xTextField'; 

  // TODO size (auto / overwrite)
  // TODO mode (push, over)
  // TODO backdrop (true, false)
  // TODO style it outt
  // TODO responsive
  // TODO media query for shrink open and close
  // TODO style search input
  export default {
    components: { xIcon, xTextField },
    mixins: [dataTypeMixin, styleMixin],
    name: 'x-sidenav',
    props: {
      height: {
        type: String,
        default: '64px'
      },
      withSearch: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      widthByState(){
        let style = { width: '280px' };
        if (this.state === 'close') {
          style.width = '0';
        }else if (this.state === 'shrink'){
          style.width = '65px';
        }
        return style;
      }
    },
    data() {
      return {
        state: 'open',
        sideNavItem: undefined,
        sideNavList: undefined,
        scrollbar: undefined,
        searchQuery: ''
      };
    },
    mounted(){
      this.mountSimpleBar();
      let sideNav = this.$el;
      this.sideNavItem = sideNav.getElementsByClassName('pesona-sidenav-item');
      this.sideNavList = sideNav.getElementsByClassName('pesona-sidenav-list');
    },
    methods: {
      mountSimpleBar(){
        let self = this;
        import(/* webpackChunkName: "simplebar" */ 'simplebar')
          .then(import(/* webpackChunkName: "simplebar-style" */ 'simplebar/dist/simplebar.css'))
          .then(import(/* webpackChunkName: "simplebar-overwrite" */ './simplebar-overwrite.css'))
          .then(({ default: SimpleBar })=>{
            self.scrollbar = new SimpleBar(document.getElementById('navigation-content'), {
              autoHide: true,
              classNames: {
                content: 'simplebar-content',
                scrollContent: 'simplebar-scroll-content',
                scrollbar: 'simplebar-scrollbar',
                track: 'simplebar-track'
              }
            });
          })
          .catch(error => 'An error occurred while loading the perfect-scrollbar component');
      },
      navActionClicked(){
        if (this.state === 'open'){
          this.state = 'shrink';
        }else if (this.state === 'shrink') {
          this.state = 'close';
        }else {
          this.state = 'open';
          this.mountSimpleBar();
        }
        this.$emit('stateChange', this.state);
      },
      eventBubble(ev){
        let self = this;
        if (this.state === 'open'){
          let element = ev.target;
          let foundElement = false;

          while (!foundElement){
            let includeItem = false;
            let includeList = false;
            let isUnfold = false;

            if (self._isString(element.className)){
              includeItem = element.className.includes('pesona-sidenav-item');
              includeList = element.className.includes('pesona-sidenav-list');
              isUnfold = element.className.includes('unfold');
            }

            if (includeList && isUnfold){
              element.className = 'pesona-sidenav-list';
              foundElement = true;
            }else if (includeList){
              this.removeAllUnfoldElement();
              element.className = `${element.className} unfold`;
              foundElement = true;
            }else if (includeItem){
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
      },
      removeAllUnfoldElement(){
        if (this.sideNavList){
          for (let i=0; i < this.sideNavList.length; i++){
            this.sideNavList[i].className = this.sideNavList[i].className.split(' ')[0];
          }
        }
      },
      searchContent(query){
        let self = this;
        self.searchQuery = query;
        let el = self.$el;
        let aArray = el.getElementsByClassName('pesona-sidenav-item');

        let arr = [];
        for (let i = 0; i < aArray.length; i++){
          aArray[i].style.display = "block";
          let getText = aArray[i].getElementsByClassName('text')[0].innerText.toLowerCase();
          
          if (!getText.includes(self.searchQuery.toLowerCase())){
            aArray[i].style.display = "none";
          }
        }

        let aArrayList = el.getElementsByClassName('pesona-sidenav-list');
        
        for (let i = 0; i < aArrayList.length; i++){
          let display = false;
          aArrayList[i].style.display = "block";

          let listHeaderText = aArrayList[i].children[0].getElementsByClassName('text')[0].innerText.toLowerCase();

          if (listHeaderText.includes(self.searchQuery.toLowerCase())){
            let childItems = aArrayList[i].getElementsByClassName('pesona-sidenav-item');
            childItems.forEach((n)=>{
              n.style.display = 'block';
            });
          }else{
            aArrayList[i].getElementsByClassName('pesona-sidenav-item')
              .forEach((n)=>{
                if (n.style.display !== 'none'){
                  display = true;
                }
              });
            if (!display){
              aArrayList[i].style.display = "none";
            }
          }
        }

        let aArrayHeader = el.getElementsByClassName('pesona-sidenav-title');
        for (let i = 0; i < aArrayHeader.length; i++){
          let siblingEl = aArrayHeader[i].nextElementSibling;
          let display = false;
          aArrayHeader[i].style.display = "block";
          for (let j = 0; j < (aArray.length + aArrayList.length); j++){

            if (siblingEl){
              if (siblingEl.className === 'pesona-sidenav-title'){
                break;
              }else{
                if (siblingEl.style.display !== 'none'){
                  display = true;
                }
                siblingEl = siblingEl.nextElementSibling;
              }
            }else{
              break;
            }  
          }
          if (!display){
            aArrayHeader[i].style.display = "none";
          }
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav{
    font-family: sans-serif;
    font-size: 14.0833px;
    font-weight: 400;

    .container {
      
      .header {
        height: 60px;
        line-height: 90px;
        padding: 0 22px;
        background-color: var(--pesona-brand-color-secondary);

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

      #navigation-content {
        margin: 0;
        width: inherit;
        height: calc(100vh - 60px);
      }
    }

    .shrink {
      .logo {
        display: none;
      }

      .header {
        padding: 0 15px;
      }
    }
  }
</style>
