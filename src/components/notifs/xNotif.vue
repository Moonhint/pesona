<template>
  <div class="pesona-notif">
    <slot></slot>
  </div>
</template>

<script>
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';

  // todo: styling 
  export default {
    name: 'x-notif',
    mixins: [dimensionMixin, styleMixin],
    data: () => {
      return {

      }
    }, 
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-notif {
    
  }
</style>
