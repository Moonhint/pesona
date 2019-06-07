<template>
  <div class="pesona-toolbar">
    <div class="container">
      this is toolbar
    </div>
  </div>
</template>

<script>
  export default {
    name: 'x-toolbar',
    props: {
      height: {
        type: String,
        default: '64px'
      },
    },
    computed: {

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
  .pesona-toolbar{
    .container {
      width: 100%;
    }
  }
</style>
