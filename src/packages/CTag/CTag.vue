<template>
  <transition name="c-zoom-in-center">
    <span :class="[...c, ...[
      {
        'outlined': outlined,
        'flat': flat,
        'round': round,
        'sharp': sharp
      },
      {
        'clickable': clickable
      }
    ]]" @click="handleClick">
      <slot></slot>
      <i class="material-icons tag-close" v-if="closable" @click="handleClose">close</i>
    </span>
  </transition>
</template>

<script>
  import { appendColorClass, appendSizeClass } from '../../utilities/utilities';

  export default {
    name: 'CTag',
    props: {
      color: String,
      size: String,
      outlined: Boolean,
      flat: Boolean,
      closable: Boolean,
      round: Boolean,
      sharp: Boolean,
      clickable: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-tag');
        appendColorClass(this.color, classList);
        appendSizeClass(this.size, classList);
        return classList;
      }
    },
    methods: {
      handleClose() {
        this.$emit('close');
      },
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>