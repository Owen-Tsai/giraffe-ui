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
  import CPopper from '../CPopper/CPopper';
  import Popper from 'popper.js';
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CDropdown',
    componentName: 'CDropdown',
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
      color: String
    },
    computed: {
      c() {
        let classList = Array.of('c-dropdown');
        appendColorClass(this.color, classList);
        return classList;
      },
    },
    watch: {
      menuVisible (val) {
        this.$refs.popper.update();
        this.$emit('visible-change', val);
      },
    },
    methods: {
      handleMouseEnter() {
        if(this.trigger !== 'hover') return;
        this.menuVisible = true;
      },
      handleMouseLeave() {
        if(this.trigger !== 'hover') return;
        this.menuVisible = false;
      },
      handleClick() {
        this.menuVisible = !this.menuVisible;
      },
      handleClickOutside(e) {
        if (this.trigger !== 'click') return;
        if (this.menuVisible) this.$emit('click:outside', e);
        this.menuVisible = false;
      }
    },
    created() {

    }
  }
</script>