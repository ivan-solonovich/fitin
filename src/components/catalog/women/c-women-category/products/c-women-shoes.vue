<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>
        <c-shoes-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategorySneakers="selectSubcategorySneakers"
                @selectedSubcategoryBallet="selectSubcategoryBallet"
                @selectedSubcategorySandals="selectSubcategorySandals"
                @selectedSubcategoryBoots="selectSubcategoryBoots"
                @selectedSubcategoryAnkleBoots="selectSubcategoryAnkleBoots"
                @selectedSubcategoryFlipFlops="selectSubcategoryFlipFlops"
                @selectedSubcategorySlippers="selectSubcategorySlippers"
                @selectedSubcategoryBooties="selectSubcategoryBooties"
                @selectedSubcategoryPumps="selectSubcategoryPumps"
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
            <c-women-shoes-item
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
    import CWomenShoesItem from './c-women-shoes-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import CShoesSubcategory from './subgategories/c-shoes-subcategory'

    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
    export default {
        name: "c-women-shoes",
        data() {
            return {
                sortedSubCategoryNameRus: 'Обувь', //имя субкатегории по русски
            }

        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],
        components:{
            CWomenShoesItem,
            CPresentWrapper,
            CLinkToWomenTemplate,
            CShoesSubcategory,
            CColorPicker,
        },
        methods:{
            selectSubcategorySneakers(selectedSubcategorySneakers) {
                if(selectedSubcategorySneakers === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'sneakers'
                    this.sortedSubCategoryNameRus = 'Кроссовки'
                    this.sortedSubCategoryStatus = false
                    return this.selectSubCategory

                }
            },
            selectSubcategoryBallet(selectedSubcategoryBallet){
                if(selectedSubcategoryBallet === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'ballet'
                    this.sortedSubCategoryNameRus = 'Балетки'
                    this.sortedSubCategoryStatus = false

                    return this.selectSubCategory

                }
            },
            selectSubcategorySandals(selectedSubcategorySandals) {
                if(selectedSubcategorySandals === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'sandals'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Босоножки'


                    return this.selectSubCategory
                }
            },
            selectSubcategoryBoots(selectedSubcategoryBoots) {
                if(selectedSubcategoryBoots === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'boots'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Сапоги'

                    return this.selectSubCategory
                }
            },
            selectSubcategoryAnkleBoots(selectedSubcategoryAnkleBoots) {
                if(selectedSubcategoryAnkleBoots === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'ankle'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Ботильоны'

                    return this.selectSubCategory
                }
            },
            selectSubcategoryFlipFlops(selectedSubcategoryFlipFlops) {
                if(selectedSubcategoryFlipFlops === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'flipflops'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Шлепки'

                    return this.selectSubCategory
                }
            },
            selectSubcategorySlippers(selectedSubcategorySlippers) {
                if(selectedSubcategorySlippers === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'flipflops'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Тапочки'

                    return this.selectSubCategory
                }
            },
            selectSubcategoryBooties(selectedSubcategoryBooties) {
                if(selectedSubcategoryBooties === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'booties'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Ботинки'

                    return this.selectSubCategory
                }
            },
            selectSubcategoryRainBoots(selectedSubcategoryRainBoots) {
                if(selectedSubcategoryRainBoots === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'rain'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Резиновые сапоги'

                    return this.selectSubCategory
                }
            },
            selectSubcategoryPumps(selectedSubcategoryPumps) {
                if(selectedSubcategoryPumps === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'pumps'
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryNameRus = 'Туфли'

                    return this.selectSubCategory
                }
            },

        },

        computed: {

            productSource: function(){
                return this.$store.getters.PRODUCT_WOMAN_SHOES
            },

        },


    }
</script>

<style lang="scss">

</style>