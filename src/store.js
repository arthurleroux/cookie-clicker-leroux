import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const products = [
    {
        id: 1,
        name: 'Cursor',
        price: 30,
        cookiePerSeconds: 1,
        purchased: 0
    },
    {
        id: 2,
        name: 'Grandma',
        price: 100,
        cookiePerSeconds: 5,
        purchased: 0
    }
]

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
