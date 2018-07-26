<template>
    <section class="shop-container">
        <div class="shop-list">
            <shop v-for="product in products" :product="product" :key="product.name" />
        </div>
    </section>
</template>

<script>

    import Shop from '@/components/Shop'

    export default {
        components: {
            Shop
        },
        computed: {
            products: function () {
                return this.$store ? this.$store.state.products : null
            }
        }
    }

</script>

<style>
    .shop-container {
        width: 50%;
    }
</style>