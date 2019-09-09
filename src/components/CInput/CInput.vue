<template>
  <div :class="[...c, ...[
    {
      'is-disabled': isDisabled,
      'is-readonly': readonly
    },
    {
      'prefix': $slots.prefix || prefixIcon,
      'suffix': $slots.suffix || suffixIcon,
      'input-group': prependCaption || appendCaption || $slots.prepend || $slots.append,
      'prepend': $slots.prepend || prependCaption,
      'append': $slots.append || appendCaption
    },
    {
      'simplified': simplified,
      'round': round
    }]]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      :class="['c-input-prepend', {'clickable' : groupClickable}]"
      v-if="$slots.prepend || prependCaption"
    >
      <slot name="prepend"></slot>
      <div v-if="!$slots.prepend">{{ prependCaption }}</div>
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
    <span class="c-input-prefix" v-if="($slots.prefix || prefixIcon) && showPrefixIcon">
      <slot name="prefix"></slot>
      <i class="material-icons prefix-icons" v-if="!$slots.prefix">{{ prefixIcon }}</i>
    </span>
    <span class="c-input-suffix" v-if="($slots.suffix || suffixIcon) && showSuffixIcon">
      <slot name="suffix"></slot>
      <i class="material-icons suffix-icons" v-if="!$slots.suffix">{{ suffixIcon }}</i>
    </span>
    <div
      :class="['c-input-append', { 'clickable': groupClickable }]"
      v-if="$slots.append || appendCaption"
    >
      <slot name="append"></slot>
      <div v-if="!$slots.append">{{ appendCaption }}</div>
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
      appendCaption: String,
      prependCaption: String,
      hint: String,
      showIconOnFocus: Boolean || String,
      groupClickable: Boolean
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
          return this.focused;
        } else {
          return true;
        }
      },
      showSuffixIcon() {
        if(this.showIconOnFocus === true || this.showIconOnFocus === 'suffix') {
          return this.focused;
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