import '../../styles/cui.scss';
import 'material-design-icons/iconfont/material-icons.css';
import '../../styles/common/transtion.scss';
import './styles/override.scss';

import CAlert from '../../packages/CAlert/CAlert';
import CButton from '../../packages/CButton/Button';
import CButtonGroup from '../../packages/CButton/ButtonGroup';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('c-alert', CAlert);
  Vue.component('c-button', CButton);
  Vue.component('c-button-group', CButtonGroup);
}