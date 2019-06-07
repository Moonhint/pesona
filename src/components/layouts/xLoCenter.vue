<template>
  <div class="pesona-layout-center">
    <div class="container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-lo-center',
  }
</script>

<style lang="scss" scoped>
  .pesona-layout-center{
    .container {
      height: 100vh;
      display: grid;

      .content {
        margin: auto;
      }
    }
  }
</style>
