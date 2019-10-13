<template>
  <div :class="[...c, ...[
    {
      'is-disabled': isDisabled,
      'is-readonly': readonly
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
    <div
      class="c-input-prepend"
      v-if="$slots.prepend"
    >
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
      :disabled="isDisabled"
    >
    <transition name="c-fade-in">
      <span class="c-input-prefix" v-if="$slots.prefix || prefixIcon" v-show="showPrefixIcon">
        <slot name="prefix"></slot>
        <i v-if="!$slots.prefix" class="input-icon material-icons">{{ prefixIcon }}</i>
      </span>
    </transition>
    <transition name="c-fade-in">
      <span class="c-input-suffix" v-if="$slots.suffix || suffixIcon" v-show="showSuffixIcon">
        <slot name="suffix"></slot>
        <i v-if="!$slots.suffix" class="input-icon material-icons">{{ suffixIcon }}</i>
      </span>
    </transition>
    <div
      class="c-input-append"
      v-if="$slots.append"
    >
      <slot name="append"></slot>
    </div>
    <div class="c-input-hint" v-if="$slots.hint || hint">
      <slot name="hint"></slot>
    </div>
  </div>
</template>

<script>
  import { appendColorClass, appendSizeClass } from '../../utilities/utilities';

  export default {
    name: 'CInput',
    componentName: 'CInput',
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
      width: [String, Number],
      size: String,
      prefixIcon: String,
      suffixIcon: String,
      hint: String,
      showIconOnFocus: [Boolean, String],
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
      },
      showPrefixIcon() {
        if(this.showIconOnFocus === true || this.showIconOnFocus === 'prefix') {
          return this.focused || this.hovering;
        } else {
          return true;
        }
      },
      showSuffixIcon() {
        if(this.showIconOnFocus === true || this.showIconOnFocus === 'suffix') {
          return this.focused || this.hovering;
        } else {
          return true;
        }
      }
    },
    methods: {
      handleFocus() {
        if(!this.focused) {
          this.focused = true;
          this.$emit('focus');
        }
      },
      handleBlur() {
        if(this.focused) {
          this.focused = false;
          this.$emit('blur');
        }
      },
      handleInput(ev) {
        this.$emit('input', ev.target.value);
      },
      handleChange(ev) {
        this.$emit('change', ev.target.value);
      },
    },
    mounted() {
      if(this.width) {
        if(typeof(this.width) === 'string') {
          this.$el.style.width = this.width;
        } else {
          this.$el.style.width = `${parseInt(this.width)}px`;
        }
      }
    }
  }
</script>