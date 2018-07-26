<template>
    <div class="cursor" @click="buy">
        <div>
            <h4>{{ product.name }}</h4>
            <small>+{{ product.cookiePerSecond }} cookies/s</small>
            <div class="price">
                <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">Price : {{ Math.round(product.price) }} cookies</div>
            </div>
        </div>
        <div >
            <span>Purchased : {{ product.purchased }}</span>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        props: ['product'],
        computed: {
            totalCookies: function () {
                return this.$store.state.cookies
            },
            canBuy: function () {
                return this.totalCookies >= this.product.price
            }
        },
        methods: {
            buy () {
                if (this.canBuy) {
                    this.$store.commit('BUY_PRODUCT', { productId: this.product.id})
                }
            }
        }
    }
</script>

<style>
    h4 {
        margin-bottom: 0;
    }
    .text-green {
        color: green;
    }

    .text-red {
        color: red;
    }
</style>