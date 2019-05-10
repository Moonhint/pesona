<template>
  <div class="pesona-color-panel">

  </div>
</template>

<script>
  import dimensionCalculator from 'mixins/dimensionCalculator';
  import styleApplier from 'mixins/styleApplier';

  export default {
    name: 'x-color-panel',
    mixins: [dimensionCalculator, styleApplier],
    props:{
      color: {
        type: String,
        default: "red"
      },
      width: {
        type: String,
        default: "30px"
      },
      height: {
        type: String,
        default: "30px"
      }
    },
    data() {
      return {

      };
    },
    computed: {
      heightValue(){
        return this._normalizeValue(this.height);
      },
      widthValue(){
        return this._normalizeValue(this.width);
      }
    },
    mounted(){
      this._setCssVariables({
        '--x-height-value': this.heightValue,
        '--x-width-value': this.widthValue
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pesona-color-panel {
    width: var(--x-width-value);
    height: var(--x-height-value);
  }

</style>
