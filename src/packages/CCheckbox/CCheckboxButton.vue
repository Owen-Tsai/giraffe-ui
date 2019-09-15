<template>
  <label
    :class="[...c, ...[
      {
        'is-disabled': isDisabled
      },
      {
        'is-checked': isChecked
      },
    ]]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
  >
    <input
      class="c-checkbox-btn-input"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :value="label"
      v-model="model"
      @change="handleChange">

    <span class="c-checkbox-btn-inner" v-if="$slots.default || label">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>

<script>
  import { findParentComponent, appendColorClass, appendSizeClass } from '../../utilities/utilities'
  import Messenger from '../../utilities/mixin.messenger'

  export default {
    name: 'CCheckboxButton',
    componentNAme: 'CCheckboxButton',
    props: {
      disabled: Boolean,
      label: {},
      value: {},
      checked: Boolean,
      name: String, 
      color: String,
    },
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-checkbox-btn');

        if(this._checkboxGroup && this._checkboxGroup.color) {
          appendColorClass(this._checkboxGroup.color, classList, 'color');
        } else {
          appendColorClass(this.color, classList);
        }

        this._checkboxGroup && appendSizeClass(this._checkboxGroup.size, classList);

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