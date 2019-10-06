<template>
  <li :class="[...c, ...[
    {
      'is-disabled': disabled,
      'is-divided': divided
    }
  ]]" @click="handleClick">
    <span class="item-content">
      <i v-if="icon" class="material-icons item-icon">{{ icon }}</i>
      <slot></slot>
    </span>
  </li>
</template>

<script>
  import Messenger from '../../utilities/mixin.messenger';

  export default {
    name: 'CDropdownItem',
    componentName: 'CDropdownItem',
    props: {
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-dropdown-item');
        return classList;
      }
    },
    methods: {
      handleClick() {
        this.dispatch('CDropdown', 'click:item', this);
        this.$emit('click', this);
      }
    }
  }
</script>