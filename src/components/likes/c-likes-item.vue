<template>
    <div class="c-likes-item">
        <c-likes-item-cards-template
                :likes_data="likes_data"

        />



    </div>
</template>

<script>
   import CLikesItemCardsTemplate from './template/c-likes-item-cards-template.vue'
    export default {
        name: "c-likes-item",
        props: {
            likes_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        components: {
            CLikesItemCardsTemplate
        },
        methods: {

        }


    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";

</style>