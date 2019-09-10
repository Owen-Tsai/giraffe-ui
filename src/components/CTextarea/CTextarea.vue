<template>
  <div :class="[...c, ...[
    {
      'is-disabled': isDisabled,
      'is-readonly': readonly
    }
  ]]">
    <textarea
      class="c-textarea-input"
      v-bind="$attrs"
      :aria-label="label"
      ref="textarea"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :disabled="isDisabled"
      :readonly="readonly"
      :rows="rows"
    ></textarea>
    <div class="c-textarea-hint" v-if="$slots.hint || hint">
      <slot name="hint"></slot>
      <span class="hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script>
  import { appendColorClass } from "@/utilities/utilities";

  export default {
    name: 'CTextarea',

    props: {
      disabled: Boolean,
      readonly: Boolean,
      label: String,
      color: String,
      rows: [Number, String],
      minRows: Number,
      noResize: Boolean,
      hint: String
    },
    data:() => ({
      focusd: false
    }),
    computed: {
      isDisabled() {
        return this.disabled;
      },
      c() {
        let classList = Array.of('c-textarea');
        appendColorClass(this.color, classList);
        return classList;
      }
    },
    methods: {
      handleFocus() {
        if(!this.focusd) {
          this.focusd = true;
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
      resize() {
        let computedStyle = window.getComputedStyle(this.$el.children[0]);
        const padding = parseInt(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        const border =  parseInt(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth);
        const lineheight = parseFloat(computedStyle.lineHeight);

        if(this.minRows > 1) {
          let h = padding + border + lineheight * this.minRows;
          this.$el.children[0].style.minHeight = `${h}px`;
        } else {
          let h = padding + border + lineheight;
          this.$el.children[0].style.minHeight = `${h}px`;
        }

        if(this.noResize) {
          this.$el.children[0].style.resize = "none";
        }
      }
    },
    mounted() {
      this.resize();
    }
  }
</script>