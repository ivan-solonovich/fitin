<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>

        <c-cardigans-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryCardiganJumper="selectSubcategoryCardiganJumper"
                @selectedSubcategoryCardiganSweater="selectSubcategoryCardiganCardigan"
                @selectedSubcategoryCardiganCardigan="selectSubcategoryCardiganCardigan"
                @selectedSubcategoryCardiganSweaterSvell="selectSubcategoryCardiganSweaterSvell"
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

            <c-men-cardigans-item
                    v-for="product in  filteredProducts "
                    :key="product.article"
                    v-bind:product_data="product"

            />
        </div>

        <h2 v-if="filteredProducts.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
    </div>
</template>

<script>


import CPresentWrapper from '../../../c-present-wrapper'
import CMenCardigansItem from './c-men-cardigans-item'
import CLinkToMenTemplate from './cards-template/c-link-to-men-template'
import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";

import {mapActions, mapGetters} from 'vuex'
import CColorPicker from "../../../c-color-picker";
import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
import CCardigansSubcategory from "./subgategories/c-cardigans-subcategory";
export default {
    name: "c-men-cardigans",
    data(){
        return{
            sortedSubCategoryNameRus: 'Свитера', //имя субкатегории по русски

        }

    },
    mixins: [baseFunctionality, selectSubCategory, colorPicker],
    components: {
        CCardigansSubcategory,
        CMenCardigansItem,
        CPresentWrapper,
        CLinkToMenTemplate,
        CColorPicker,
    },
    methods: {


        selectSubcategoryCardiganJumper(selectedSubcategoryCardiganJumper) {
            if(selectedSubcategoryCardiganJumper === true){

                this.sortedCategories = []
                this.chosenColor = ''
                this.sortedSubCategoryName = 'jumper'
                this.sortedSubCategoryNameRus = 'Джемпер'
                this.sortedSubCategoryStatus = false
                return this.selectSubCategory

            }
        },
        selectSubcategoryCardiganSweater(selectedSubcategoryCardiganSweater){
            if(selectedSubcategoryCardiganSweater === true){
                this.sortedCategories = []
                this.chosenColor = ''
                this.sortedSubCategoryName = 'sweater'
                this.sortedSubCategoryNameRus = 'Свитера'
                this.sortedSubCategoryStatus = false

                return this.selectSubCategory

            }
        },
        selectSubcategoryCardiganCardigan(selectedSubcategoryCardiganCardigan) {
            if(selectedSubcategoryCardiganCardigan === true){
                this.sortedCategories = []
                this.chosenColor = ''
                this.sortedSubCategoryName = 'cardigan'
                this.sortedSubCategoryStatus = false
                this.sortedSubCategoryNameRus = 'Кардиган'


                return this.selectSubCategory
            }
        },
        selectSubcategoryCardiganSweaterSvell(selectedSubcategoryCardiganSweaterSvell) {
            if(selectedSubcategoryCardiganSweaterSvell === true){
                this.sortedCategories = []
                this.chosenColor = ''
                this.sortedSubCategoryName = 'sweatersvell'
                this.sortedSubCategoryStatus = false
                this.sortedSubCategoryNameRus = 'С горлом'

                return this.selectSubCategory
            }
        },

    },

    computed: {
        ...mapGetters([
            "PRODUCT_MAN_CARDIGANS",

        ]),

//Передаем геттер с выбранным товарам в переменную
        productSource: function(){
            return this.$store.getters.PRODUCT_MAN_CARDIGANS
        },


    },
    mounted() {




    }


}
</script>

<style lang="scss">
    @import "src/assets/styles/styles";

</style>