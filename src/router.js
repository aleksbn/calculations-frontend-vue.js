import { createRouter, createWebHistory } from "vue-router";

import AllStats from "./pages/stats/AllStats.vue";
import CalculationStats from "./pages/stats/CalculationStats.vue";
import CommentStats from "./pages/stats/CommentStats.vue";
import CommentList from "./pages/comments/CommentList.vue";
import AddComment from "./pages/comments/AddComment.vue";
import CommentDetails from "./pages/comments/CommentDetails.vue";
import NotFound from "./pages/NotFound.vue";
import CalculateLoan from "./pages/calculations/CalculateLoan.vue";
import CalculationList from "./pages/calculations/CalculationList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Nismo upotrijebili nested routes
    { path: "/", redirect: "/calculateloan" },
    { path: "/calculateloan", component: CalculateLoan },
    { path: "/allcalculations", component: CalculationList },
    { path: "/addcomment", component: AddComment },
    { path: "/allcomments", component: CommentList },
    { path: "/allcomments/:id", component: CommentDetails, props: true },
    {
      path: "/allstats",
      component: AllStats,
      children: [
        { path: "comments", component: CommentStats },
        { path: "calculations", component: CalculationStats },
      ],
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
