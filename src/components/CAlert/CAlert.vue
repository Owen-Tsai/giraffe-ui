<template>
  <transition name="c-fade-in-linear">
    <div :class="[...c, ...[
      { 'outlined': outlined }
    ]]" v-show="visible">
      <i :class="['material-icons', ...iconClass, 'c-alert-icon']" v-if="icon">{{ icon }}</i>
      <div class="c-alert-content">
        <span class="c-alert-title" v-if="$slots.title || title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="c-alert-description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="c-alert-description" v-if="!$slots.default && description">{{ description }}</p>
      </div>
      <i class="material-icons c-alert-close-icon" v-if="!persistent" @click="handleClose">clear</i>
    </div>
  </transition>
</template>

<script>
  import { appendColorClass } from '@/utilities/utilities';

  export default {
    name: 'CAlert',
    props: {
      title: String,
      description: String,
      color: {
        type: String,
        default: 'default'
      },
      outlined: Boolean,
      icon: String,
      persistent: Boolean
    },
    data() {
      return {
        visible: true,
      }
    },
    methods: {
      handleClose() {
        this.visible = false;
        this.$emit('close');
      }
    },
    computed: {
      iconClass() {
        return this.title ? 'big-icon' : '';
      },
      c() {
        let classList = Array.of('c-alert');
        appendColorClass(this.color, classList);
        return classList;
      }
    }
  }
</script>