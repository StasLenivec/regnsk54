/* eslint-disable */
import ru from "vee-validate/dist/locale/ru.json"
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'

export default {
  //****************BASE TEXT INTERFACE*******************//
  ...ruLocale,

//VALIDATION
  validation: {
    ...ru.messages,
  },
}