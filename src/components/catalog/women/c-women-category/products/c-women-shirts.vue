<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-shirts-item
                    v-for="product in PRODUCT_WOMAN_SHIRTS"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_SHIRTS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>

</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import CWomenShirtsItem from './c-women-shirts-item'
    import {mapActions, mapGetters, mapState} from 'vuex'

    export default {
        name: "c-women-shirts",
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

            CWomenShirtsItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },

        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_SHIRTS"
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