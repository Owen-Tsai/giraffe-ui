<template>
  <div id="app">
    <div class="dropdowns">
      <c-dropdown trigger="click" placement="bottom" @item-click="logParam">
        <c-button slot="activator">下拉菜单</c-button>
        <c-dropdown-menu :max-width="100">
          <c-dropdown-item icon="fas fa-camera">第一个选项</c-dropdown-item>
          <c-dropdown-item>第二个选项</c-dropdown-item>
          <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
        </c-dropdown-menu>
      </c-dropdown>
    </div>
    <div class="toolbars">
      <c-toolbar>
        <c-toolbar-item title to="/">Title</c-toolbar-item>
        
          <c-toolbar-item to="https://www.baidu.com">link 2</c-toolbar-item>
          <c-toolbar-item>link 3</c-toolbar-item>
          <c-toolbar-item>
            <c-dropdown trigger="click" placement="bottom-start">
              <span slot="activator">dropdown</span>
              <c-dropdown-menu :max-width="100">
                <c-dropdown-item>第一个选项</c-dropdown-item>
                <c-dropdown-item>第二个选项</c-dropdown-item>
                <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
              </c-dropdown-menu>
            </c-dropdown>
          </c-toolbar-item>
          
          <c-toolbar-item>
            <c-input prefix-icon="search" width="250"></c-input>
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
  
</style>
