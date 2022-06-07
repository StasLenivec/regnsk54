<template>
  <div>
    <slot name="ApplicationMap">
      <!-- <img src="https://hsto.org/r/w1560/webt/xa/xf/dc/xaxfdc7whintxbr6flbsnhpedjy.jpeg" class="w-100 h-100" alt="" /> -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1143.3024031655839!2d82.9343196583044!3d55.03261799509174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5c2cef23633%3A0x1343fc88fb097ffc!2z0YPQuy4g0J7RgNC00LbQvtC90LjQutC40LTQt9C1LCA0Nywg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDk5!5e0!3m2!1sru!2sru!4v1562156853923!5m2!1sru!2sru"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
      ></iframe>
    </slot>
  </div>
</template>
<script>
export default {
  name: "ApplicationMap",
  data() {
    return {
      dataContact: [],
    };
  },
};
</script>
<style lang="sass"></style>
