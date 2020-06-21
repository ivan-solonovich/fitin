<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <c-women-overalls-item
                v-for="product in PRODUCT_WOMAN_OVERALLS"
                :key="product.article"
                v-bind:product_data="product"

        />
        <h2 v-if="PRODUCT_WOMAN_OVERALLS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>


    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CWomenOverallsItem from './c-women-overalls-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "c-women-overalls",
        data() {
            return {

            }

        },
        components:{
            CWomenOverallsItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),

        },
        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_OVERALLS"
            ]),

        },
        actions: {

        },



        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
</style>