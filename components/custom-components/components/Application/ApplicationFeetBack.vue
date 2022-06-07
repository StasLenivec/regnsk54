<template>
  <div>
    <slot name="ApplicationFeetBack">
      <div class="application-feetback position-relative">
        <div class="application-feetback-content position-absolute w-100">
          <card-form :style="backgroundForm" @submit="submitService">
            <template #form class="d-flex"></template>
          </card-form>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
import CardForm from "~/components/custom-components/components/CardForm";

export default {
  name: "ApplicationFeetBack",
  components: { CardForm },

  data() {
    return {
      dataFormService: {
        background: "black",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  computed: {
    backgroundForm() {
      return { backgroundColor: this.background || "white" };
    },
  },
  methods: {
    submitService() {
      console.log("data", this.dataFormService);
    },
  },
};
</script>
<style lang="sass">
.application-feetback-content
  top: -14px

  form
    display: flex
    flex-direction: column
    align-items: center
</style>
