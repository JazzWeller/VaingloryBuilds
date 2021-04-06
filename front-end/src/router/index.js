import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Build from "../views/Build.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Vainglory Builds'
    }
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: 'Select Hero'
    }
  },
  {
    path: "/build",
    name: "Build",
    component: Build,
    meta: {
      title: 'Create Build'
    }
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
    meta: {
      title: 'Edit Build'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
