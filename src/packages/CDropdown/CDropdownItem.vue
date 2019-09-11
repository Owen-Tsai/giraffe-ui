<template>
  <li :class="[...c, ...[
    {
      'is-disabled': isDisabled,
      'is-divided': isDivided
    }
  ]]" @click="handleClick">
    <i class="material-icons" v-if="icon">{{ icon }}</i>
    <slot></slot>
  </li>
</template>

<script>
  import Messenger from "../../utilities/messenger";

  export default {
    name: 'CDropdownItem',
    componentName: 'CDropdownItem',
    props: {
      isDisabled: Boolean,
      isDivided: Boolean,
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
        this.dispatch('CDropdown', 'item-click', this);
      }
    }
  }
</script>