<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>
        <c-tshirt-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryTshirt="selectSubcategoryTshirt"
                @selectedSubcategorySleeveless="selectSubcategorySleeveless"


        />
        <c-color-picker/>
        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>

        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>
        <div v-bind:class="typeOfScreens()">
            <c-men-tshirt-item
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
    import CMenTshirtItem from './c-men-tshirt-item'
    import CLinkToMenTemplate from './cards-template/c-link-to-men-template'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
    import CTshirtSubcategory from "./subgategories/c-tshirt-subcategory";
    export default {
        name: "c-women-tshirt",
        data() {
            return {
                sortedSubCategoryNameRus: 'Майки', //имя субкатегории по русски
            }

        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],
        components:{
            CMenTshirtItem,
            CPresentWrapper,
            CLinkToMenTemplate,
            CColorPicker,
            CTshirtSubcategory
        },
        methods:{
            selectSubcategoryTshirt(selectedSubcategoryTshirt) {
                if(selectedSubcategoryTshirt === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'tshirt'
                    this.sortedSubCategoryNameRus = 'с рукавами'
                    this.sortedSubCategoryStatus = false
                    return this.selectSubCategory

                }
            },
            selectSubcategorySleeveless(selectedSubcategorySleeveless){
                if(selectedSubcategorySleeveless === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'sleeveless'
                    this.sortedSubCategoryNameRus = 'без рукавов'
                    this.sortedSubCategoryStatus = false

                    return this.selectSubCategory

                }
            },


        },

        computed: {

            //Передаем геттер с выбранным товарам в переменную
            productSource: function(){
                return this.$store.getters.PRODUCT_MAN_TSHIRT
            },

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style lang="scss">

</style>