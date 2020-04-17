import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import SvgReferences from "@/views/SvgReferences.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/svg-references",
    name: "svg-references",
    component: SvgReferences
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
  }
];

const router = new VueRouter({
  mode: "history", //Usees the browser's histroy.pushstate API to change the RUL without reloading the page
  base: process.env.BASE_URL,
  routes
});

export default router;
