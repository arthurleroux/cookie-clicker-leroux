<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/game">Let's play !</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import store from '@/store'

    export default {
        name: 'app',
        store,
        data () {
            return {
                delayMs: 1000
            }
        },
        computed: {
            products: function () {
                return this.$store.state.products
            }
        },
        mounted () {
            this.farmProducts()
        },
        methods: {
            farmProducts () {
                setInterval(() => {
                    let cookieCount = 0

                    for (let product of this.products) {
                        cookieCount += product.cookiePerSecond * product.purchased
                    }

                    this.$store.commit('ADD_COOKIES', { cookies: cookieCount })

                }, this.delayMs)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .cursor {
        cursor: pointer;
    }

</style>
