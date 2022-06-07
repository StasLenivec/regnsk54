<template>
  <div>
    <client-only>
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="item in dataSlides"
          :key="item.id"
          class="d-flex justify-content-end justify-content-lg-center mb-6"
        >
          <div class="d-flex flex-column flex-lg-row justify-content-lg-center align-items-center">
            <div class="d-flex mb-3 px-3">
              <div class="swiper-slide-photo"></div>
            </div>

            <div class="col-11 col-lg-5 d-flex justify-content-start flex-column mb-4">
              <h4 class="text-uppercase">{{ item.suptitle }}</h4>
              <h5>{{ item.title }}</h5>
              <h6 class="font-italic font-weight-normal">{{ item.subtitle }}</h6>
              <p class="mb-3">{{ item.text }}</p>
              <el-button round class="el-button_border-blue text-uppercase">
                <NuxtLink to="/">подробнее</NuxtLink>
              </el-button>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </client-only>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      dataSlides: [
        {
          id: Math.floor(Math.random() * 10000),
          title: "Карнаух Олег Петрович",
          suptitle: "ООО Сибпрофиль",
          subtitle: "Директор по развитию",
          img: "busines_portret.jpg",
          text: "Соображения высшего порядка, а также реализация намеченного плана развития в значительной степени обуславливает создание новых предложений? Разнообразный ображения высшего порядка, а также реализация намеченного плана развития в...",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Карнаух Олег Петрович",
          suptitle: "ООО Сибпрофиль",
          subtitle: "Директор по развитию",
          img: "busines_portret.jpg",
          text: "Соображения высшего порядка, а также реализация намеченного плана развития в значительной степени обуславливает создание новых предложений? Разнообразный ображения высшего порядка, а также реализация намеченного плана развития в...",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Карнаух Олег Петрович",
          suptitle: "ООО Сибпрофиль",
          subtitle: "Директор по развитию",
          img: "busines_portret.jpg",
          text: "Соображения высшего порядка, а также реализация намеченного плана развития в значительной степени обуславливает создание новых предложений? Разнообразный ображения высшего порядка, а также реализация намеченного плана развития в...",
        },
        {
          id: Math.floor(Math.random() * 10000),
          title: "Карнаух Олег Петрович",
          suptitle: "ООО Сибпрофиль",
          subtitle: "Директор по развитию",
          img: "busines_portret.jpg",
          text: "Соображения высшего порядка, а также реализация намеченного плана развития в значительной степени обуславливает создание новых предложений? Разнообразный ображения высшего порядка, а также реализация намеченного плана развития в...",
        },
      ],
      swiperOption: {
        loop: "true",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "true",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        simulateTouch: true,
        spaceBetween: 10,
      },
    };
  },
};
</script>
<style lang="sass">
.swiper-slide-photo
  min-width: 183px
  height: 275px
  background: url(static/img/theme/busines_portret.jpg) no-repeat
  background-size: cover

.swiper-button-prev
  left: 0 !important

.swiper-button-next
  right: 0 !important


.swiper-pagination-bullet
  width: 30px !important
  height: 3px !important
  background-color: #70B6EA !important
  opacity: .5 !important
  border-radius: 0 !important

  &-active
    opacity: 1 !important
</style>
