// 自定义国际化配置
import { createI18n } from 'vue-i18n';
import { localStorage } from '../utils/storage';
import axios from 'axios';

/**
 * 获取当前系统使用语言字符串
 *
 * @returns zh-cn|en ...
 */
export const getLanguage = () => {
  // 本地缓存获取
  let language = localStorage.get('language');
  if (language) {
    return language;
  }
  // 浏览器使用语言
  language = navigator.language.toLowerCase();
  const locales = (window as any).locales as string[];
  const langId = locales.findIndex((x) => x.toLowerCase() == language);
  if (langId > -1) {
    return locales[langId];
  }
  return 'zh-cn';
};

const i18n = createI18n({
  globalInjection: true,
  legacy: false
});

export function loadLang(lang: string, call: () => void) {
  if (Object.keys(i18n.global.getLocaleMessage(lang)).length) {
    i18n.global.locale.value = lang;
    call();
    return;
  }
  axios.get('/lang/' + lang + '.json?t=' + new Date().getTime()).then((response) => {
    i18n.global.setLocaleMessage(lang, response.data);
    i18n.global.locale.value = lang;
    call();
  });
}

export default i18n;
export const { t } = i18n.global;
