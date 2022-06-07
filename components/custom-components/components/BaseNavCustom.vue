<template>
  <nav :class="classes" class="navbar px-2 px-md-0 position-fixed w-100 flex-column">
    <div :class="containerClasses">
      <slot name="brand">
        <img src="/img/brand/logo.svg" width="91" alt="Логотип" />
      </slot>
      <slot name="telephone">
        <p class="m-0 p-0 px-2">+7 (951) 368 5528</p>
      </slot>
      <div id="nav-icon3" :class="[show ? 'open' : '']" @click.stop="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <slot name="menu">
        <ul class="nav-menu d-flex align-items-center justify-content-around text-center w-50 m-0 p-0">
          <li v-for="link in dataNavItems" :key="link.id" class="px-2 text-uppercase nav-menu__item">
            <NuxtLink class="px-2 py-3" :to="{ path: localePath('/'), hash: `#${link.id}` }" @click.prevent="scroll">{{
              link.text
            }}</NuxtLink>
          </li>
        </ul>
      </slot>
    </div>
    <transition name="fade">
      <DropMenu v-if="show" class="container"></DropMenu>
    </transition>
  </nav>
</template>
<script>
"use strict";
import DropMenu from "~/components/custom-components/components/DropMenu";
export default {
  name: "BaseNavCustom",
  components: { DropMenu },
  model: {
    prop: "show",
    event: "change",
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      description: "Whether navbar menu is shown (valid for viewports < specified by `expand` prop)",
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent",
    },
    expand: {
      type: String,
      default: "lg",
      description: "Breakpoint where nav should expand",
    },
    menuClasses: {
      type: [String, Object, Array],
      default: "",
      description: "Navbar menu (items) classes. Can be used to align menu items to the right/left",
    },
    containerClasses: {
      type: [String, Object, Array],
      default: "container",
      description:
        "Container classes. Can be used to control container classes (contains both navbar brand and menu items)",
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        return ["", "dark", "success", "danger", "warning", "white", "primary", "light", "info", "vue"].includes(value);
      },
      description: "Navbar color type",
    },
  },
  data() {
    return {
      dataNavItems: [
        {
          id: "one",
          text: "услуги",
          url: "#",
        },
        {
          id: "two",
          text: "купить услуги",
          url: "#",
        },
        {
          id: Math.floor(Math.random() * 10000),
          text: "о нас",
          url: "#",
        },
      ],
    };
  },
  computed: {
    classes() {
      const color = `bg-${this.type}`;
      const classes = [{ "navbar-transparent": this.transparent }, { [`navbar-expand-${this.expand}`]: this.expand }];
      if (this.position) {
        classes.push(`navbar-${this.position}`);
      }
      if (!this.transparent) {
        classes.push(color);
      }
      return classes;
    },
    hasMenu() {
      return this.$slots.default;
    },
  },
  methods: {
    toggleMenu() {
      this.$emit("change", !this.show);
    },
    scroll(anchorId) {
      document.getElementById(anchorId).scrollIntoView({
        behavior: "smooth",
      });
    },
    a() {
      console.log("123");
    },
  },
};
</script>
<style scope lang="sass">
.navbar
  box-shadow: 0px 4px 6px rgb(0 0 0 / 10%)
  z-index: 999
  .nav-menu__item>a
    font-size: 14px
    color: #737373
    &:hover
      color: #F87777
      transition: .3s
#nav-icon3
  width: 30px
  height: 23px
  position: relative
  -webkit-transform: rotate(0deg)
  -moz-transform: rotate(0deg)
  -o-transform: rotate(0deg)
  transform: rotate(0deg)
  -webkit-transition: .5s ease-in-out
  -moz-transition: .5s ease-in-out
  -o-transition: .5s ease-in-out
  transition: .5s ease-in-out
  cursor: pointer
  span
    display: block
    position: absolute
    height: 2px
    width: 100%
    background: #737373
    border-radius: 9px
    opacity: 1
    left: 0
    -webkit-transform: rotate(0deg)
    -moz-transform: rotate(0deg)
    -o-transform: rotate(0deg)
    transform: rotate(0deg)
    -webkit-transition: .25s ease-in-out
    -moz-transition: .25s ease-in-out
    -o-transition: .25s ease-in-out
    transition: .25s ease-in-out
#nav-icon3 span:nth-child(1)
  top: 0px
#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3)
  top: 9px
#nav-icon3 span:nth-child(4)
  top: 19px
#nav-icon3.open span:nth-child(1)
  top: 18px
  width: 0%
  left: 50%
#nav-icon3.open span:nth-child(2)
  -webkit-transform: rotate(45deg)
  -moz-transform: rotate(45deg)
  -o-transform: rotate(45deg)
  transform: rotate(45deg)
#nav-icon3.open span:nth-child(3)
  -webkit-transform: rotate(-45deg)
  -moz-transform: rotate(-45deg)
  -o-transform: rotate(-45deg)
  transform: rotate(-45deg)
#nav-icon3.open span:nth-child(4)
  top: 18px
  width: 0%
  left: 50%

.fade-enter-active,
.fade-leave-active
  transform: translatex(0)
  border-bottom-left-radius: 0
  transition: all .4s


.fade-enter,
.fade-leave-to
  width: 100%
  transition: width 475ms ease-out, transform 450ms ease, border-radius 1s
  border-bottom-left-radius: 300%
  transform: translate(100%, 0)
</style>
