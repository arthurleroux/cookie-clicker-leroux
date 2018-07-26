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
        BUY_PRODUCT (state, { productId }) {
            state.products = state.products.map(product => {
                if (product.id === productId) {
                    product.purchased++
                    state.cookies -= product.price
                    product.price = 1.22 * product.price
                }

                return product
            })
        },
        CLICK_COOKIE (state) {
            state.cookies++
        },
    },
    actions: {

    }
})
