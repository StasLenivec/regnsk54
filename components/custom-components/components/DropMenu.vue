<template>
  <div class="dropdawn-nav position-absolute w-100 col-12">
    <div class="container">
      <div class="d-flex justify-content-between row w-100 py-4">
        <NavItemHeader v-for="item in dataItems" :key="item.id" :data-item="item"></NavItemHeader>
      </div>
    </div>
  </div>
</template>
<script>
import NavItemHeader from "~/components/custom-components/components/BaseNavCustom/NavItemHeader";
export default {
  name: "DropMenu",
  components: { NavItemHeader },
  data() {
    return {
      dataItems: [
        {
          id: Math.floor(Math.random() * 10000),
          title: "компания",
          dataLinks: [
            {
              text: "О нас",
              url: "#",
            },
            {
              text: "Главная",
              url: "#",
            },
            {
              text: "Список юридических услуг",
              url: "#",
            },
            {
              text: "Список бухгалтерских услуг",
              url: "#",
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "О сервисе",
          dataLinks: [
            {
              text: "Ликвидация бизнеса",
              url: "#",
            },
            {
              text: "Регистрация бизнеса",
              url: "#",
            },
            {
              text: "Бухгалтерия для бизнеса",
              url: "#",
            },
            {
              text: "Купить документ",
              url: "#",
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "контакты",
          dataLinks: [
            {
              text: "+7 (951) 368 5528",
              type: "outsideLink",
              url: "tel:+7(951)3685528",
            },
            {
              text: "r-nsk@list.ru",
              type: "outsideLink",
              url: "mailto:r-nsk@list.ru",
            },
            {
              text: "г. Новосибирск, ул. Орджоникидзе, 47 <br />офис 201",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="sass">
@media screen and (max-width: 768px)
  .nav-menu
    display: none !important
#nav-icon3
  z-index: 999
.dropdawn-nav
  right: 0
  top: 0
  background-color: rgb(250, 250, 250, 1)
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6)
  z-index: 998
  h3
    color: #70B6EA
</style>
