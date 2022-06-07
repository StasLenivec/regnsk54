<template>
  <div class="card-form mb-0 h-100 d-flex m-auto" :style="styleCard">
    <div class="card-body d-flex flex-column justify-content-between text-center">
      <div class="mb-3">
        <h4 v-show="show" class="text-uppercase card-title p-0">
          {{ title }}
        </h4>
        <slot name="form">
          <form>
            <input class="px-3 mb-3 input input_form" placeholder="Имя" />
            <input class="px-3 mb-3 input input_form" placeholder="Телефон" />
            <input class="px-3 mb-3 mb-md-0 input input_form" placeholder="E-mail" />
          </form>
        </slot>
      </div>
      <el-button type="danger" round class="text-uppercase m-auto el-button_form" @click="$emit('submit')">
        Отправить
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceCard",
  props: {
    background: {
      type: String,
      default: "#F8ECEC",
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["submit"],
  data() {
    return { title: "Давайте обсудим ваш проект" };
  },
  computed: {
    styleCard() {
      return { backgroundColor: this.background || "white" };
    },
  },
};
</script>
<style lang="sass">
.card-form
  border: none
  border-radius: 10px
  box-shadow: 0px 8px 45px rgb(0 0 0 / 25%)
  width: 100%
</style>
