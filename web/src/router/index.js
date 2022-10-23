import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RankListIndexView from '../views/ranklist/RankListIndexView'
import NotFound from '../views/error/NotFoundView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'

const routes = [
  {
    // 相对路径
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView, 
  },

  {
    // 相对路径
    path: "/record/",
    name: "record_index",
    component: RecordIndexView, 
  },

  {
    // 相对路径
    path: "/ranklist/",
    name: "ranklist_index",
    component: RankListIndexView, 
  },

  {
    // 相对路径
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView, 
  },

  {
    // 相对路径
    path: "/404/",
    name: "404",
    component:NotFound, 
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
