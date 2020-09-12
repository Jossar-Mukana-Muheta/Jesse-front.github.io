import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
let user = JSON.parse(localStorage.getItem("user"));

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/NotFound.vue")
  },
  {
    path: "/Contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/ContactPage.vue")
  },
  {
    path: "/GaleriePage",
    name: "GaleriePage",
    // route level code-splitting
    // this generates a separate chunk (GaleriePage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "GaleriePage" */ "../views/GaleriePage.vue")
  },
  {
    path: "/Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  },

  {
    path: "/Dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (Dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/*router.beforeEach((to, from, next) => {
  const authenticatedUser = user;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Check for protected route
  if (requiresAuth && !authenticatedUser) {
    next({
      path: '/Login ' , 
        query: { redirect : to.fullPath} 
    });
  } else {
    next();
  }
});*/


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!user) {
      next({
        path: '/Login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
