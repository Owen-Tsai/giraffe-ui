<template>
  <a
    v-if="to"
    :class="c"
    :href="link"
    :target="target"
    :is-title="title"
    @click="handleClick"
  >
    <slot></slot>
  </a>
  <span v-else :class="c" @click.stop="handleClick">
    <slot></slot>
  </span>
</template>

<script>
  import { findParentComponent } from '../../utilities/utilities';

  export default {
    name: 'CNavbarItem',
    data:() => ({
      active: false
    }),
    props: {
      to: [String, Object],
      target: {
        type: String,
        validator (value) {
            return ['_blank', '_self', '_parent', '_top'].includes(value);
        },
        default: '_self'
      },
      append: Boolean,
      paddingX: [String, Number],
      title: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-navbar-item');
        if(this.active) {
          classList.push('active');
        }
        return classList;
      },
      link() {
        if(typeof(this.to) !== 'string') {
          return null;
        }
        if(!this.to.includes('//') && this.$router) {
          const route = this.$router.resolve(this.to, this.$route, this.append);
          return route ? route.href : this.to;
        } else {
          return this.to;
        }
      },
    },
    methods: {
      handleClick() {
        
      },
      overridePadding(val) {
        console.log(`value is ${val}`);
        if(this.title) return;
        if(typeof(val) === 'string') {
          this.$el.style.padding = `0 ${val}`;
        } else {
          this.$el.style.padding = `0 ${val}px`;
        }
        console.log('excuted');
      }
    },
    mounted() {
      if(this.paddingX) {
        this.overridePadding(this.paddingX);
      }

      const parent = findParentComponent(this, 'CNavbar');

      if(parent && parent.paddingX) {
        this.overridePadding(parent.paddingX);
      }
    }
  }
</script>