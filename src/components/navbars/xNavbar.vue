<template>
  <div class="pesona-navbar" :style="{ position: currentPosition }">
    <div class="container" :style="{ height }">
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
      sticky: {
        type: Boolean,
        default: false
      },
      topping: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentPosition(){
        let position = 'sticky';
        if (!this.sticky){
          position = 'unset';
        }
        return position;
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
          
          .pesona-button-wrapper {
            display: inline-grid;
            .pesona-button {
              width: 130px;
            }
          }
        }
        .left-action {
          margin-top: 16px;
          margin-right: 16px;
          justify-self: end;
          
          .pesona-button-wrapper {
            display: inline-grid;
          }
        }
      }

    }
  }
</style>
