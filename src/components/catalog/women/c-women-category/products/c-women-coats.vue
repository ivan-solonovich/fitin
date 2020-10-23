<template>
    <div class="c-products-wrapper">
        <!--        Меню каталога-->
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>
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


<!--        <h5 class="sorted-category-status" >-->
<!--            Вы ищете {{ sortedSubCategoryNameRus + ' ' +  subCategoryColorStatus }}-->
<!--        </h5>-->

        <h3 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу
            <br> <span>  <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов </button>

        </span>
        </h3>

        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>

        <div v-bind:class="typeOfScreens()">

            <c-women-coats-item
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

    import CWomenCoatsItem from './c-women-coats-item'

    import { selectSubCategory } from "../../../../../mixins/catalog/selectSubCategoryMixin";
    import { baseFunctionality} from "../../../../../mixins/catalog/basefunction/basefunctionality";
    import CCoatsSubcategory from './subgategories/c-coats-subcategory'

    import CColorPicker from "../../../c-color-picker";
    import {colorPicker} from "../../../../../mixins/catalog/color-picker-mixin";

    export default {
        name: "c-women-coats",
        data(){
            return{
                sortedSubCategoryNameRus: 'Верхнюю одежду', //имя субкатегории по русски
            }
        },



        mixins: [baseFunctionality, selectSubCategory, colorPicker],

        methods:{

           // Выбор по субкатегории

            selectSubcategoryCoatTopcoat(selectedSubcategoryCoatTopcoat) {
                if(selectedSubcategoryCoatTopcoat === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'topcoat'
                    this.sortedSubCategoryNameRus = 'Пальто'
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
            // Выбор по цветам


            // selectedViolet: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'violet'
            //     this.subCategoryColorStatus = 'Красно-фиолетовый'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'violet'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Розового цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedPurple: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'purple'
            //     this.subCategoryColorStatus = 'Фиолетового цвета'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'sandbrown'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Песочного цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedMediumPurple: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'mediumpurple'
            //     this.subCategoryColorStatus = 'Сине-фиолетового'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'sandbrown'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Песочного цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedBlue: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false;
            //     this.chosenColor = 'royalblue'
            //     this.subCategoryColorStatus = 'Синего'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'blue'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Синего цвета'
            //     //     }
            //     //
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedLightSeaGreen: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'lightseagreen'
            //     this.subCategoryColorStatus = 'сине-зеленого'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'thistle'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
            //     //     }
            //     //
            //     // })
            //
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //
            // },
            // selectedForestGreen: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'forestgreen'
            //     this.subCategoryColorStatus = 'зеленого'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'thistle'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
            //     //     }
            //     //
            //     // })
            //
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //
            // },
            // selectedYellowGreen: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'yellowgreen'
            //     this.subCategoryColorStatus = 'зелено-желтого'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'thistle'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
            //     //     }
            //     //
            //     // })
            //
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //
            // },
            // selectedYellow: function () {
            //     this.sortedCategories = []
            //     this.chosenColor = 'yellow'
            //     this.subCategoryColorStatus = 'желтого'
            //     this.sortedCategoryStatus = false
            //
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //
            //     //     if (vm.sortedSubCategoryName.length){
            //     //         if (item.color === vm.chosenColor && item.subcategory === vm.sortedSubCategoryName){
            //     //             vm.sortedCategories.push(item)
            //     //
            //     //         }
            //     //     }else {
            //     //         if (item.color === vm.chosenColor ){
            //     //             vm.sortedCategories.push(item)
            //     //
            //     //         }
            //     //     }
            //     //
            //     //         })
            //
            //
            //
            // },
            // selectedSandyBrown: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'sandbrown'
            //     this.subCategoryColorStatus = 'Желто-оранжевого'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'sandbrown'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Песочного цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedOrange: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'orange'
            //     this.subCategoryColorStatus = 'Оранжевого'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'sandbrown'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Песочного цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedOrangeRed: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'orangered'
            //     this.subCategoryColorStatus = 'Красно-оранжевый'
            //     return this.selectSubCategory
            //     // let vm = this;
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //     if (item.color === 'sandbrown'){
            //     //         vm.sortedCategories.push(item)
            //     //         vm.subCategoryColorStatus = 'Песочного цвета'
            //     //     }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedSaddleBrown: function () {
            //     this.sortedCategories = []
            //     this.sortedCategoryStatus = false
            //     this.chosenColor = 'saddlebrown'
            //     this.subCategoryColorStatus = 'Песочного цвета'
            //     return this.selectSubCategory
            //
            // },
            // selectedBlack: function () {
            //
            //     this.sortedCategories = []
            //     this.chosenColor = 'black'
            //     this.subCategoryColorStatus = 'Черного цвета'
            //
            //     this.sortedCategoryStatus = false
            //     return this.selectSubCategory
            //     // let vm = this;
            //     //
            //     // this.PRODUCT_WOMAN_COAT.map(function (item) {
            //     //             if (vm.sortedSubCategoryName.length){
            //     //                 if (item.color === 'black' && item.subcategory === vm.sortedSubCategoryName){
            //     //                     vm.sortedCategories.push(item)
            //     //
            //     //                 }
            //     //             }else {
            //     //                 if (item.color === 'black' ){
            //     //                     vm.sortedCategories.push(item)
            //     //
            //     //                 }
            //     //             }
            //     //
            //     // })
            //     // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
            //     //     return this.sortedCategoryStatus = true
            //     // }
            //     // if (vm.sortedCategories.length){
            //     //     return this.sortedCategoryStatus = false
            //     // }else{
            //     //     return this.sortedCategoryStatus = true
            //     // }
            // },
            // selectedGray: function () {
            //     this.sortedCategories = []
            //     this.chosenColor = 'gray'
            //     this.subCategoryColorStatus = 'Серого цвета'
            //     this.sortedCategoryStatus = false
            //     return this.selectSubCategory
            //
            // },
            // selectedWhite: function () {
            //     this.sortedCategories = []
            //     this.chosenColor = 'white'
            //     this.subCategoryColorStatus = 'Белого'
            //     this.sortedCategoryStatus = false
            //     return this.selectSubCategory
            //
            // },


        },


        components:{
            CWomenCoatsItem,
            CPresentWrapper,
            CLinkToWomenTemplate,
            CCoatsSubcategory,
            CColorPicker,
        },


        computed: {

                //Передаем геттер с выбранным товарам в переменную
            productSource: function(){
                return this.$store.getters.PRODUCT_WOMAN_COAT
            },
        },
    }

</script>

<style lang="scss">
    @import "src/assets/styles/styles";


</style>