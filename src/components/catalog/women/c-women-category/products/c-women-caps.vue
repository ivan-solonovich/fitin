<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-caps-item
                    v-for="product in PRODUCT_WOMAN_CAP"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_CAP.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CWomenCapsItem from './c-women-caps-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "c-women-caps",
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
            CWomenCapsItem,
            CPresentWrapper,
            CLinkToWomenTemplate
        },
        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_CAP"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";


</style>