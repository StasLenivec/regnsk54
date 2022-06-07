// import Vue from 'vue';
import { extend } from "vee-validate";
// eslint-disable-next-line import/namespace
import * as rules from "vee-validate/dist/rules";

export default function CustomRules(app) {
  extend("regex_pass_auth", {
    ...rules.regex,
  });
}
