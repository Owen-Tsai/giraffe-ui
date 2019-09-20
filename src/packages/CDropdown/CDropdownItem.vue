<template>
  <li :class="[...c, ...[
    {
      'is-disabled': disabled,
      'is-divided': divided
    }
  ]]" @click="handleClick">
    <c-icon v-if="icon">{{ icon }}</c-icon>
    <slot></slot>
  </li>
</template>

<script>
  import Messenger from '../../utilities/mixin.messenger';
  import CIcon from '../CIcon/CIcon';

  export default {
    name: 'CDropdownItem',
    componentName: 'CDropdownItem',
    components: {
      CIcon
    },
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
      }
    }
  }
</script>