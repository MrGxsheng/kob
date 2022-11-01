import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RankListIndexView from '../views/ranklist/RankListIndexView'
import NotFound from '../views/error/NotFoundView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import store from '../store/index'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    //记录额外信息
    meta: {
      requestAuth: true,
    }
  },
  
  {
    // 相对路径
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView, 
    meta: {
      requestAuth: true,
    }
  },

  {
    // 相对路径
    path: "/record/",
    name: "record_index",
    component: RecordIndexView, 
    meta: {
      requestAuth: true,
    }
  },

  {
    // 相对路径
    path: "/ranklist/",
    name: "ranklist_index",
    component: RankListIndexView, 
    meta: {
      requestAuth: true,
    }
  },

  {
    // 相对路径
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView, 
    meta: {
      requestAuth: true,
    }
  },

  {
    // 相对路径
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView, 
    meta: {
      requestAuth: false,
    }
  },

  {
    // 相对路径
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView, 
    meta: {
      requestAuth: false,
    }
  },

  {
    // 相对路径
    path: "/404/",
    name: "404",
    component:NotFound, 
    meta: {
      requestAuth: false,
    }
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.requestAuth && !store.state.user.is_login) {
    next( {name: "user_account_login"});
  }else{
    next();
  }
})

export default router
