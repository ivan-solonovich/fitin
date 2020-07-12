<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>


        <c-caps-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryCapBaseball="selectSubcategoryCapBaseball"
                @selectedSubcategoryCapNapper="selectSubcategoryCapNapper"
                @selectedSubcategoryCapWinter="selectSubcategoryCapWinter"
                @selectedSubcategoryCapBeret="selectSubcategoryCapBeret"
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
            <c-men-caps-item
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
    import CMenCapsItem from './c-men-caps-item'
    import CLinkToMenTemplate from './cards-template/c-link-to-men-template'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import { mapGetters} from 'vuex'
    import { colorPicker } from "../../../../../mixins/catalog/color-picker-mixin";
    import CColorPicker from "../../../c-color-picker";
    import CCapsSubcategory from '../products/subgategories/c-caps-subcategory'
    export default {
        name: "c-men-caps",
        data(){
            return{
                sortedSubCategoryNameRus: 'Головные уборы', //имя субкатегории по русски
            }
        },

        mixins: [baseFunctionality, selectSubCategory, colorPicker],

        methods:{
            selectSubcategoryCapBaseball(selectedSubcategoryCapBaseball) {
                if(selectedSubcategoryCapBaseball === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'baseball'
                    this.sortedSubCategoryNameRus = 'Бейсболки'
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
            selectSubcategoryCapNapper(selectedSubcategoryCapNapper){
                if(selectedSubcategoryCapNapper === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'Napper'
                    this.sortedSubCategoryNameRus = 'С полями'
                    this.sortedSubCategoryStatus = false
                    // if (this.selectSubCategory.length){
                    //      this.sortedSubCategoryStatus = false
                    // }else{
                    //      this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory

                }
            },
            selectSubcategoryCapWinter(selectedSubcategoryCapWinter) {
                if(selectedSubcategoryCapWinter === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'winter'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Зимние'

                    // if (this.selectSubCategory.length){
                    //     return this.sortedSubCategoryStatus = false
                    // }else{
                    //     return this.sortedSubCategoryStatus = true
                    // }
                    return this.selectSubCategory
                }
            },
            selectSubcategoryCapBeret(selectedSubcategoryCapBeret) {
                if(selectedSubcategoryCapBeret === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'beret'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Береты'
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
            CColorPicker,
            CMenCapsItem,
            CPresentWrapper,
            CLinkToMenTemplate,
            CCapsSubcategory
        },
        computed: {
            ...mapGetters([

                "PRODUCT_MAN_CAP"
            ]),
            //Передаем геттер с выбранным товарам в переменную
            productSource: function(){
                return this.$store.getters.PRODUCT_MAN_CAP
            },

        },

    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";


</style>