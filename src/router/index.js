import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cash from "../views/Cash.vue";
import CreateTrip from "../views/CreateTrip.vue";
import CreateWaybill from "../views/CreateWaybill.vue";
import CreateTransport from "../views/CreateTransport.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create-trip",
    name: "CreateTrip",
    component: CreateTrip
  },
  {
    path: "/create-waybill",
    name: "CreateWaybill",
    component: CreateWaybill
  },
  {
    path: "/create-transport",
    name: "CreateTransport",
    component: CreateTransport
  },
  {
    path: "/cash",
    name: "Cash",
    component: Cash
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
