<template>
  <div class="pesona-color-panel">
    <div class="area brand-area">
      <p> Brand Colors </p>
      <div class="color-band primary"> Primary 
        <span class="hex" @click="copyToClipBoard">{{colors.brands.primary}}</span>
      </div>
      <div class="color-band secondary">Secondary 
        <span class="hex" @click="copyToClipBoard">{{colors.brands.secondary}}</span>
      </div>
      <div class="color-band accent">Accent 
        <span class="hex" @click="copyToClipBoard">{{colors.brands.accent}}</span>
      </div>
    </div>
    <div class="area shade-area">
      <p> Shade Colors </p>
      <div class="color-band black">Black 
        <span class="hex" @click="copyToClipBoard">{{colors.shade.black}}</span>
      </div>
      <div class="color-band semi-black">Semi Black 
        <span class="hex" @click="copyToClipBoard">{{colors.shade.semiBlack}}</span>
      </div>
      <div class="color-band gray">Gray 
        <span class="hex" @click="copyToClipBoard">{{colors.shade.gray}}</span>
      </div>
      <div class="color-band semi-white">Semi White 
        <span class="hex" @click="copyToClipBoard">{{colors.shade.semiWhite}}</span>
      </div>
      <div class="color-band white">White 
        <span class="hex" @click="copyToClipBoard">{{colors.shade.white}}</span>
      </div>
    </div>
    <div class="area action-area">
      <p> Action Colors </p>
      <div class="color-band success">Success 
        <span class="hex" @click="copyToClipBoard">{{colors.actions.success}}</span>
      </div>
      <div class="color-band error">Error 
        <span class="hex" @click="copyToClipBoard">{{colors.actions.error}}</span>
      </div>
      <div class="color-band warning">Warning 
        <span class="hex" @click="copyToClipBoard">{{colors.actions.warning}}</span>
      </div>
      <div class="color-band info">Info 
        <span class="hex" @click="copyToClipBoard">{{colors.actions.info}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';

  // todo: styling 
  export default {
    name: 'x-color-panel',
    mixins: [dimensionMixin, styleMixin],
    data: () => {
      return {
        colors: {
          brands: {
            primary: "",
            secondary: "",
            accent: ""
          },
          onBrands: {
            primary: "",
            secondary: "",
            accent: ""
          },
          shade: {
            black: "",
            semiBlack: "",
            gray: "",
            semiWhite: "",
            white: ""
          },
          actions: {
            success: "",
            error: "",
            warning: "",
            info: ""  
          },
          onActions: {
            success: "",
            error: "",
            warning: "",
            info: ""  
          }
        }
      }
    }, 
    mounted(){
      let self = this;
      setTimeout(()=>{
        self.colors = self._getCurrentColors();
      },100);
    },
    methods: {
      copyToClipBoard(ev){
        let selection = window.getSelection();
        let range = document.createRange();
        let element = ev.target;
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-color-panel {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
  }

  .area {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
  }

  .brand-area {
    flex-basis: 40%;
    .primary {
      background-color: var(--pesona-brand-color-primary);
      color: var(--pesona-on-color-primary);
    }

    .secondary {
      background-color: var(--pesona-brand-color-secondary);
      color: var(--pesona-on-color-secondary);
    }

    .accent {
      background-color: var(--pesona-brand-color-accent);
      color: var(--pesona-on-color-accent);
    }
  }

  .shade-area {
    flex-basis: 20%;
    border-right: 1px solid white;
    border-left: 1px solid white;
    .black {
      background-color: var(--pesona-shade-color-black);
      color: var(--pesona-shade-color-white);
    }
    .semi-black {
      background-color: var(--pesona-shade-color-semi-black);
      color: var(--pesona-shade-color-white);
    }
    .gray {
      background-color: var(--pesona-shade-color-gray);
      color: var(--pesona-shade-color-white);
    }
    .semi-white {
      background-color: var(--pesona-shade-color-semi-white);
      color: var(--pesona-shade-color-black);
    }
    .white {
      background-color: var(--pesona-shade-color-white);
      color: var(--pesona-shade-color-black);
    }
  }

  .action-area {
    flex-basis: 40%;
    .success {
      background-color: var(--pesona-action-color-success);
      color: var(--pesona-on-color-success);
    }
    .error {
      background-color: var(--pesona-action-color-error);
      color: var(--pesona-on-color-error);
    }
    .warning {
      background-color: var(--pesona-action-color-warning);
      color: var(--pesona-on-color-warning);
    }
    .info {
      background-color: var(--pesona-action-color-info);
      color: var(--pesona-on-color-info);
    }
  }

  .color-band {
    padding: 10px;
  }

</style>
