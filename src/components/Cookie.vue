<template>
    <section class="cookie-container">
        <div class="score">
            {{ cookies }}
        </div>
        <div>
            <img v-on:click="clickCookie" src="../assets/cookie.png">
        </div>
    </section>
</template>

<script>

    export default {
        methods: {
            clickCookie (e) {
                this.$store.commit('CLICK_COOKIE')
            },
        },
        computed: {
            cookies: function () {
                return this.$store.state.cookies
            }
        }
    }

</script>
