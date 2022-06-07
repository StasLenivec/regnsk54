<template>
  <div>
    <slot name="ApplicationContact">
      <div class="application-contact">
        <div class="d-flex justify-content-center h-100 py-4 flex-column application-contact-content h-100">
          <h3 class="mb-0">Связаться с нами</h3>
          <p>
            <span>+7 (951) 368 5528</span>
            Пн - Пт с 10:00 до 17:00
          </p>
          <h3 class="mb-0">Адрес:</h3>
          <p>
            г. Новосибирск,<br />
            ул. Орджоникидзе, 47 офис 201
          </p>
          <p>r-nsk@list.ru</p>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "ApplicationContact",
  data() {
    return {
      dataContact: [],
    };
  },
};
</script>
<style lang="sass">
.application-contact
  background-color: #70b6ea
  color: #fff

  &-content
    max-width: 280px
    width: 100%
    margin: auto

  h3
    color: #fff
</style>
