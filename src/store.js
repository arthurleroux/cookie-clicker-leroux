import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from '@/assets/js/products'

export default new Vuex.Store({
    state: {
        cookies: 0,
        products: products
    },
    mutations: {
        CLICK_COOKIE (state) {
            state.cookies++
        },
    },
    actions: {

    }
})
