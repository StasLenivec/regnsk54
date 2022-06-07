<template>
  <footer class="px-4 py-4 footer flex-column">
    <div class="border-bottom border-secondary mb-4">
      <div class="container d-flex text-secondary">
        <div class="d-flex justify-content-between row w-100 pb-lg-6 pb-md-6 pb-sm-2 pb-2 nav-footer">
          <NavItemFooter v-for="item in dataItems" :key="item.id" :data-item="item"></NavItemFooter>
        </div>
      </div>
    </div>
    <div class="text-center">
      <img src="../../static/img/brand/logo-footer.png" width="150" alt="Логотип" />
    </div>
  </footer>
</template>
<script>
"use strict";
import NavItemFooter from "~/components/custom-components/components/BaseNavCustom/NavItemFooter";
export default {
  name: "BaseNavCustomFooter",
  components: { NavItemFooter },
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
              url: "tel:+79513685528",
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
<style lang="sass"></style>
