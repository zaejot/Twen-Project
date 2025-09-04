import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import DasHboard from '../pages/admin/DasHboard.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/product/:id', component: ProductDetail },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    {path: "/admin", component: DasHboard}
]
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Shop from "../pages/Shop.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Dashboard from "../pages/Dashboard.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import TesEndpoint from "../pages/TesEndpoint.vue";
import DasHboard from '../pages/admin/DasHboard.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/product/:id", component: ProductDetail },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/tes", component: TesEndpoint },
  {path: "/admin", component: DasHboard}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
