<template>
    <c-products-item-cards-template
            :product_data="product_data"
    >

    </c-products-item-cards-template>
</template>

<script>
    import CProductsItemCardsTemplate from "./cards-template/c-products-item-cards-template";
    export default {
        name: "c-woman-shirts-item",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        components:{
            CProductsItemCardsTemplate,
        },
    }
</script>

<style lang="scss">

</style>