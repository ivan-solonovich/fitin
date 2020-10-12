<template>
    <div class="c-products-wrapper-item">
        <div class="product-photo">

<!--    Photos container -->
            <div class="photo-container">
                <div class="photo-main">
                    <img class="c-products-wrapper-item_image" :src="getImagesPath.image" alt="img">
                </div>
                <div class="controls"></div>
            </div>
            <!--    Icons container        -->
            <div class="icon-container">
                 <span class="f-menu_icons_items scale"

                       @click="addToCart(product_data)"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="crimson">
                        <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g>
                        <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                </span>
                <span class="f-menu_icons_items scale">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="crimson" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                        <path d="M8.59 13.51l6.83 3.98"/><path d="M15.41 6.51l-6.82 3.98"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                </span>
                <span class="f-menu_icons_items scale"
                      @click="addToLike(product_data)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <g fill="none" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12z"/></g><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
                    </svg></span>
            </div>


        </div>
        <div class="c-products-wrapper-item-wrapper">
            <div class="c-products-wrapper-item-wrapper__info">
                    <div class="title">
                        <h1 class="c-products-wrapper-item_name">{{ product_data.name }}</h1>
                        <span>{{ product_data.article }}</span>
                    </div>
                    <div class="price">
                         <span class="">{{ product_data.price | toFix }}</span>
                    </div>
                <ul class="description">
                    <li>flkjgsd;lkhfg;lsdk</li>
                    <li>dfgskdj'fgsdjf'l;hkj'df;lkhj</li>
                    <li>fdsgsdkljgsdlk;fj</li>
                </ul>


                    <p style="margin-block-end: 0em;">Брэнд:
                <span class="c-products-wrapper-item_brand">  `{{ product_data.brand }}`</span>
                    </p>

                  <div >
                      <button class="btn-fit">Подобрать</button>
                  </div>
            </div>
        </div>



    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import toFix from "../../../../../../filtres/tofix/tofix";
    export default {
        name: "c-products-item-cards-template",
        data() {
            return {
                type: Object,
                default(){
                    return {

                    }
                },

            }
        },
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
                "PRODUCT_MAN_COAT"
            ]),
            getImagesPath () {
                let vm = this;
                return {

                    ...vm.product_data,
                    image:  require(`../../../../../../assets/images/${vm.product_data.image}`)

                }

            },

        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_LIKE',
                'ADD_TO_LIKE_DATA',
                'ADD_TO_CART',
            ]),
            addToLike(product_data)  {
                this.ADD_TO_LIKE(product_data);
                this.ADD_TO_LIKE_DATA(product_data);
                let dateOfLikeCurrent = new Date;
                this.$set(this.product_data, 'dateOfLike', dateOfLikeCurrent)
                console.log(this.product_data);
            },
            addToCart() {
                console.log(this.product_data);
            }
        },
        filters:{
            toFix
        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
    .c-products-wrapper-item{
        display: grid;
        grid-template-rows: 1fr;
        font-family: "Raleway", sans-serif;
        
        h3 {
            font-size: .8em;
            letter-spacing: 1.2px;
            color: $color-secondary;
        }
        .title{
            display: flex;
            flex-direction: column;
            justify-content: left;
            h1 {
                margin-bottom: 0.1em;
                color: $color-primary;
                font-size: 1.5em;
                font-weight: 900;
            }
            span {
                font-size: 0.7em;
                color: $color-secondary;
            }
        }

        &_info {
            max-width: 80%;
            padding: 0.8em 0;

        }
        .description{
            font-size: 0.7em;
            color: $color-secondary;
        }
        .price{
            margin: 1.1em 0;
            color: $color-highlight;
            font-size: 1.2rem;

            span {
                width: 80%;
                padding-left: 0.15em;
                font-size: 2.1rem;
            }
        }
        .product-photo{
            display: grid;
            grid-template-columns: 1fr;
            box-shadow: 1px 1px 1px -2px rgba(0, 0, 0, 0.3);
        }
        .photo-main {
            max-width: 70%;
            border-radius: 6px 6px 0 0;

        }
        .btn-fit{
            padding: 1.5em 3.1em;
            margin: 1rem;
            border: none;
            border-radius: 7px;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: 1.3px;
            color: #fff;
            background-color: $color-highlight;
            box-shadow: 2px 2px 25px -7px $color-primary;
            cursor: pointer;
            text-transform: uppercase;

            &:active {
                transform: scale(0.97);
            }
        }
        .icon-container{
            display: flex;

            justify-content: space-around;
            align-items: center;
        }

    }

</style>