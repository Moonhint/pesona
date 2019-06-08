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
  import styleMixin from 'mixins/styleMixin';
  
  export default {
    name: 'x-lo-dashboard',
    mixins: [styleMixin],
    mounted(){
      let currentColor = this._getCurrentColors();
      let targetColor = this._colorLuminance(currentColor.brands.secondary, -0.1);
      this._setLocalCssVariables({
        '--pesona-brand-color-secondary-darken-10': targetColor,
      });
    }
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
        overflow-y: auto;
        box-shadow: 7px 0 60px rgba(0, 0, 0, 0.05);
      }

      .inner-container {
        position: relative;
        overflow: auto;

        .header-toolbar {
          height: 60px;
          position: sticky;
          top: 0;
          background-color: var(--pesona-brand-color-secondary-darken-10);
          box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        }

        .content {
          margin: 1.5rem;
          border: 1px solid red;
        }

        .footer {
          height: 200px;
          border: 1px solid yellow;
        }

      }
    }
  }
</style>
