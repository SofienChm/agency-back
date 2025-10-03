import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Services from './views/Services.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import LetsTalk from './views/LetsTalk.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import dashbord from './views/DashbordBo.vue'
import AddProject from './views/AddProject.vue'
import { homePageViews } from './viewCounter.js'

const routes = [
  // { path: '/', name: 'home', component: HomeView },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/letstalk', name: 'LetsTalk', component: LetsTalk },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/dashbord', component: dashbord, meta: { requiresAuth: true } },
  { path: '/addproject', component: AddProject, meta: { requiresAuth: true } },
  {
    path: '/team/:id',
    name: 'TeamMemberDetail',
    component: () => import('./views/TeamMemberDetail.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard for tracking page views
router.afterEach((to, from) => {
  // Example: Log page view to console
  if (to.path === '/') {
    homePageViews.value++
    console.log('Homepage viewed:', homePageViews.value)
  }

  // Here you can add your analytics tracking code, e.g.:
  // analytics.trackPageView(to.fullPath)

  // Or increment your custom view counter/storage as needed
})

export default router
