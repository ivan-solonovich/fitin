import Vue from "vue"
import Vuex from 'vuex'
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        products: [],
        likes: [],
        cart: [],
    },
    mutations,
    actions,
    getters,
});

export default store;