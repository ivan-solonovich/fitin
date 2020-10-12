<template>
    <div class="c-likes"
    :likes_data = "product_data"
    >

        <div v-if="IS_DESKTOP || IS_TABLET" class="c-likes-desktop">

            <c-likes-item

                    v-for="like in likesSource"
                    :key="like.id"
                    v-bind:likes_data="like"

            />

        </div>
        <div v-if="IS_MOBILE" class="c-likes-mobile">

            <c-likes-item

                    v-for="like in likesSource"
                    :key="like.article"
                    v-bind:likes_data="like"
            />

        </div>
    </div>
</template>

<script>
import CLikesItem from "./c-likes-item"
import {mapGetters, mapActions} from "vuex";

    export default {
        name: "c-likes",
        data() {
            return {

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

       components:{

            CLikesItem,
        },
        computed: {
            ...mapGetters(
                [
                    'LIKES',
                    'IS_TABLET',
                    "IS_MOBILE",
                    "IS_DESKTOP",
                ]
            ),


            likesSource: function(){

                        return this.$store.getters.LIKES;

            },
        },
        methods: {
            ...mapActions([
                'GET_LIKES_FROM_API'
            ]),


        },
        mounted() {

            this.GET_LIKES_FROM_API();

        }


    }
</script>

<style lang="scss">
    .c-likes{

        .c-likes-desktop{

            padding-left: 1rem;
            margin-left: 1rem;
            padding-right: 1rem;
            margin-right: 1rem;
            width:100%;
            display:grid;
            grid-gap: 1rem;
            grid-template-areas:
                    "c-likes-item-cards-template c-likes-item-cards-template";
            c-likes-item-cards-template{
                grid-area: c-likes-item-cards-template;
            }

        }
    }

</style>