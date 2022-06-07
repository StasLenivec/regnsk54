// Polyfills for js features used in the Dashboard but not supported in some browsers (mainly IE)

import "@/polyfills";

import Vue from "vue";

import Vuex from "vuex";

// Element-Ui setting

import Element from "element-ui";

import Transitions from "vue2-transitions";

import "./globalDirectives";

import "./globalComponents";

// Vee-validate settings

import { extend, configure, localeChanged } from "vee-validate";

// eslint-disable-next-line import/namespace

import * as rules from "vee-validate/dist/rules";

import CustomRules from "../vee-validate";

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
  });
});

Vue.use(Vuex);

Vue.use(Transitions);

export default function ({ app }) {
  configure({
    classes: {
      valid: "is-valid",

      invalid: "is-invalid",

      dirty: ["is-dirty", "is-dirty"], // multiple classes per flag!
    },

    defaultMessage: (field, values) => {
      // console.log('defaultMessage', field, values);

      values._field_ = field !== "{field}" ? app.i18n.t(`fields.${field}`) : "";

      return app.i18n.t(`validation.${values._rule_}`, values);
    },
  });

  Vue.use(Element, { i18n: (key, value) => app.i18n.t(key, value) });

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    localeChanged();
  };

  // app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {};

  CustomRules(app);
}
