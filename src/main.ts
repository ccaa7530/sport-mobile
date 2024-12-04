import { createApp } from 'vue'
import './style/style.scss'
import './style/vant.scss'
import './style/tailwind.css';
import router from './router'
import i18n from './lang/index'
import App from './App.vue'

import gitCommit from './version';
import axios from 'axios';

// 按需引入组件
import {
  NavBar,
  Button,
  Field,
  Checkbox,
  PullRefresh,
  Swipe,
  SwipeItem,
  Collapse,
  CollapseItem,
  Tabbar,
  TabbarItem,
  Cell,
  Icon
} from 'vant';

console.log('commitId:' + gitCommit);
axios.get('/version?t=' + new Date().getTime()).then((resp) => {
    console.log(resp.data.gitCommit);
  
    if (resp.data.gitCommit != gitCommit) {
      console.log(resp.data.gitCommit, '!=', gitCommit);
      const getNewHref = () => {
        let href = window.location.href;
        if (href.indexOf('?') == -1) {
          return href + '?t=' + new Date().getTime();
        }
        let tIdx = href.indexOf('?t=');
        if (tIdx > -1) {
          return href.substring(0, tIdx) + '?t=' + new Date().getTime();
        }
        tIdx = href.indexOf('&t=');
        if (tIdx == -1) {
          return href + '&t=' + new Date().getTime();
        }
        return href.substring(0, tIdx) + '&t=' + new Date().getTime();
      };
  
      let newHref = getNewHref();
  
      setTimeout(() => {
        window.location.href = newHref;
        window.location.reload();
      }, 3e3);
    }
  });
  
const app = createApp(App)
app
  .use(NavBar)
  .use(Button)
  .use(Field)
  .use(Checkbox)
  .use(PullRefresh)
  .use(Swipe)
  .use(SwipeItem)
  .use(Collapse)
  .use(CollapseItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Cell)
  .use(Icon)
app.use(router).use(i18n).mount('#app')
