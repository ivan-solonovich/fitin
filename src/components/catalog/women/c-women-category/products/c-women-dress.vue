<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-dress-item
                    v-for="product in PRODUCT_WOMAN_DRESS"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_DRESS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>


    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import CWomenDressItem from './c-women-dress-item'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "c-women-dress",
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
            CWomenDressItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },

        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_DRESS"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }

    }
</script>

<style lang="scss">

</style>