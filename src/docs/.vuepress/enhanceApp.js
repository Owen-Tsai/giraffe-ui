import '../../styles/cui.scss';
import 'material-design-icons/iconfont/material-icons.css';
import '../../styles/common/transtion.scss';
import './styles/override.scss';

import CAlert from '../../packages/CAlert/CAlert';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('c-alert', CAlert);
}