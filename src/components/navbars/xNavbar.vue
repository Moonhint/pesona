<template>
  <div class="pesona-navbar">
    <div class="container" :style="{ height: navbarHeight }">
      <div v-if="topping" class="topping-wrapper">
        <div class="topping">
          <slot name="topping"></slot>
        </div>
      </div>
      <div class="bottom-wrapper">
        <div class="right-side">
          <slot name="right-side"></slot>
        </div>
        <div/>
        <div class="left-side">
          <slot name="left-side"></slot>
        </div>
        <div class="left-action">
          <slot name="left-action"></slot>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
  import styleMixin from 'mixins/styleMixin';

  export default {
    name: 'x-navbar',
    mixins: [styleMixin],
    props: {
      height: {
        type: String,
        default: '64px'
      },
      backgroundColor: {
        type: String,
        default: '#000'
      },
      topping: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      navbarHeight(){
        // TODO: store this in css variable instead of hardcoded
        let self = this;
        let heightValue = parseInt(self.height);
        if (self.topping){
          heightValue = heightValue + 36;
        }
        return `${heightValue}px`;
      }
    },
    data() {
      return {

      };
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-navbar{
    top: 0;

    .container {
      width: 100%;

      .topping-wrapper {
        background-color: var(--pesona-brand-color-accent);
        color: var(--pesona-on-color-accent);
        height: 36px;
        .topping {
          display: grid;
          padding: 8px 16px;
          justify-content: end;
        }
      }

      .bottom-wrapper {
        font-family: var(--pesona-font-primary);
        height: 64px;
        display: grid;
        grid-template-columns: 100px auto 800px 100px;
        grid-template-rows: auto;

        background-color: var(--pesona-brand-color-primary);
        color: var(--pesona-on-color-primary);

        .right-side {
          justify-self: start;
          margin-top: 24px;
          margin-left: 16px;
        }

        .left-side {
          margin-top: 16px;
          margin-right: 16px;
          justify-self: end;
        }

        .left-action {
          margin-top: 16px;
          margin-right: 16px;
          justify-self: end;
        }

      }

    }
  }
</style>
