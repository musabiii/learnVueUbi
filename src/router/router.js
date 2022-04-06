import Main from "@/pages/Main";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

console.log('first')
export default router;
