import Vue from 'vue'
import Router from 'vue-router'
import my from '@/views/my'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'my',
            component: my
        }
    ]
})