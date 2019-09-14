<template>
  <a
    v-if="to"
    :class="c"
    :href="link"
    :target="target"
    @click="handleClick"
  >
    <slot></slot>
  </a>
  <span v-else :class="c" @click.stop="handleClick">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'CToolbarItem',
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
      append: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-toolbar-item');
        if(this.active && !this.flat) {
          classList.push('active');
        }
        if(this.flat) {
          classList.push('flat');
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
        
      }
    },
    mounted() {
      console.log(this.to, typeof(this.to), this.link)
    }
  }
</script>