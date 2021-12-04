import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import course from './components/Course.vue'
import Contact from './components/Contact.vue'
import Login from './components/Login.vue'
import SinglePost from './components/SinglePost.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'course',
        path: '/course',
        component: course
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'SinglePost',
        path: '/post/:id',
        component: SinglePost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;