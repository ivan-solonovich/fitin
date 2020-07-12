<template>
    <div class="c-products-wrapper">
        <!--        Меню каталого-->
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>
        <!--Выбор товара по подкатегории -->
        <c-coats-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryCoatTopcoat="selectSubcategoryCoatTopcoat"
                @selectedSubcategoryCoatDownJacket="selectSubcategoryCoatDownJacket"
                @selectedSubcategoryCoatFurCoat="selectSubcategoryCoatFurCoat"
                @selectedSubcategoryCoatCoatM="selectSubcategoryCoatCoatM"
        />

        <c-color-picker/>
        <!--Выбор товара по цвету-->


        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>

        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу
        </h2>

        <div class="card-container">

            <c-men-coats-item
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
    import CMenCoatsItem from './c-men-coats-item'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import { mapGetters } from "vuex";
    import CCoatsSubcategory from "../../../men/c-men-category/products/subgategories/c-coats-subcategory";
    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";

    export default {
        name: "c-men-coats",
        data(){
            return{
                sortedSubCategoryNameRus: 'Верхнюю одежду', //имя субкатегории по русски
            }
        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],

        methods:{
            selectSubcategoryCoatTopcoat(selectedSubcategoryCoatTopcoat) {
                if(selectedSubcategoryCoatTopcoat === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'topcoat'
                    this.sortedSubCategoryNameRus = 'Пальто'
                    this.sortedSubCategoryStatus = false
                    return this.selectSubCategory

                }
            },
            selectSubcategoryCoatDownJacket(selectedSubcategoryCoatDownJacket){
                if(selectedSubcategoryCoatDownJacket === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'downjacket'
                    this.sortedSubCategoryNameRus = 'Пуховики'
                    this.sortedSubCategoryStatus = false
                    // if (this.selectSubCategory.length){
                    //      this.sortedSubCategoryStatus = false
                    // }else{
                    //      this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory

                }
            },
            selectSubcategoryCoatFurCoat(selectedSubcategoryCoatFurCoat) {
                if(selectedSubcategoryCoatFurCoat === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'furcoat'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Шубы'

                    // if (this.selectSubCategory.length){
                    //     return this.sortedSubCategoryStatus = false
                    // }else{
                    //     return this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory
                }
            },
            selectSubcategoryCoatCoatM(selectedSubcategoryCoatCoatM) {
                if(selectedSubcategoryCoatCoatM === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'coatm'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Куртки'

                    return this.selectSubCategory
                }
            },
        },
        components:{
            CColorPicker,
            CMenCoatsItem,
            CPresentWrapper,
            CLinkToMenTemplate,
            CCoatsSubcategory
        },
        created() {


        },

        computed: {
            ...mapGetters([

                "PRODUCT_MAN_COAT"
            ]),
            productSource: function(){
                return this.$store.getters.PRODUCT_MAN_COAT
            },



        },

    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";

</style>