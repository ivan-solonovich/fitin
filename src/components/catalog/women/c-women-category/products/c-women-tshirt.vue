<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="card-container">
            <c-women-tshirt-item
                    v-for="product in PRODUCT_WOMAN_TSHIRT"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_TSHIRT.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CWomenTshirtItem from './c-women-tshirt-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import {mapActions, mapGetters, mapState} from 'vuex'
    export default {
        name: "c-women-tshirt",
        data() {
            return {

            }

        },
        components:{
            CWomenTshirtItem,
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
                "PRODUCT_WOMAN_TSHIRT"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">

</style>