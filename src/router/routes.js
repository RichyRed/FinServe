
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', component: () => import('pages/PageHome.vue'),
        name: 'Home'
      },
      {
        path: "/about",
        component: () => import("src/pages/PageAbout.vue"),
        name: "About",
      },
      {
        path: "/alert",
        component: () => import("src/pages/AlertPage.vue"),
        name: "Alert",
      },
      {
        path: "/evaluations",
        component: () => import("src/pages/EvaluationsPage.vue"),
        name: "Evaluations",
      },
      {
        path: "/news",
        component: () => import("src/pages/NewsPage.vue"),
        name: "News",
      },
      {
        path: "/seePage",
        component: () => import("src/pages/PageSee.vue"),
        name: "SeePage",
      },
      {
        path: "/profile",
        component: () => import("src/pages/PageProfile.vue"),
        name: "Profile",
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
