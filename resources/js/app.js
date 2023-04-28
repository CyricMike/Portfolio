require('./bootstrap');


import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';
import Sample from './template/Sample';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css' 
import axios from 'axios'
import io from 'socket.io-client';
import moment from 'moment';


const socket = io(`${window.location.protocol}//${window.location.hostname}:6969`);

Vue.use(Vuetify)
Vue.use(Antd);

Vue.prototype.axios     = axios;
Vue.prototype.moment    = moment;
Vue.prototype.$socket   = socket;

Vue.prototype.companies     = []
Vue.prototype.departments   = []
Vue.prototype.sections      = []
Vue.prototype.Status        = []
Vue.prototype.RequestKinds  = []
Vue.prototype.AdminInfo     = []
Vue.prototype.UserIPaddress = []
Vue.prototype.Approver      = []
Vue.prototype.Kinds         = []
Vue.prototype.UserInfo      = []
Vue.prototype.Emails        = []
Vue.prototype.SystemMaster  = []


loadAll();

axios.get('api/Emails')
.then(response=>{
    Vue.prototype.Emails = response.data
})

axios.get('api/companies')
.then(response=>{
    Vue.prototype.companies = response.data
})

axios.get('api/department')
.then(response=>{
    Vue.prototype.departments = response.data
})

axios.get('api/sections')
.then(response=>{
    Vue.prototype.sections = response.data
})

axios.get('api/AdminInfo')
.then(response=>{
    Vue.prototype.AdminInfo = response.data
}) 

axios.get('api/Kinds')
.then(response=>{
    Vue.prototype.Kinds = response.data
})

axios.get('api/RequestKinds')
.then(response=>{
    Vue.prototype.RequestKinds = response.data
})

axios.get('api/Approver')
.then(response=>{
    Vue.prototype.Approver = response.data
})

axios.get('api/Status')
.then(response=>{
    Vue.prototype.Status = response.data
})

axios.get('api/SystemMaster')
.then(response=>{
    Vue.prototype.SystemMaster = response.data
})



async function loadAll() { 
    await axios.get('api/UserIPaddress')
    .then(response=>{
        Vue.prototype.UserIPaddress = response.data 
    })

    await axios.get(`api/UserInfo/${Vue.prototype.UserIPaddress}`)
    .then(response=>{
        Vue.prototype.UserInfo = response.data
    }) 
}


new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    components : {
        App,
        Sample
    } 
});