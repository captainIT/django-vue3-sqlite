import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";

import "./assets/main.css";
import './assets/index.css'
import { createI18n } from "vue-i18n";
import { Language } from "@/model/enum";
import en from "./language/en";
import zh from "./language/zh";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const i18n = createI18n({
  locale: (function () {
    let lang = localStorage.getItem("lang");
    if (lang) {
      return lang;
    } else {
      localStorage.setItem("lang", Language.zh);
    }
    return Language.zh;
  })(),
  globalInjection: true,
  messages: { en, zh },
});
app.use(i18n);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);


app.mount("#app");
