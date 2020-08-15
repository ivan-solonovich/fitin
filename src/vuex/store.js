import Vue from "vue"
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use( Vuex, VuexPersistence );
const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
});



const store = new Vuex.Store({
    state: {
        products: [],
        likes: [],
        cart: [],
    },
    mutations,
    actions,
    getters,
    plugins: [vuexLocal.plugin]
});

export default store;