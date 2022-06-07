<template>
  <div id="one" class="card mb-0 h-100 d-flex" :style="{ backgroundColor: dataCard.background || 'white' }">
    <div class="card-body d-flex flex-column justify-content-between p-5">
      <div class="mb-5">
        <h4 class="text-uppercase card-title m-0 p-0">
          {{ dataCard.cardTitle }}
        </h4>
        <p v-for="item in dataCard.cardText" :key="item.id" class="card-text m-1">
          {{ item.text }}
        </p>
      </div>
      <el-button round class="text-uppercase el-button_border-blue">
        <NuxtLink to="/">подробнее</NuxtLink>
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardService",
  props: {
    dataCard: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="sass">
.card
  border: none
  border-radius: 10px
  max-width: 400px
  width: 100%
  position: relative
  &:hover
    box-shadow: 0px 4px 10px rgb(0 0 0 / 25%)
    transition: .2s linear
  .card-text
    font-size: 16px
    color: #1a1a1a
</style>
