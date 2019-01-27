import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from './components/intro/Intro.vue';
import Article from './components/article/Article.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
        path : '/',
        component : Intro,
    },{
      path: '/test',
      component : Article
    }
    ]
})
