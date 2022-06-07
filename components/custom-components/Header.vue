<template>
  <base-nav-custom v-model="showNavbar" class="navbar navbar-horizontal navbar-expand-lg navbar-dark p-0 py-2">
    <div class="navbar-collapse-header">
      <div class="row">
        <div class="col-6 collapse-close">
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="showNavbar = false"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </base-nav-custom>
</template>
<script>
import BaseNavCustom from "~/components/custom-components/components/BaseNavCustom.vue";
export default {
  components: {
    BaseNavCustom,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
};
</script>
<style lang="sass">
.navbar
  background-color: #F8ECEC
li
  list-style-type: none
#nav-icon3
  display: block !important
  order: 3
</style>
