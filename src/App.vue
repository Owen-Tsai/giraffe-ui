<template>
  <div id="app">
    <div class="dropdowns">
      <c-dropdown trigger="click" placement="bottom" @click:item="logParam" @click:outside="logStatic">
        <c-button slot="activator">下拉菜单</c-button>
        <c-dropdown-menu :max-width="100">
          <c-dropdown-item icon="fas fa-camera">第一个选项</c-dropdown-item>
          <c-dropdown-item>第二个选项</c-dropdown-item>
          <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
        </c-dropdown-menu>
      </c-dropdown>
    </div>
    <div class="toolbars">
      <c-toolbar color="primary" fixed>
        <c-toolbar-item title to="/">Title</c-toolbar-item>
        <div class="c-flex-grow"></div>
        <c-toolbar-group>
          <c-toolbar-item to="https://www.baidu.com">link 1</c-toolbar-item>
          <c-toolbar-item to="https://www.baidu.com">link 2</c-toolbar-item>
          <c-toolbar-item>text</c-toolbar-item>
          <c-toolbar-item>
            <c-button circle icon="fas fa-camera" color="primary" flat></c-button>
          </c-toolbar-item>
          <c-toolbar-item>
            <c-dropdown trigger="click" placement="bottom-start">
              <c-button color="info" slot="activator" icon="giraffe giraffe-expand-more">button</c-button>
              <c-dropdown-menu :max-width="100">
                <c-dropdown-item>第一个选项</c-dropdown-item>
                <c-dropdown-item>第二个选项</c-dropdown-item>
                <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
              </c-dropdown-menu>
            </c-dropdown>
          </c-toolbar-item>
        </c-toolbar-group>
          <c-toolbar-item>
            <c-input prefix-icon="fas fa-search" width="250"></c-input>
          </c-toolbar-item>
        
      </c-toolbar>
    </div>
  </div>
</template>

<script>
  import CButton from './packages/CButton/Button'
  import CButtonGroup from './packages/CButton/ButtonGroup'
  import CCard from './packages/CCard/CCard'
  import CAlert from './packages/CAlert/CAlert'
  import CRadio from './packages/CRadio/CRadio'
  import CRadioGroup from './packages/CRadio/CRadioGroup'
  import CRadioBtn from './packages/CRadio/CRadioButton'
  import CCheckbox from './packages/CCheckbox/CCheckbox'
  import CCheckboxGroup from './packages/CCheckbox/CCheckboxGroup'
  import CCheckboxBtn from './packages/CCheckbox/CCheckboxButton'
  import CInput from './packages/CInput/CInput'
  import CTextarea from './packages/CTextarea/CTextarea'
  import CDropdownMenu from './packages/CDropdown/CDropdownMenu'
  import CDropdownItem from './packages/CDropdown/CDropdownItem'
  import CDropdown from './packages/CDropdown/CDropdown'
  import CTooltip from './packages/CTooltip/CTooltip'
  import CToolbar from './packages/CToolbar/CToolbar'
  import CToolbarGroup from './packages/CToolbar/CToolbarGroup'
  import CToolbarItem from './packages/CToolbar/CToolbarItem'
  import CIcon from './packages/CIcon/CIcon'
  // import CDialog from './packages/CDialog'

  export default {
    name: 'app',
    data() {
      return {
        v1: true,
        v2: true, 
        v3: true,
        radio: '',
        e: [],
        radioGroup: '',
        checkboxGroup: [],
        dialog: false,
        str: 'text'
      }
    },
    components: {
      CButton,
      CButtonGroup,
      CCard,
      CAlert,
      CRadio,
      CRadioGroup,
      CRadioBtn,
      CCheckbox,
      CCheckboxGroup,
      CCheckboxBtn,
      CInput,
      CTextarea,
      CDropdownItem,
      CDropdownMenu,
      CDropdown,
      CTooltip,
      CToolbarItem,
      CToolbar,
      CToolbarGroup,
      CIcon
    },
    methods: {
      logStatic() {
        console.log(123);
      },
      logParam(param) {
        console.log(param);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdowns {
    margin: 20px;
  }
  .tooltips {
    margin-bottom: 200px;
    margin-left: 200px;
  }
  .toolbars {
    margin-bottom: 200px;
  }
  #app {
    padding-top: 64px;
  }
</style>
