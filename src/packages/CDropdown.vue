<template>
  <div
    :class="c"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-click-outside="handleClickOutside"
  >
    <!-- Activator -->
    <div @click="handleClick" ref="reference">
      <slot name="activator"></slot>
    </div>
    <!-- Dropdown menu and items -->
    <transition name="c-zoom-in-top">
      <c-popper
        ref="popper"
        class="c-dropdown-list"
        :placement="placement"
        v-show="menuVisible"
        @mouseenter.native="handleMouseEnter"
        @mouseleave.native="handleMouseLeave"
      >
        <slot></slot>
      </c-popper>
    </transition>
  </div>
</template>

<script>
  import CPopper from './CPopper'
  import Popper from 'popper.js'

  export default {
    name: 'CDropdown',
    components: {
      CPopper,
    },
    data: () => ({
      menuVisible: false,
      popper: null,
      popperStatus: false,
    }),
    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      placement: {
        type: String,
        default: 'bottom-start'
      },
    },
    computed: {
      c() {
        let classList = Array.of('c-dropdown');
        return classList;
      },
    },
    watch: {
      menuVisible (val) {
        this.$refs.popper.update();
        this.$emit('on-visible-change', val);
      },
    },
    methods: {
      handleMouseEnter() {
        if(this.trigger !== 'hover') return false;
        this.menuVisible = true;
      },
      handleMouseLeave() {
        if(this.trigger !== 'hover') return false;
        this.menuVisible = false;
      },
      handleClick() {
        this.menuVisible = !this.menuVisible;
      },
      handleClickOutside(e) {
        if (this.trigger !== 'click') return false;
        this.menuVisible = false;
        if (this.menuVisible) this.$emit('on-clickoutside', e);
      }
    },
    created() {

    }
  }
</script>