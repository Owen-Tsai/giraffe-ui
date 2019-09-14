<template>
  <label :class="[...c, ...[
    {
      'is-disabled': isDisabled
    },
    {
      'is-checked': label === model
    }]]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="c-radio-input">
      <span :class="['c-radio-inner', ...[
        {
          'is-checked': label === model
        }
      ]]"></span>
      <input
        ref="radio"
        type="radio"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
      >
    </span>
    <span class="c-radio-label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
  import { appendColorClass, findParentComponent } from '../../utilities/utilities';
  import Messenger from '../../utilities/mixin.messenger';

  export default {
    name: 'CRadio',
    componentName: 'CRadio',
    props: {
      label: {},
      value: {},
      color: String,
      name: String,
      disabled: Boolean,
      simplified: Boolean,
    },
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-radio');
        appendColorClass(this.color, classList);
        return classList;
      },
      _radioGroup() {
        return findParentComponent(this, 'CRadioGroup');
      },
      model: {
        get() {
          return this._radioGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if(this._radioGroup) {
            this.dispatch('CRadioGroup', 'input', val);
          } else {
            this.$emit('input', val);
          }

          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      },
      isDisabled() {
        return this._radioGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          if(this._radioGroup) {
            this.dispatch('CRadioGroup', 'handleChange', this.model);
          }
          this.$emit('change', this.model);
        });
      }
    }
  }
</script>