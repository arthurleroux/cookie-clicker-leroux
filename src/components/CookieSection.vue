<template>
    <section class="cookie-container">
        <div class="score">
            <h2>{{ Math.round(cookies) }} cookies </h2>
        </div>
        <div>
            <img class="cursor" v-on:click="clickCookie" src="../assets/img/cookie.png">
        </div>
    </section>
</template>

<script>

    export default {
        methods: {
            clickCookie (e) {
                this.$store.commit('CLICK_COOKIE')
            }
        },
        computed: {
            cookies: function () {
                return this.$store.state.cookies
            }
        }
    }

</script>

<style>
    .cookie-container {
        width: 50%;
    }
</style>