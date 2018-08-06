import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        counter: 0
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    },
    actions: {
        // nuxtServerInit({commit},{req}) {
        //     if (req.session.user) {
        //         commit('user', req.session.user)
        //     }
        // }
    }

})

export default store
