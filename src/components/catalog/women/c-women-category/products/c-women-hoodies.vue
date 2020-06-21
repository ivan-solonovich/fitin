<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-hoodies-item
                    v-for="product in PRODUCT_WOMAN_HOODIES"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_HOODIES.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import CWomenHoodiesItem from './c-women-hoodies-item'
    import {mapActions, mapGetters, mapState} from 'vuex'
    import CWomenShirtsItem from "./c-women-shirts-item";
    export default {
        name: "c-women-hoodies",
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

            CWomenHoodiesItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },

        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_HOODIES"
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