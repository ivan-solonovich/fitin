<template>
    <div class="c-likes-item-cards-template">
        <!--    Card container    -->
        <div class="image_card_container">
            <img class="c-products-wrapper-item_image" :src="getImagesPathLikes.image" alt="img">
        </div>
        <div class="delete_from_likes">
            <button

            >Удалить из понравившихся</button>
        </div>
<!--        description container -->
        <div class="c-products-wrapper-item-wrapper">
            <h3 class="c-products-wrapper-item_name">{{ likes_data.name }}</h3>
            <p class="c-products-wrapper-item_prise">Цена: {{ likes_data.price | toFix }}</p>
            <p style="margin-block-end: 0em;">Брэнд:</p>
            <p class="c-products-wrapper-item_brand">  `{{ likes_data.brand }}`</p>
            <p>{{ likes_data.color}}</p>
            <div class="icon-container">
                <span class="f-menu_icons_items scale"> <i class="fas fa fa-heart"> </i> </span>
                <span class="f-menu_icons_items scale"><i class="fas fa-shopping-bag"></i></span>
            </div>

        </div>



    </div>
</template>

<script>
    import toFix from "../../../filtres/tofix/tofix";
    import {mapActions} from "vuex";

    export default {
        name: "c-likes-item-cards-template",
        data() {
            return {
                type: Object,
                default(){
                    return {

                    }
                }
            }
        },
        props: {
            likes_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'GET_LIKES_FROM_API'
            ]),


        },
        computed: {
            // images () {
            //     let vm = this;
            //
            //     return require('../../../assets/images/' + vm.likes_data.image)
            // }
            getImagesPathLikes () {
                let vm = this;
                return {

                    ...vm.product_data,
                    image:  require(`../../../assets/images/${vm.likes_data.image}`)

                }

            },
        },
        filters:{
            toFix
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
    .c-likes-item-cards-template{
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 4px;
        margin-bottom: 4px;
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        .c-products-wrapper-item-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .image_card_container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                max-height: 200px;
            }
        }

    }
</style>