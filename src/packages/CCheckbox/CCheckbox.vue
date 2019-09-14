<template>
  <label :class="[...c, ...[
    {
      'is-disabled': isDisabled
    },
    {
      'is-checked': isChecked
    }
  ]]" role="checkbox">
    <span class="c-checkbox-input">
      <span :class="['c-checkbox-inner', ...[
        {
          'is-checked': isChecked
        }
      ]]"></span>
      <input 
        ref="checkbox"
        type="checkbox"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
      >
    </span>
    <span class="c-checkbox-label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
  import { appendColorClass, findParentComponent } from "../../utilities/utilities";
  import Messenger from '../../utilities/mixin.messenger';

  export default {
    name: 'CCheckbox',
    componentName: 'CCheckbox',
    data:() => ({
      selfModel: false,
    }),
    mixins: [
      Messenger
    ],
    props: {
      disabled: Boolean,
      label: {},
      value: {},
      checked: Boolean,
      name: String, 
      color: String
    },

    computed: {
      c() {
        let classList = Array.of('c-checkbox');
        appendColorClass(this.color, classList);
        return classList;
      },
      isDisabled() {
        return this._checkboxGroup ? 
          this._checkboxGroup.disabled || this.disabled : this.disabled;
      },
      _checkboxGroup() {
        return findParentComponent(this, 'CCheckboxGroup');
      },
      isChecked() {
        return this.model.includes(this.label);
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },

      model: {
        get() {
          return this._checkboxGroup ? 
            this.store : 
              this.value !== undefined ? this.value : this.selfModel;
        },
        set(val) {
          if(this._checkboxGroup) {
            this.dispatch('CCheckboxGroup', 'input', val);
          } else {
            this.$emit('input', val);
          }
        }
      }
    },
    methods: {
      addToStore() {
        if(Array.isArray(this.model) && !this.model.includes(this.label)) {
          this.model.push(this.label)
        }
      },
      handleChange(event) {
        this.$nextTick(() => {
          if(this._checkboxGroup) {
            this.dispatch('CCheckboxGroup', 'change', this._checkboxGroup.value)
          }
          this.$emit('change', event)
        });
      }
    },
    created() {
      if(this.checked) {
        this.addToStore();
      }
    }
  }
</script>