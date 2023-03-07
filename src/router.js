//引入路由对象
import { createRouter, createWebHashHistory, createWebHistory, createMemoryHistory } from "vue-router"

//引入组件
import home from './components/home.vue'
import optionAPI from './components/optionAPI.vue'
import groupAPI from './components/groupAPI.vue'
import reactiveData from './components/reactiveData.vue'
import lifeCycle from './components/lifeCycle.vue'
import setupOption from './components/setupOption.vue'
import setupGroup from './components/setupGroup.vue'
import optionAPI2 from './components/optionAPI2.vue'
import groupAPI2 from './components/groupAPI2.vue'
import callingComponent from './components/callingComponent.vue'
import father from './components/father.vue'
import son1 from './components/son1.vue'
import son2 from './components/son2.vue'
import provide from './components/provide.vue'
import son3 from './components/son3.vue'
import instruct from './components/instruct.vue'
import slot from './components/slot.vue'
import son4 from './components/son4.vue'
import actionSlot from './components/actionSlot.vue'
import son5 from './components/son5.vue'
import transition from './components/transition.vue'
import transitionGroup from './components/transitionGroup.vue'
import keep from './components/keep.vue'
import A from './components/A.vue'
import B from './components/B.vue'
import teleport from './components/teleport.vue'
import suspense from './components/suspense.vue'
import async from './components/async.vue'


// 创建路由
export default createRouter({
    history: createWebHashHistory(), //hash路由模式
    // history: createWebHistory(), //H5历史记录模式
    // history: createMemoryHistory(), //创建一个基于内存的历史记录模式
    linkExactActiveClass: 'active',  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            //默认首页
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/optionAPI',
            name: 'optionAPI',
            component: optionAPI
        },
        {
            path: '/groupAPI',
            name: 'groupAPI',
            component: groupAPI
        },
        {
            path: '/reactiveData',
            name: 'reactiveData',
            component: reactiveData
        },
        {
            path: '/lifeCycle',
            name: 'lifeCycle',
            component: lifeCycle
        },
        {
            path: '/setupOption',
            name: 'setupOption',
            component: setupOption
        },
        {
            path: '/setupGroup',
            name: 'setupGroup',
            component: setupGroup
        },
        {
            path: '/optionAPI2',
            name: 'optionAPI2',
            component: optionAPI2
        },
        {
            path: '/groupAPI2',
            name: 'groupAPI2',
            component: groupAPI2
        },
        {
            path: '/callingComponent',
            name: 'callingComponent',
            component: callingComponent
        },
        {
            path: '/father',
            name: 'father',
            component: father
        },
        {
            path: '/son1',
            name: 'son1',
            component: son1
        },
        {
            path: '/son2',
            name: 'son2',
            component: son2
        },
        {
            path: '/provide',
            name: 'provide',
            component: provide
        },
        {
            path: '/son3',
            name: 'son3',
            component: son3
        },
        {
            path: '/instruct',
            name: 'instruct',
            component: instruct
        },
        {
            path: '/slot',
            name: 'slot',
            component: slot
        },
        {
            path: '/son4',
            name: 'son4',
            component: son4
        },
        {
            path: '/actionSlot',
            name: 'actionSlot',
            component: actionSlot
        },
        {
            path: '/son5',
            name: 'son5',
            component: son5
        },
        {
            path: '/transition',
            name: 'transition',
            component: transition
        },
        {
            path: '/transitionGroup',
            name: 'transitionGroup',
            component: transitionGroup
        },
        {
            path: '/keep',
            name: 'keep',
            component: keep
        },
        {
            path: '/A',
            name: 'A',
            component: A
        },
        {
            path: '/B',
            name: 'B',
            component: B
        },
        {
            path: '/teleport',
            name: 'teleport',
            component: teleport
        },
        {
            path: '/suspense',
            name: 'suspense',
            component: suspense
        },
        {
            path: '/async',
            name: 'async',
            component: async
        }
    ]
})