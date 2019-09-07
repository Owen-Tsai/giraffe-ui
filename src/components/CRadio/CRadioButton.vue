<template>
  <label
    :class="[...c, ...[
      {
        'is-active': value === label,
        'is-disabled': isDisabled
      }
    ]]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="c-radio-btn-input"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
    >
    <span
      class="c-radio-btn-inner"
      @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
  import { getParentInstance, appendColorClass } from '@/utilities/utilities'
  import Messenger from '@/utilities/messenger'

  export default {
    name: 'CRadioButton',
    props: {
      label: {},
      color: String,
      disabled: Boolean,
      name: String
    },
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-radio-btn');
        appendColorClass(this.color, classList);
        return classList;
      },
      _radioGroup() {
        return getParentInstance(this, 'CRadioGroup');
      },
      value: {
        get() {
          return this._radioGroup.value;
        },
        set(val) {
          this._radioGroup.$emit('input', val);
        }
      },
      isDisabled() {
        return this.disabled || this._radioGroup.disabled;
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.dispatch('CRadioGroup', 'handleChange', this.value);
        })
      }
    }
  }
</script>