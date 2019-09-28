/* eslint-disable no-console */
import CAlert from './packages/CAlert'
import CAvatar from './packages/CAvatar'
import CButton from './packages/CButton'
import CButtonGroup from './packages/CButtonGroup'
import CCard from './packages/CCard'
import CCheckbox from './packages/CCheckbox'
import CCheckboxGroup from './packages/CCheckboxGroup'
import CCheckboxButton from './packages/CCheckboxButton'
import CDropdown from './packages/CDropdown'
import CDropdownItem from './packages/CDropdownItem'
import CDropdownMenu from './packages/CDropdownMenu'
import CIcon from './packages/CIcon'
import CInput from './packages/CInput'
import CNavbar from './packages/CNavbar'
import CNavbarItem from './packages/CNavbarItem'
import CNavbarGroup from './packages/CNavbarGroup'
import CRadio from './packages/CRadio'
import CRadioGroup from './packages/CRadioGroup'
import CRadioButton from './packages/CRadioButton'
import CTag from './packages/CTag'
import CTextarea from './packages/CTextarea'
import CTooltip from './packages/CTooltip'

import config from '../package.json'

const version = config.version

const components = [
    CAlert,
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCheckbox,
    CCheckboxGroup,
    CCheckboxButton,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CIcon,
    CInput,
    CNavbar,
    CNavbarItem,
    CNavbarGroup,
    CRadio,
    CRadioGroup,
    CRadioButton,
    CTag,
    CTextarea,
    CTooltip
]

let GiraffeUI = {}

GiraffeUI.install = function(Vue) {
    console.info(`Welcome using Giraffe-UI, you are currenlty using v${version}`)
    components.forEach(guiComponent => {
        Vue.component(guiComponent.name, guiComponent);
    });
    console.log(`Giraffe-UI is loaded successfully with ${components.length} component(s)`)
}

const plugin = [
    GiraffeUI.install
]

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default GiraffeUI