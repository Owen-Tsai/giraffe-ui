<template>
  <div :class="c" :style="[style, customStyle]">
    <span v-if="!this.isImage && !this.icon">{{ userInitial }}</span>
    <c-icon v-if="!this.isImage && this.icon">{{ icon }}</c-icon>
  </div>
</template> 

<script>
  import { appendColorClass } from '../../utilities/utilities';
  import CIcon from '../CIcon/CIcon';

  export default {
    name: 'CAvatar',
    components: {
      CIcon
    },
    data: () => ({

    }),
    props: {
      username: String,
      initials: String,
      icon: String,
      customStyle: Object,
      size: {
        type: Number,
        default: 50
      },
      src: String,
      circle: {
        type: Boolean,
        default: true
      },
      color: String,
      inline: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-avatar');
        appendColorClass(this.color, classList);
        if(!this.isImage) {
          classList.push('pure-text');
        }
        return classList;
      },
      userInitial() {
        if(!this.isImage) {
          const i = this.initials || this.getInitial(this.username);
          return i;
        } else {
          return '';
        }
      },
      isImage() {
        return this.src ? true : false;
      },
      style() {
        const style = {
          display: this.inline ? 'inline-flex' : 'flex',
          width: `${this.size}px`,
          height: `${this.size}px`,
          borderRadius: this.circle ? '50%' : 0,
          lineHeight: `${this.size}px`,
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }

        const backgroundImg = {
          background: `transparent url(${this.src}) no-repeat scroll 0% 0% / ${this.size}px ${this.size}px content-box border-box`
        }
        
        if(this.isImage) {
          Object.assign(style, backgroundImg);
        }

        return style;
      }
    },
    methods: {
      getInitial(username) {
        let parts = username.split(/[ -]/);
        let initials = '';
        for (let i = 0; i < parts.length; i++) {
          initials += parts[i].charAt(0);
        }

        initials = initials.substr(0, 3).toUpperCase();
        return initials;
      },
    },
  }
</script>