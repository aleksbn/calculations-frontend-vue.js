import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "./pages/AboutUs.vue";
import AllStats from "./pages/stats/AllStats.vue";
import CalculationStats from "./pages/stats/CalculationStats.vue";
import CommentStats from "./pages/stats/CommentStats.vue";
import CommentList from "./pages/comments/CommentList.vue";
import AddComment from "./pages/comments/AddComment.vue";
import CommentDetails from "./pages/comments/CommentDetails.vue";
import NotFound from "./pages/NotFound.vue";
import CalculateLoan from "./pages/calculations/CalculateLoan.vue";
import CalculationList from "./pages/calculations/CalculationList.vue";
import UserAuth from "./pages/auth/UserAuth.vue";

import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Nismo upotrijebili nested routes
    { path: "/", redirect: "/about" },
    { path: "/about", component: AboutUs },
    { path: "/calculateloan", component: CalculateLoan },
    { path: "/allcalculations", component: CalculationList },
    { path: "/addcomment", component: AddComment },
    { path: "/allcomments", component: CommentList },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/allcomments/:id", component: CommentDetails, props: true },
    {
      path: "/allstats",
      component: AllStats,
      meta: {
        requiresAuth: true,
      },
      children: [
        { path: "comments", component: CommentStats },
        { path: "calculations", component: CalculationStats },
      ],
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if(to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  } else if(to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/allcalculations');
  } else {
    next();
  }
});

export default router;
