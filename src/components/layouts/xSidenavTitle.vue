<template>
  <div class="pesona-sidenav-title">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-sidenav-title',
    props: {

    },
  }
</script>

<style lang="scss" scoped>
  .pesona-sidenav-title{
    .container {
      text-transform: uppercase;
      font-size: 0.8rem;
      margin: 0.75rem 0;
      font-weight: bold;
      color: #3f6ad8;
      white-space: nowrap;
      position: relative;
    }
  }
</style>
