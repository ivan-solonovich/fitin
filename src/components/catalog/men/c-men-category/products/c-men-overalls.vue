<template>
    <div class="c-products-wrapper">
        <c-present-wrapper/>
        <c-link-to-men-template/>

        <c-men-overalls-item
                v-for="product in PRODUCT_MAN_OVERALLS"
                :key="product.article"
                v-bind:product_data="product"

        />
        <h2 v-if="PRODUCT_MAN_OVERALLS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>


    </div>
</template>

<script>

    import CPresentWrapper from "../../../c-present-wrapper";
    import CLinkToMenTemplate from "./cards-template/c-link-to-men-template";
    import CMenOverallsItem from "./c-men-overalls-item";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "c-men-overalls",
        components: {
            CLinkToMenTemplate,
            CPresentWrapper,
            CMenOverallsItem
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),

        },
        computed: {
            ...mapGetters([

                "PRODUCT_MAN_OVERALLS"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">
@import "src/assets/styles/styles.scss";
</style>