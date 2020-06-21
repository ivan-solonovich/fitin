<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>




        <div class="card-container">

            <c-women-cardigans-item
                    v-for="product in  PRODUCT_WOMAN_CARDIGANS "
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="PRODUCT_WOMAN_CARDIGANS.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>


import CPresentWrapper from '../../../c-present-wrapper'
import CWomenCardigansItem from './c-women-cardigans-item'
import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
    name: "c-women-cardigans",
    data() {
        return {

        }

    },
    components: {
        CWomenCardigansItem,
        CPresentWrapper,
        CLinkToWomenTemplate
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
        ]),






        // this.getColor.filter(PRODUCT_WOMAN_CARDIGANS => (PRODUCT_WOMAN_CARDIGANS.color === 'red' ));


    },

    computed: {
        ...mapGetters([
            "PRODUCT_WOMAN_CARDIGANS"
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