<template>
  <div id="meta-landing">
    <div class="first-scrin">
      <div class="container">
        <div class="row justify-content-between align-items-center h-100vh text-center text-md-left">
          <div class="col-lg-5 col-md-7 col-12">
            <h1 class="text-uppercase mb-4">Сопровождение организаций в Новосибирске</h1>
            <p class="subtitle my-1 mb-2">
              - ликвидация, регистрация, реорганизация юридических лиц во всех регионах России
            </p>
            <p class="subtitle my-1 mb-2">
              - составление всех документов для оформления <br />
              ООО, ИП и других организационно-правовых форм
            </p>
            <p class="subtitle my-1">- составление и сдача бухгалтерской отчетности</p>
            <p class="font-weight-bold mt-5 mb-3">Оставьте заявку на бесплатную консультацию</p>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start">
              <input
                v-model="input"
                class="px-3 mb-3 mb-md-0 input input_red-border"
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                style="border-color: #f87777"
              />
              <el-button round class="text-uppercase px-4 el-button_gradient-animate" @click="$emit('submit')">
                консультация
              </el-button>
            </div>
          </div>

          <div class="d-none d-md-flex col-5">
            <div class="w-100 h-100 d-flex">
              <img class="w-100 img-work" src="../../static/img/brand/work.svg" alt="" />
              <img class="position-absolute img-ball1" src="../../static/img/brand/ball1.svg" alt="" />
              <img class="position-absolute img-ball2" src="../../static/img/brand/ball2.svg" alt="" />
              <img class="position-absolute img-ball3" src="../../static/img/brand/ball3.svg" alt="" />
              <img class="position-absolute img-ball4" src="../../static/img/brand/ball4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="col-12 mb-5 text-center">
        <div class="title title_servece-cards text-uppercase m-auto">Наши услуги</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div
          v-for="item in dataCards"
          :key="item.id"
          class="col-md-6 col-sm-12 col-12 d-flex w-100 mb-4"
          :style="{ justifyContent: item.justify || 'flex-center' }"
        >
          <CardService :data-card="item"></CardService>
        </div>
      </div>
      <card-form class="card-form_top" @submit="submitService">
        <template #form></template>
      </card-form>
      <p class="w-100 card-form-sub-text">
        У нас Вы можете заказать необходимые документы для решения задач вашего бизнеса. Просто заполните форму ниже и
        мы тут же приступим к работе
      </p>
    </div>
    <div id="two" class="container pb-4">
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-12 col-md-6 d-flex flex-column w-100 mx-3 mb-3 mb-sm-3 mb-md-0 align-items-start p-4 position-relative buy-document"
        >
          <h2 class="text-uppercase mb-3">Документы</h2>
          <el-checkbox-group v-model="checkList" class="d-flex flex-column pb-5">
            <el-checkbox v-for="item in dataDocument" :key="item.id" :label="item">
              {{ item.text }}
            </el-checkbox>
          </el-checkbox-group>

          <span class="position-absolute pb-4">* Выбрать нужное</span>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 d-flex flex-column w-100 mx-3 align-items-start p-4 position-relative buy-document"
        >
          <h2 class="text-uppercase mb-3">Организационно-правовая форма</h2>
          <el-radio-group v-model="radio" class="d-flex flex-column pb-5">
            <el-radio v-for="(item, index) in dataOrganization" :key="index" :label="index">
              {{ item.text }}
            </el-radio>
          </el-radio-group>
          <span class="position-absolute pb-4">* Выбрать нужное</span>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center my-4">
        <input
          v-model="input"
          class="px-3 mb-3 input input_order-consult"
          type="tel"
          name="phone"
          placeholder="Телефон"
        />
        <el-button type="danger" round class="text-uppercase m-auto el-button_order-consult" @click="$emit('submit')">
          Заказать консультацию
        </el-button>
      </div>
    </div>
    <div class="container">
      <div class="col-12 col-sm-12 col-md-7 col-lg-4 m-auto text-center">
        <div class="title text-uppercase py-1 px-3 m-auto" style="max-width: 340px">Почему выбирают нас</div>
      </div>
      <div>
        <el-row class="my-5 row justify-content-center">
          <el-col class="d-flex flex-wrap">
            <el-card
              v-for="item in dataPresentation"
              :key="item.id"
              shadow="never"
              class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4"
            >
              <card-presentation>
                <template #iconPresentation>
                  <img :src="require('../../static/img/icons/cards/' + item.img)" class="mb-2" />
                </template>
                <template #titlePresentation>
                  <h3 class="text-uppercase">{{ item.title }}</h3>
                </template>
                <template #textPresentation>
                  <p>{{ item.text }}</p>
                </template>
              </card-presentation>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="img-presentation d-none d-md-block">
        <el-row class="my-5 row justify-content-center">
          <el-card v-for="item in dataPicture" :key="item.id" shadow="never" class="col-4 px-0 rounded-0">
            <card-presentation>
              <template #imagePresentation>
                <img :src="require('../../static/img/theme/' + item.pictureUrl)" />
              </template>
            </card-presentation>
          </el-card>
        </el-row>
      </div>
    </div>
    <div class="container">
      <div class="col-12 col-sm-12 col-md-7 col-lg-4 m-auto text-center">
        <div class="title text-uppercase py-1 px-3 m-auto" style="max-width: 280px">Кому мы полезны</div>
      </div>
      <el-row class="my-5 row justify-content-center">
        <el-col class="d-flex flex-wrap">
          <el-card
            v-for="item in dataGroup"
            :key="item.id"
            shadow="never"
            class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4"
          >
            <card-presentation>
              <template #iconPresentation>
                <img :src="require('../../static/img/icons/cards/' + item.img)" class="mb-2" />
              </template>
              <template #titlePresentation>
                <h3 class="text-uppercase">{{ item.title }}</h3>
              </template>
              <template #textPresentation>
                <p>{{ item.text }}</p>
              </template>
            </card-presentation>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <div class="col-12 col-sm-12 col-md-7 col-lg-4 m-auto text-center">
        <div class="title text-uppercase py-1 px-3 m-auto" style="max-width: 245px">Наши партнёры</div>
      </div>
      <div class="img-logo-partner">
        <el-row class="mt-5 row justify-content-center">
          <el-col class="d-flex flex-wrap align-items-center">
            <el-card v-for="item in dataPartners" :key="item.id" shadow="never" class="col-6 col-lg-4 px-0">
              <card-presentation>
                <template #imagePresentation>
                  <img :src="require('../../static/img/brand/' + item.pictureUrl)" />
                </template>
              </card-presentation>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="d-flex flex-column align-items-center mb-6">
        <input v-model="input" class="px-3 mb-3 input" type="tel" name="phone" placeholder="Телефон" />
        <el-button type="danger" round class="text-uppercase m-auto" @click="$emit('submit')"> Открыть счет </el-button>
      </div>
    </div>
    <div class="container">
      <div class="col-12 col-sm-12 col-md-8 col-lg-5 m-auto text-center">
        <div class="title text-uppercase py-1 px-3 m-auto" style="max-width: 400px">Наши довольные клиенты</div>
      </div>
      <Slider class="my-5"></Slider>
    </div>
    <div class="row justify-content-center m-0 mb-6 w-100 flex-column flex-lg-row">
      <Application-Contact class="col-12 col-lg-4 p-0">
        <template #ApplicationContact></template>
      </Application-Contact>
      <Application-FeetBack class="col-12 col-lg-4 p-0 order-3 order-lg-2">
        <template #ApplicationFeetBack></template>
      </Application-FeetBack>
      <Application-Map class="col-12 col-lg-4 p-0 order-2 order-lg-3">
        <template #ApplicationMap></template>
      </Application-Map>
    </div>
  </div>
