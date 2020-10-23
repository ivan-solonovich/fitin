<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>
        <div v-bind:class="typeOfScreens()">
        <c-women-pants-item
                v-for="product in PRODUCT_WOMAN_PANTS"
                :key="product.article"
                v-bind:product_data="product"

        />
        </div>
        <h2 v-if="PRODUCT_WOMAN_PANTS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>


    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CWomenPantsItem from './c-women-pants-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import {mapActions, mapGetters, mapState} from 'vuex'
    import {baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import {selectSubCategory} from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";

    export default {
        name: "c-women-pants",
        data() {
            return {

            }

        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],
        components:{
            CWomenPantsItem,
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

                "PRODUCT_WOMAN_PANTS"
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