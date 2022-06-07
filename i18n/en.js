/* eslint-disable */
import en from "vee-validate/dist/locale/en.json";
import enLocale from "element-ui/lib/locale/lang/en";

export default {
  //****************BASE TEXT INTERFACE*******************//
  ...enLocale,

  //VALIDATION
  validation: {
    ...en.messages,
  },
};
