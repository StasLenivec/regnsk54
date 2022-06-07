<template>
  <div class="col-sx-12 col-sm-6 col-md-4 nav-item">
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
  name: "NavItemHeader",
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
.nav-item
  z-index: 1
  li
    margin-bottom: 10px
    :hover
      color: #70B6EA
  a
    color: #8E8E8E
    font-weight: 700
    font-size: 14px
</style>
