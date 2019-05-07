<template>
  <div class="pesona-button" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'x-button',
    props:{
      type: {
        type: String,
        default: "material"
      },
    },
    data() {
      return {

      };
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-child-navigator {
    display: flex;
    justify-content: center;
  }

  .item {
    user-select: none;
    border: 1px solid black;
    font-size: small;
    background-color: gray;
    min-width: 20px;
    min-height: 20px;
    margin: 3px;
    text-align: center;
  }

  .active {
    background-color: red;
  }

  .item__round {
    border-radius: 50%;
  }

  .item--text {
    transform: translateY(15%);
  }

  .pointer {
    cursor: pointer;
  }
</style>
