import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        UserData : [],
        JapaneseData : []
    },

    actions:{
        getUser(context,data){
            context.commit('updateUser',data)
        },
        
        getJapAccount(context,data){
            context.commit('updateJapAccount',data)
        },
    },

    mutations:{
        updateUser(state,data){
            state.UserData = data 
        }, 
        
        updateJapAccount(state,data){
            state.JapaneseData = data 
        },
    },
    getters:{},
    plugins: [createPersistedState()]
});