<template>
  <div class="container" @click="containerClicked">{{buttonStyles.border}}</div>
</template>

<script>
  export default {
    name: 'fitting-slider',
    data() {
      return {
        buttonStyles: {
          border: '1px solid #eee',
          borderRadius: 3,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
          fontSize: 15,
          padding: '3px 10px',
          margin: 10,
        },
      };
    },
    methods: {
      containerClicked(){
        this.$emit('click')
        // console.info("clicked")
      }
    }
  }
</script>

<style>

</style>
