<template>
  <span :class="[...c, ...[
    {
      'outlined': outlined,
      'flat': flat,
      'round': round,
      'sharp': sharp
    }
  ]]" v-if="visible">
    <slot></slot>
    <c-icon icon-set="giraffe" v-if="!persistent" @click="handleClose">close</c-icon>
  </span>
</template>

<script>
  import { appendColorClass, appendSizeClass } from '../../utilities/utilities';
  import CIcon from '../CIcon/CIcon';

  export default {
    name: 'CTag',
    components: {
      CIcon
    },
    data: () => ({
      visible: true
    }),
    props: {
      color: String,
      size: String,
      outlined: Boolean,
      flat: Boolean,
      persistent: Boolean,
      round: Boolean,
      sharp: Boolean
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
        this.visible = false;
        this.$emit('close');
      }
    }
  }
</script>