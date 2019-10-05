<template>
  <div class="pesona-sidenav-title">
    <div class="container" v-if="state === 'open'">
      <slot></slot>
    </div>
    <div class="shrink-container" v-if="state === 'shrink'"/>
  </div>
</template>

<script>
  export default {
    name: 'x-sidenav-title',
    data() {
      return {
        state: 'open'
      };
    },
    methods: {
      changeInternalState(state){
        this.state = state;
      }
    },
    mounted(){
      this.$parent.$on('stateChange', this.changeInternalState)
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-title{
    .container {
      text-transform: uppercase;
      font-size: 0.8rem;
      margin: 16px;
      font-weight: bold;
      color: #3f6ad8;
      white-space: nowrap;
      position: relative;
    }
    .shrink-container {
      width: 100%;
      height: 4px;
      margin-bottom: 10px;
      background-color: var(--pesona-brand-color-secondary);
    }
  }
</style>
