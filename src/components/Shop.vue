<template>
    <div class="store" >
        <div class="desc">
            <h4>{{ product.name }}</h4>
            <small>+{{ product.cookiePerSeconds.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }} cookies/s</small>
        </div>
        <div class="count" ref="count">
            <span>{{ product.purchased }}</span>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        props: ['product']
    }
</script>