</template>

<script>
import CardService from "~/components/custom-components/components/CardService";
import CardForm from "~/components/custom-components/components/CardForm";
import CardPresentation from "~/components/custom-components/components/CardPresentation";
import Slider from "~/components/custom-components/components/Slider";
import ApplicationContact from "~/components/custom-components/components/Application/ApplicationContact";
import ApplicationFeetBack from "~/components/custom-components/components/Application/ApplicationFeetBack";
import ApplicationMap from "~/components/custom-components/components/Application/ApplicationMap";
export default {
  name: "HomePage",
  components: {
    CardService,
    CardForm,
    CardPresentation,
    Slider,
    ApplicationContact,
    ApplicationFeetBack,
    ApplicationMap,
  },
  emits: ["submit"],
  data() {
    return {
      input: "",
      radio: 0,
      checkList: [],
      dataPartners: [
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "psb.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "domrf.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "sovkombank.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "logo-bank-otkrytie.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "Ak_Bars_Bank.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "binbank.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "rosbank.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "ubrr.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "svyazbank.png",
        },
      ],
      dataGroup: [
        {
          id: Math.floor(Math.random() * 10000),
          title: "Торговля",
          text: "оптовые компании, компании розничной торговли, интернет-магазины, аптеки, импорт/экспорт",
          img: "Group-1.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Строительство",
          text: "ОСМД, ремонтные компании, архитектурные бюро, строительные компании",
          img: "Group-2.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Логистика",
          text: "транспортные компании, складские операторы, экспедиторы, таможенные брокеры",
          img: "Group-3.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Услуги",
          text: "бюро переводов, рекрутеры, консультанты, клининговые компании, стоматологии, арендодатели, школы",
          img: "Group-4.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Horeca",
          text: "рестораны, кофейни, пабы, бары, кафе, отели, хостелы",
          img: "Group-6.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Производство",
          text: "полиграфия, пищевая промышленность, агропроизводство, одежда, мебель, строительные материалы",
          img: "Group-7.png",
        },
      ],
      dataPicture: [
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk1.jpg",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk2.jpg",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk3.jpg",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk4.jpg",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk5.jpg",
        },
        {
          id: Math.floor(Math.random() * 10000),
          pictureUrl: "regnsk6.jpg",
        },
      ],
      dataPresentation: [
        {
          id: Math.floor(Math.random() * 10000),
          title: "Решения, которые уже работают",
          text: "Вы получите решения, которые уже работают в других компаниях",
          img: "money.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Экономия времени",
          text: "Юристы готовят документы и выполняют все операции по доверенности от Вас. Не тратьте больше ни секунды на рутину",
          img: "clock.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Результат, а не процесс",
          text: "Мы гарантируем, что, приняв проект в работу, мы доведем его до согласованного с Вами результата, с учетом всех ограничений",
          img: "wishlist.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Конфиденциальность",
          text: "Ваша информация на 100% защищена. Мы не аутсорсим 3-м лицам процессы наших Клиентов",
          img: "key.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Команда",
          text: "Качественная работа специалистов. Ни один телефонный звонок не останется без ответа",
          img: "crowdfunding.png",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Отношение к клиенту",
          text: "Индивидуальный подход к каждому клиенту и его проблемам",
          img: "connection.png",
        },
      ],
      dataOrganization: [
        {
          id: Math.floor(Math.random() * 10000),
          text: "ООО",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "ИП",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "АО, ПАО",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Фонд",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Кооператив",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Ассоциация",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Общественная организация",
        },
      ],
      dataDocument: [
        {
          id: Math.floor(Math.random() * 10000),
          text: "Устав",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Приказ",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Решение",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Протокол",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "Учредительный договор",
        },
      ],
      dataFormService: {
        background: "#F8ECEC",
        name: "",
        phone: "",
        email: "",
      },
      dataCards: [
        {
          id: Math.floor(Math.random() * 10000),
          background: "#F8ECEC",
          justify: "flex-end",
          cardTitle: "Ликвидация организации",
          cardText: [
            {
              id: Math.floor(Math.random() * 10000),
              text: "Добровольная ликвидация ООО, ИП",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Ликвидация с участием иностранных ЮЛ",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Реорганизация (присоединение, слияние, выделение, преобразование)",
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 10000),
          background: "#EBECF6",
          justify: "flex-start",
          cardTitle: "Регистрация организации",
          cardText: [
            {
              id: Math.floor(Math.random() * 10000),
              text: "Регистрация бизнеса (ООО, АО)",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Регистрация изменений в бизнесе",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Регистрация некоммерческих организаций (кооператив, АНО, фонд, ассоцияция, ТСН, общественные объединения)",
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 10000),
          background: "#EBECF6",
          justify: "flex-end",
          cardTitle: "Электронно-цифровая подпись",
          cardText: [
            {
              id: Math.floor(Math.random() * 10000),
              text: "ЭП для физических лиц",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Сертификат для портала ФНС ЮЛ/ИП",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Сертификат для порталов гос. Услуг",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Сертификат для Росреестра",
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 10000),
          background: "#F8ECEC",
          justify: "flex-start",
          cardTitle: "Бухгалтерские услуги",
          cardText: [
            {
              id: Math.floor(Math.random() * 10000),
              text: "Ведение бухгалтерского учета по регистрам бухгалтерского учета в систеие 1С",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Составление бухгалтерской отчетности, налоговых деклараций",
            },
            {
              id: Math.floor(Math.random() * 10000),
              text: "Услуги по расчету заработной платы",
            },
          ],
        },
      ],
    };
  },
  // watch: {
  //   checkList: {
  //     handler(newValue, oldValue) {
  //       console.log(newValue);
  //     },
  //     deep: true,
  //   },
  // },

  methods: {
    submitService() {
      console.log("data", this.dataFormService);
    },
  },
};
</script>
<style lang="sass">
#meta-landing
  color: #1A1A1A

.first-scrin
  background: url(../../static/img/brand/display.svg)
  background-position: bottom center
  background-size: cover

  h1
    font-size: 24px
    line-height: 1.2

.title
  font-size: 24px
  line-height: 1.2

  &_servece-cards
    width: 180px

  &::after
    content: ""
    display: block
    width: 60px
    height: 6px
    background: #70B6EA
    position: absolute
    top: 100%
    border-radius: 3px

.subtitle
  font-size: 16px
  line-height: 1.2
  font-weight: 500

.img-work
  z-index: 10

.img-ball1
  width: 8%

.img-ball2
  width: 5%

.img-ball3
  width: 6%

.img-ball4
  width: 3%

.img-ball1
  width: 8%
  position: absolute
  top:20px
  left:0
  -webkit-animation: img-ball1 40s linear infinite
  animation: img-ball1 40s linear infinite

@-webkit-keyframes img-ball1
  from
    margin-left: 0
    z-index: 15
  50%
    margin-left:84%
  99.99%
    margin-left:0%
    z-index: 5
  to
    margin-left:0%

@keyframes img-ball1
  from
    margin-left: 0
    z-index: 15
  50%
    margin-left:84%
  99.99%
    margin-left:0%
    z-index: 5
  to
    margin-left:0%


.img-ball2
  width: 5%
  position: absolute
  top:10px
  right: 8%
  -webkit-animation: img-ball2 40s linear infinite
  animation: img-ball2 40s linear infinite

@-webkit-keyframes img-ball2
  from
    margin-right: 0%
    z-index: 5
  50%
    margin-right: 95%
  99.99%
    margin-left: 6%
    z-index: 15
  to
    margin-right: 0%

@keyframes img-ball2
  from
    margin-right: 0%
    z-index: 5
  50%
    margin-right: 95%
  99.99%
    margin-left: 6%
    z-index: 15
  to
    margin-right: 0%


.img-ball3
  width: 6%
  position: absolute
  top: 80px
  left: 10px
  -webkit-animation: img-ball3 40s linear infinite
  animation: img-ball3 40s linear infinite

@-webkit-keyframes img-ball3
  from
    margin-left: 0
    z-index: 15
  50%
    margin-left: 40%
    top: -20px
  99.99%
    margin-left: 0%
    top: 80px
    z-index: 5
  to
    margin-left: 0%
    top: 80px

@keyframes img-ball3
  from
    margin-left: 0
    z-index: 15
  50%
    margin-left:40%
    top:-20px
  99.99%
    margin-left: 0%
    top: 80px
    z-index: 5
  to
    margin-left: 0%
    top: 80px

.img-ball4
  width: 3%
  position: absolute
  top: 0
  left: 40%
  z-index: 14
  -webkit-animation: img-ball4 40s linear infinite
  animation: img-ball4 40s linear infinite

@-webkit-keyframes img-ball4
  from
    top:0
    left:40%
    z-index: 6
  50%
    margin-left:45%
    top:30%
    z-index: 11
  99.99%
    left:40%
    top:0
  to
    left: 40%
    top: 0

@keyframes img-ball4
  from
    top: 0
    left: 40%
    z-index: 6
  50%
    margin-left:-45%
    top: 30%
    z-index: 11
  99.99%
    left: 40%
    top: 0
  to
    left: 40%
    top: 0

.card-form
  &_top
    max-width: 400px

.card-form-sub-text
  max-width: 600px
  margin: 50px auto
  font-size: 20px
  font-weight: 400
  line-height: 1.5
  color: #1a1a1a

.buy-document
  max-width: 300px
  border: 2px solid #70B6EA
  border-radius: 10px

  span
    bottom: 0

  h2
    font-size: 16px
    font-weight: 500
    line-height: 1.2

.el-checkbox
  color: #1A1A1A

  .el-checkbox__input
    .el-checkbox__inner
      width: 20px
      height: 20px
      border-color: #000
      border-radius: 3px

      &::after
        height: 10px
        left: 6px
        border: 3px solid #fff
        border-left: 0
        border-top: 0

.el-checkbox__input.is-checked
  .el-checkbox__inner
    background-color: #007bff !important

.el-radio__inner
  width: 20px
  height: 20px
  border-color: #6c757d

  &::after
    width: 12px
    height: 12px
    background-color: #007bff

.el-radio__input.is-checked
  .el-radio__inner
    background-color: #fff

.img-presentation
  .el-card__body
    padding: 1px !important

    img
      width: 100%
      height: 100%

.img-logo-partner
  .el-card__body
    margin-bottom: 30px
    text-align: center

  img
    width: 50%
</style>
