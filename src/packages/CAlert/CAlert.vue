<template>
  <transition name="c-toggle-up" mode="in-out">
    <div :class="[...c, ...[
      {
        'outlined': outlined
      },
      {
        'no-icon': !icon
      }
    ]]" v-if="value">
      <i v-if="icon" :class="[iconClass, 'c-alert-icon', 'material-icons',]">{{ icon }}</i>
      <div class="c-alert-content">
        <span class="c-alert-title" v-if="$slots.title || title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="c-alert-description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="c-alert-description" v-if="!$slots.default && description">{{ description }}</p>
      </div>
      <span class="c-alert-close" v-if="!persistent">
        <span class="c-alert-close-text" v-if="closeText" @click="visible = false">{{ closeText }}</span>
        <i :class="['c-alert-close-icon', 'material-icons']" v-else-if="closeIcon" @click="visible = false">
          {{ closeIcon }}
        </i>
        <i class="c-alert-close-icon material-icons" v-else @click="visible = false">
          close
        </i>
      </span>
    </div>
  </transition>
</template>

<script>
  import { appendColorClass } from '../../utilities/utilities';

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
      persistent: Boolean,
      visible: Boolean,
      closeText: String,
      closeIcon: String
    },
    data: () => ({
      value: true,
    }),
    watch: {
      visible(val) {
        if(val) {
          this.value = true;
          this.$emit('open');
        } else {
          this.value = false;
          this.$emit('close');
        }
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