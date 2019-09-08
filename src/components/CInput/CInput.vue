<template>
  <div :class="[...c, ...[
    {
      'is-disabled': isDisabled
    },
    {
      'prefix': $slots.prefix || prefixIcon,
      'suffix': $slots.suffix || suffixIcon,
      'input-group': $slots.prepend || $slots.append,
      'prepend': $slots.prepend,
      'append': $slots.append
    },
    {
      'simplified': simplified,
      'round': round
    }]]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="c-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="c-input-input"
      :type="type"
      v-bind="$attrs"
      :readonly="readonly"
      ref="input"
      :aria-label="label"
      @focus="handleFocus"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
    >
    <span class="c-input-prefix" v-if="$slots.prefix || prefixIcon">
      <slot name="prefix"></slot>
      <i class="material-icons prefix-icons" v-if="!$slots.prefix">{{ prefixIcon }}</i>
    </span>
    <span class="c-input-suffix" v-if="$slots.suffix || suffixIcon">
      <slot name="suffix"></slot>
      <i class="material-icons suffix-icons" v-if="!$slots.suffix">{{ suffixIcon }}</i>
    </span>
    <div class="c-input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
    <div class="c-input-hint" v-if="$slots.hint || hint">
      <slot name="hint"></slot>
      <span class="hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script>
  import { appendColorClass, appendSizeClass } from '@/utilities/utilities';

  export default {
    name: 'CInput',
    inheritAttrs: false,
    props: {
      disabled: Boolean,
      readonly: Boolean,
      simplified: Boolean,
      round: Boolean,
      label: String,
      color: String,
      type: {
        type: String,
        default: 'text'
      },
      width: String || Number,
      size: String,
      prefixIcon: String,
      suffixIcon: String,
      hint: String
    },
    data: () => ({
      hovering: false,
      focused: false,
    }),
    computed: {
      isDisabled() {
        return this.disabled;
      },
      c() {
        let classList = Array.of('c-input');
        appendColorClass(this.color, classList);
        appendSizeClass(this.size, classList);
        return classList;
      }
    },
    methods: {
      handleFocus() {
        this.focused = true;
        this.$emit('focus');
      },
      handleBlur() {
        this.focused = false;
        this.$emit('blur');
      },
      handleInput(ev) {
        this.$emit('input', ev.target.value);
      },
      handleChange(ev) {
        this.$emit('change', ev.target.value);
      }
    },
    created() {
      this.$nextTick(() => {
        if(this.width) {
          this.$el.style.width = `${parseInt(this.width)}px`;
        }
      })
    }
  }
</script>