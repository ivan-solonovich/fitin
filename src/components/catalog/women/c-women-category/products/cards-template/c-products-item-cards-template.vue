<template>
    <div class="c-products-wrapper-item">
        <div class="c-products-wrapper-item-wrapper">
            <h3 class="c-products-wrapper-item_name">{{ product_data.name }}</h3>
            <p class="c-products-wrapper-item_prise">Цена: {{ product_data.price | toFix }}</p>
            <p style="margin-block-end: 0em;">Брэнд:</p>
            <p class="c-products-wrapper-item_brand">  `{{ product_data.brand }}`</p>
            <p>{{ product_data.color}}</p>
            <div class="icon-container">
                <span class="f-menu_icons_items scale"> <i class="fas fa fa-heart"> </i> </span>
                <span class="f-menu_icons_items scale"><i class="fas fa-shopping-bag"></i></span>
            </div>
        </div>

        <img class="c-products-wrapper-item_image" :src=" require('../../../../../../assets/images/' + product_data.image)" alt="img">

    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import toFix from "../../../../../../filtres/tofix/tofix";
    export default {
        name: "c-products-item-cards-template",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        computed: {
            ...mapGetters([
                "PRODUCT_WOMAN_CARDIGANS"
            ]),

        },
        filters:{
            toFix
        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
</style>