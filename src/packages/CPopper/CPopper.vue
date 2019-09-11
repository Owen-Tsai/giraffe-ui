<template>
  <div class="c-popper">
    <slot></slot>
  </div>
</template>

<script>
  import Popper from 'popper.js';

  export default {
    name: 'CPopper',
    props: {
      placement: {
        type: String,
        default: 'bottom-start'
      },
    },
    data: () => ({
      popper: null,
      width: '',
      popperState: false,
    }),
    methods: {
      update() {
        if(this.popper) {
          this.$nextTick(() => {
            this.popper.update();
            this.popperState = true;
          })
        } else {
          // instantiate new popper instance
          this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              },
              preventOverflow: {
                boundariesElement: 'window'
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          })
        }
      },
      destroy () {
        if (this.popper) {
          if (!this.popperStatus) {
            this.popper.destroy();
            this.popper = null;
          }
          this.popperStatus = false;
        }
      },
      resetTransformOrigin() {
        let x_placement = this.popper.popper.getAttribute('x-placement');
        let placementStart = x_placement.split('-')[0];
        let placementEnd = x_placement.split('-')[1];
        const leftOrRight = x_placement === 'left' || x_placement === 'right';
        if(!leftOrRight){
            this.popper.popper.style.transformOrigin = placementStart==='bottom' || ( placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
        }
      }
    },
    created() {
      this.$on('popper-update', this.update);
      this.$on('popper-destroy', this.destroy);
    },
    beforeDestroy () {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  }
</script>