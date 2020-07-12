<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>
        <c-hoodies-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryHoodiesZip="selectSubcategoryHoodiesZip"

        />
        <c-color-picker></c-color-picker>
        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>

        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>
        <div class="card-container">
            <c-men-hoodies-item
                    v-for="product in filteredProducts"
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="filteredProducts.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CLinkToMenTemplate from './cards-template/c-link-to-men-template'
    import CMenHoodiesItem from './c-men-hoodies-item'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
    import CHoodiesSubcategory from "./subgategories/c-hoodies-subcategory";
    export default {
        name: "c-men-hoodies",
        data() {
            return {


            }

        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],
        methods:{
            selectSubcategoryHoodiesZip(selectedSubcategoryHoodiesZip) {
                if(selectedSubcategoryHoodiesZip === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'zip'
                    this.sortedSubCategoryNameRus = 'Со змейкой'
                    this.sortedSubCategoryStatus = false
                    return this.selectSubCategory
                    // if (this.selectSubCategory.length){
                    //      this.sortedSubCategoryStatus = false
                    // }else{
                    //      this.sortedSubCategoryStatus = true
                    // }
                    //

                    //
                    //
                }
            },


        },
        components:{

            CMenHoodiesItem,
            CPresentWrapper,
            CLinkToMenTemplate,
            CHoodiesSubcategory,
            CColorPicker,
        },

        computed: {
            //Передаем геттер с выбранным товарам в переменную
            productSource: function(){
                return this.$store.getters.PRODUCT_MAN_HOODIES
            },

        },

    }
</script>

<style lang="scss">
    @import "../../../../../assets/styles/styles";
</style>