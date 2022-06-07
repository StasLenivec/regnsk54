<template>
  <div>
    <slot name="iconPresentation"></slot>

    <slot name="titlePresentation"></slot>

    <slot name="textPresentation"></slot>

    <slot name="imagePresentation"></slot>
  </div>
</template>
<script>
export default {
  name: "CardPresentation",
  props: {
    // dataPresentation: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  data() {
    return {};
  },
};
</script>
<style lang="sass">
.el-card
  border: none !important
  background-color: transparent !important

  &__body
    padding: 0 15px !important

  h3
    font-size: 16px
    font-weight: 700

  p
    font-size: 16px
    font-weight: 400
    line-height: 22px
    color: #1a1a1a
    margin-bottom: 10px !important
</style>
