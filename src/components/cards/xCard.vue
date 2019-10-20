<template>
  <div class="pesona-card">
    <div class="container" :style="{
        width: providedWidth,
        height: providedHeight
      }">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import styleMixin from 'mixins/styleMixin';

  export default {
    components: {  },
    mixins: [styleMixin],
    name: 'x-card',
    props: {
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
    },
    computed: {
      providedWidth(){
        return this.width;
      },
      providedHeight() {
        return this.height;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-card{
    .container {
      margin: 4px 24px;
      border-radius: 5px;
      min-width: 300px;
      min-height: 250px;
      background-color: #fff;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: box-shadow;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto 64px;

      .header {
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.0125em;
        padding: 24px;
      }

      .content {
        padding: 8px 24px;
        background-color: white;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .actions {
        align-items: center;
        display: flex;
        padding: 8px;
        flex-direction: row-reverse;
      }
    }
  }
</style>
