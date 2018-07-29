import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cookies: parseFloat(localStorage.getItem('cookies')) || 0.0,
        products: [
            {
                id: 1,
                name: 'Cursor',
                price: parseInt(localStorage.getItem("product1price")) || 30,
                cookiePerSecond: 1,
                purchased: parseInt(localStorage.getItem("product1purchased")) || 0,
            },
            {
                id: 2,
                name: 'Grandma',
                price: parseInt(localStorage.getItem("product2price")) || 100,
                cookiePerSecond: 5,
                purchased: parseInt(localStorage.getItem("product2purchased")) || 0,
            },
            {
                id: 3,
                name: 'Farm',
                price: parseInt(localStorage.getItem("product3price")) || 500,
                cookiePerSecond: 25,
                purchased: parseInt(localStorage.getItem("product3purchased")) || 0,
            },
            {
                id: 4,
                name: 'Mine',
                price: parseInt(localStorage.getItem("product4price")) || 1000,
                cookiePerSecond: 100,
                purchased: parseInt(localStorage.getItem("product4purchased")) || 0,
            },
            {
                id: 5,
                name: 'Factory',
                price: parseInt(localStorage.getItem("product5price")) || 10000,
                cookiePerSecond: 300,
                purchased: parseInt(localStorage.getItem("product5purchased")) || 0,
            }
        ]
    },
    mutations: {
        BUY_PRODUCT (state, { productId }) {
            state.products = state.products.map(product => {
                if (product.id === productId) {
                    product.purchased++
                    state.cookies -= product.price
                    product.price = 1.22 * product.price
                    localStorage.setItem("product" + productId + "price", product.price)
                    localStorage.setItem("product" + productId + "purchased", product.purchased)
                }

                return product
            })
        },
        CLICK_COOKIE (state) {
            state.cookies++
            localStorage.setItem("cookies", state.cookies)
        },
        ADD_COOKIES (state, { cookies }) {
            state.cookies += cookies
            localStorage.setItem("cookies", state.cookies)

        }
    }
})
