import './assets/all.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'vue-loading-overlay/dist/css/index.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import Loading from 'vue-loading-overlay';

import { currency, date } from '@/methods/filter';

import App from './App.vue';
import router from './router';

router.afterEach(() => {
  window.scrollTo(0, 0);
});

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.config.globalProperties.$filter = {
  currency,
  date,
};

app.use(createPinia());
app.use(router);
app.use(BootstrapIconsPlugin);

app.component('VueLoading', Loading);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
