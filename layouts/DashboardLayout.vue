<template>
  <div class="wrapper vh-100 d-flex flex-column">
    <dashboard-navbar class="main-header" :type="$route.name === 'alternative' ? 'light' : 'default'">
    </dashboard-navbar>
    <div class="main-content">
      <nuxt></nuxt>
    </div>
    <content-footer v-if="!$route.meta.hideFooter" class="main-footer"></content-footer>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import DashboardNavbar from "~/components/custom-components/Header.vue";
import ContentFooter from "~/components/custom-components/Footer.vue";
import DashboardContent from "~/components/layouts/argon/Content.vue";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    initScrollbar() {
      const isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("navbar-inner");
        initScrollbar("main-content");
        initScrollbar("sidenav");
      }
    },
  },
};
</script>
<style lang="sass">

// .wrapper
//   display: flex
//   flex-direction: column
//   height: 100%

.main-content
  flex: 1 0 auto

.main-footer
  flex: 0 0 auto
</style>
