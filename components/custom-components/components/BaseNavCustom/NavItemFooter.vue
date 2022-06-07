<template>
  <div class="col-sx-12 col-sm-6 col-md-4 nav-footer">
    <h3 class="text-uppercase">{{ dataItem.title }}</h3>
    <ul class="pl-0">
      <li v-for="link in dataItem.dataLinks" :key="link.id">
        <NuxtLink v-if="link.url" :to="link.url">{{ link.text }}</NuxtLink>
        <a v-else-if="link.type && link.type === 'outsideLink'" :href="link.url"></a>
        <p v-else v-html="link.text"></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavItemFooter",
  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>
<style scope lang="sass">
.footer
  flex: 0 0 auto
  background-color: #494949
  .nav-footer
    max-width: 950px
    font-size: 14px
    h3
      font-size: 16px
      font-weight: 700
      color: #fff
    li
      margin-bottom: 10px
      :hover
        color: #fff
      a
        font-weight: 600
        color: #8E8E8E
    p
      font-size: 14px
      font-weight: 600
      color: #8E8E8E
</style>
