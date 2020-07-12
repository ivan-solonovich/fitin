<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <c-dress-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryEveryDayDress="selectSubcategoryEveryDayDress"
                @selectedSubcategoryEveningDress="selectSubcategoryEveningDress"
                @selectedSubcategoryLongDress="selectSubcategoryLongDress"
                @selectedSubcategorySunDress="selectSubcategorySunDress"
        />

        <c-color-picker/>
        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>

        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>
        <div class="card-container">
            <c-women-dress-item
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
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import CWomenDressItem from './c-women-dress-item'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import {mapGetters} from 'vuex'
    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
    import CDressSubcategory from "./subgategories/c-dress-subcategory";

    export default {
        name: "c-women-dress",
        data(){
            return{
                sortedSubCategoryNameRus: 'Платье', //имя субкатегории по русски
            }
        },

        mixins: [baseFunctionality, selectSubCategory, colorPicker],

        methods:{
            // Выбор по субкатегории

            selectSubcategoryEveryDayDress(selectedSubcategoryEveryDayDress) {
                if(selectedSubcategoryEveryDayDress === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'casualdress'
                    this.sortedSubCategoryNameRus = 'Повседневное платье'
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
            selectSubcategoryEveningDress(selectedSubcategoryEveningDress){
                if(selectedSubcategoryEveningDress === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'eveningdress'
                    this.sortedSubCategoryNameRus = 'Вечернее платье'
                    this.sortedSubCategoryStatus = false
                    // if (this.selectSubCategory.length){
                    //      this.sortedSubCategoryStatus = false
                    // }else{
                    //      this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory

                }
            },
            selectSubcategoryLongDress(selectedSubcategoryLongDress) {
                if(selectedSubcategoryLongDress === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'longdress'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'В пол'

                    // if (this.selectSubCategory.length){
                    //     return this.sortedSubCategoryStatus = false
                    // }else{
                    //     return this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory
                }
            },
            selectSubcategorySunDress(selectedSubcategorySunDress) {
                if(selectedSubcategorySunDress === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'sundress'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Сарафан'
                    // let vm = this;
                    //
                    // this.PRODUCT_WOMAN_COAT.map(function (item) {
                    //     if (item.subcategory === 'coatm'){
                    //         vm.sortedCategories.push(item)
                    //         vm.sortedSubCategoryName = 'coatm'
                    //
                    //     }
                    //
                    // })
                    // if (this.selectSubCategory.length){
                    //     return this.sortedSubCategoryStatus = false
                    // }else{
                    //     return this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory
                }
            },

        },
        components:{
            CWomenDressItem,
            CPresentWrapper,
            CLinkToWomenTemplate,
            CDressSubcategory,
            CColorPicker,
        },

        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_DRESS"
            ]),
            productSource: function(){
                return this.$store.getters.PRODUCT_WOMAN_DRESS
            },

        },

    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
</style>