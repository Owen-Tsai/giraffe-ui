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
        validator(val) {
          return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].includes(val)
        },
        default: 'bottom-start'
      },
    },
    data: () => ({
      popper: null,
      popperStatus: false,
    }),
    methods: {
      update() {
        if(this.popper) {
          this.$nextTick(() => {
            this.popper.update();
            this.popperStatus = true;
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
        // flip transform origin of popper animation
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