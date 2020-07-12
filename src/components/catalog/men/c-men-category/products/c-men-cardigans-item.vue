<template>
    <c-products-item-cards-template
            :product_data="product_data"
    />
</template>

<script>
    import CProductsItemCardsTemplate from './cards-template/c-products-item-cards-template'
    export default {
        name: "c-men-cardigans-item",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods:{


        },

        computed:{

        },
        components:{
            CProductsItemCardsTemplate,
        },
    }
</script>

<style lang="scss">

</style>