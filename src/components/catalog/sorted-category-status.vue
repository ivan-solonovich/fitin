<template>
    <div class="sorted-category-status">
        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу
        </h2>
        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>
    </div>
</template>

<script>
    export default {
        name: "sorted-category-status",
        data(){
            return{

            }
        },
        props:{
            sortedSubCategoryStatus: {},


            sortedCategoryStatus: {},
        },
        methods:{
            selectedAll(){

                return this.$emit('selectedAll', this.sortedCategoryStatus = true)
            }
        }
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
</style>