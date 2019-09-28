import '../../src/styles/cui.scss';
import '../../src/styles/custom-colors.scss';
import '../../src/assets/cicons/iconfont.css';
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '../../src/styles/common/transtion.scss';
import './styles/override.scss';

import { clickOutside as directive } from '../../src/utilities/clickOutside';

import CAlert from '../../src/packages/CAlert';
import CButton from '../../src/packages/CButton';
import CButtonGroup from '../../src/packages/CButtonGroup';
import CCard from '../../src/packages/CCard/CCard';
import CRadio from '../../src/packages/CRadio';
import CRadioGroup from '../../src/packages/CRadioGroup';
import CRadioBtn from '../../src/packages/CRadioButton';
import CCheckbox from '../../src/packages/CCheckbox';
import CCheckboxGroup from '../../src/packages/CCheckboxGroup';
import CCheckboxBtn from '../../src/packages/CCheckboxButton';
import CInput from '../../src/packages/CInput';
import CTextarea from '../../src/packages/CTextarea';
import CIcon from '../../src/packages/CIcon';
import CDropdownMenu from '../../src/packages/CDropdownMenu';
import CDropdownItem from '../../src/packages/CDropdownItem';
import CDropdown from '../../src/packages/CDropdown';
import CTooltip from '../../src/packages/CTooltip';
import CTag from '../../src/packages/CTag';
import CAvatar from '../../src/packages/CAvatar';
import CNavbar from '../../src/packages/CNavbar';
import CNavbarGroup from '../../src/packages/CNavbarGroup';
import CNavbarItem from '../../src/packages/CNavbarItem';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('c-alert', CAlert);
  Vue.component('c-button', CButton);
  Vue.component('c-button-group', CButtonGroup);
  Vue.component('c-card', CCard);
  Vue.component('c-checkbox', CCheckbox);
  Vue.component('c-checkbox-button', CCheckboxBtn);
  Vue.component('c-checkbox-group', CCheckboxGroup);
  Vue.component('c-input', CInput);
  Vue.component('c-radio', CRadio);
  Vue.component('c-radio-group', CRadioGroup);
  Vue.component('c-radio-button', CRadioBtn);
  Vue.component('c-textarea', CTextarea);
  Vue.component('c-icon', CIcon);
  Vue.component('c-tooltip', CTooltip);
  Vue.component('c-dropdown', CDropdown);
  Vue.component('c-dropdown-menu', CDropdownMenu);
  Vue.component('c-dropdown-item', CDropdownItem);
  Vue.component('c-tag', CTag);
  Vue.component('c-avatar', CAvatar);
  Vue.component('c-navbar', CNavbar);
  Vue.component('c-navbar-group', CNavbarGroup);
  Vue.component('c-navbar-item', CNavbarItem);
}