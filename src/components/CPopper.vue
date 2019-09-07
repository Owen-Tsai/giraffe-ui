<template>
  <div :class="[...'c-popper', ...className]" :style="popperStyle">
    <slot></slot>
  </div>
</template>

<script>
  import Popper from 'popper.js'

  export default {
    name: 'CPopper',
    props: {
      placement: {
        type: String,
        default: 'bottom-start'
      },
      className: {
        type: Array | String,
        default: ''
      }
    },
    data: () => ({
      popper: null,
      width: '',
      popperStatus: false,
    }),
    computed: {
      popperStyle() {
        let style = {};
        if(this.width && this.width > 0) {
          style.minWidth = `${this.width}px`;
        }
        return style;
      }
    },
    methods: {
      update() {
        if(this.popper) {
          this.$nextTick(() => {
            this.popper.update();
            this.popperStatus = true;
          })
        } else {
          this.$nextTick(() => {
            this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
              placement: this.placement,
              modifiers: {
                preventOverflow: {
                  boundariesElement: 'window'
                }
              },
              onCreate: () => {
                this.$nextTick(this.popper.update());
              },
              onUpdate: () => {
              }
            })
          })
        }
      },
    },
    created () {
      this.$on('on-update-popper', this.update);
    },
  }
</script>