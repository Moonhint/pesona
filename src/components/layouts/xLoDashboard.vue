<template>
  <div class="pesona-layout-dashboard">
    <div class="container">
      <div class="side-nav">
        <slot name="sidenav"></slot>
      </div>
      <div class="inner-container">
        <div class="header-toolbar">
          <slot name="toolbar"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // TODO: make a toolbar component
  // TODO: make a sidenav component
  // TODO: sloted dashboard layout
  
  export default {
    name: 'x-lo-dashboard',
  }
</script>

<style lang="scss" scoped>
  .pesona-layout-dashboard{
    .container {
      height: 100vh;
      display: grid;
      border: 1px solid red;
      grid-template-columns: fit-content(280px) auto;
      grid-template-rows: auto;

      .side-nav {
        border: 1px solid black;
      }
      .inner-container {
        position: relative;
        border: 1px solid blue;
        overflow: auto;

        .header-toolbar {
          height: 60px;
          background-color: red;
          position: sticky;
          top: 0;
        }

        .content {
          border: 1px solid red;
        }

        // .overcontent {
        //   height: 1000px;
        //   background-color: grey;
        // }

        .footer {
          height: 200px;
          border: 1px solid yellow;
        }

      }
    }
  }
</style>
