<template>
  <div :class="[...c, ...[
    {
      'raised': raised,
      'simplified': simplified,
      'outlined': outlined
    }
  ]]">
    <div class="c-card-header" v-if="header || $slots.header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="c-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="c-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CCard',
    props: {
      header: {},
      footer: {},
      bodyStyle: {},
      color: {
        type: String,
        default: 'default'
      },
      raised: Boolean,
      simplified: Boolean,
      outlined: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-card');
        appendColorClass(this.color, classList);
        return classList;
      }
    }
  }
</script>