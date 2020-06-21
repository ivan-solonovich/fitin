<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-jackets-item
                    v-for="product in PRODUCT_WOMAN_JACKETS"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_JACKETS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>


    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import CWomenJacketsItem from './c-women-jackets-item'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "c-woman-jackets",
        data() {
            return {


            }

        },

        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),


        },
        components:{
            CWomenJacketsItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },

        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_JACKETS"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">
    @import "../../../../../assets/styles/styles";
</style>