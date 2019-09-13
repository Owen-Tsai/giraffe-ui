<template>
  <div
    :class="c"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="c-tooltip-ref" ref="reference">
      <slot name="activator"></slot>
    </div>
    <transition name="c-fade-in-linear">
      <div
        class="c-tooltip-popper"
        ref="popper"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        v-show="tooltipVisible || persistent"
      >
        <div class="c-tooltip-inner">
          <div class="c-tooltip-arrow"></div>
          <div class="c-tooltip-content">
            <slot>{{ content }}</slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Popper from 'popper.js';
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CTooltip',
    props: {
      placement: {
        validator(val) {
          return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].includes(val)
        },
        default: 'bottom-start'
      },
      delay: {
        type: Number,
        default: 10
      },
      maxWidth: Number,
      content: String,
      persistent: Boolean,
      color: String
    },
    data: () => ({
      popper: null, // popper.js instance
      popperStatus: false,
      tooltipVisible: false
    }),
    computed: {
      c() {
        let classList = Array.of('c-tooltip');
        appendColorClass(this.color, classList);
        return classList;
      }
    },
    watch: {
      tooltipVisible (val) {
        if(this.popper) {
          if(val) {
            this.popper.update();
          }
          this.$emit('visible-change', val);
        } else {
          this.update();
        }
      },
    },
    methods: {
      update() {
        if(this.popper) {
          this.$nextTick(() => {
            this.popper.update();
            this.popperStatus = true;
          })
        } else {
          // instantiate new popper instance
          this.popper = new Popper(this.$refs.reference, this.$refs.popper, {
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
      },
      handleMouseEnter() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.tooltipVisible = true;
        }, this.delay);
      },
      handleMouseLeave() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.tooltipVisible = false;
        }, this.delay);
      }
    },
    created() {
      this.$on('popper-update', this.update);
      this.$on('popper-destroy', this.destroy);
    },
    mounted() {
      if(this.persistent) {
        this.update();
      }
      if(this.maxWidth && this.maxWidth >= 1) {
        this.$refs.popper.style.maxWidth = `${this.maxWidth}px`;
      }
    },
    beforeDestroy () {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  }
</script>