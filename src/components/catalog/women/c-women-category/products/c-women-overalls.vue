<template>
    <div class="c-products-wrapper">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>
        <c-overalls-subcategory
                @selectedSubcategoryAll="selectSubcategoryAll"
                @selectedSubcategoryOverallsJeans="selectSubcategoryOverallsJeans"
                @selectedSubcategoryOverallsTextill="selectSubcategoryOverallsTextill"
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
        <c-women-overalls-item
                v-for="product in filteredProducts"
                :key="product.article"
                v-bind:product_data="product"

        />
        <h2 v-if="filteredProducts.length <= 0">Доступные товары ещe не поступили в эту категорию</h2>
        </div>

    </div>
</template>

<script>
    import CPresentWrapper from '../../../c-present-wrapper'
    import CWomenOverallsItem from './c-women-overalls-item'
    import CLinkToWomenTemplate from './cards-template/c-link-to-women-template'
    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import { mapGetters } from "vuex";
    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";
    import COverallsSubcategory from "../products/subgategories/c-overalls-subcategory"
    export default {
        name: "c-women-overalls",
        data(){
            return{
                sortedSubCategoryNameRus: 'Комбинезон', //имя субкатегории по русски
            }
        },
        mixins: [baseFunctionality, selectSubCategory, colorPicker],
        components:{
            CWomenOverallsItem,
            CPresentWrapper,
            CLinkToWomenTemplate,
            CColorPicker,
            COverallsSubcategory
        },
        methods:{

            selectSubcategoryOverallsJeans(selectedSubcategoryOverallsJeans) {
                if(selectedSubcategoryOverallsJeans === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'jeans'
                    this.sortedSubCategoryNameRus = 'Джинсовый'
                    this.sortedSubCategoryStatus = false
                    return this.selectSubCategory

                }
            },
            selectSubcategoryOverallsTextill(selectSubcategoryOverallsTextill){
                if(selectSubcategoryOverallsTextill === true){
                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'textile'
                    this.sortedSubCategoryNameRus = 'Текстильный'
                    this.sortedSubCategoryStatus = false

                    return this.selectSubCategory

                }
            },

        },
        computed: {
            ...mapGetters([

                "PRODUCT_WOMAN_OVERALLS"
            ]),
            productSource: function(){
                return this.$store.getters.PRODUCT_WOMAN_OVERALLS
            },
        },


    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
</style>