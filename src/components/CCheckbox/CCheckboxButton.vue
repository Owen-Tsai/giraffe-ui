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
  import { getParentInstance, findParentComponent, appendColorClass } from '@/utilities/utilities'
  import Messenger from '@/utilities/messenger'

  export default {
    name: 'CCheckboxButton',
    componentNAme: 'CCheckboxButton',
    props: {
      disabled: Boolean,
      label: {},
      value: {},
      checked: Boolean,
      name: String, 
      color: String
    },
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-checkbox-btn');
        appendColorClass(this.color, classList);
        return classList;
      },
      isDisabled() {
        return this.isGroup ? 
          this._checkboxGroup.disabled || this.disabled : this.disabled;
      },
      isGroup() {
        if(findParentComponent(this, 'CCheckboxGroup')) {
          this._checkboxGroup = getParentInstance(this, 'CCheckboxGroup');
          return true;
        } else {
          this._checkboxGroup = null;
          return false;
        }
      },
      isChecked() {
        return this.model.includes(this.label);
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },

      model: {
        get() {
          return this.isGroup ? 
            this.store : 
              this.value !== undefined ? this.value : this.selfModel;
        },
        set(val) {
          if(this.isGroup) {
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
          if(this.isGroup) {
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