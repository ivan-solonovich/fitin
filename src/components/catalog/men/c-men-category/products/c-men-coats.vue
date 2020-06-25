<template>
    <div class="c-products-wrapper">
        <!--        Меню каталого-->
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>
        <!--Выбор товара по подкатегории -->
        <c-coats-subcategory
                @selectedSubcategoryCoatAll="selectSubcategoryCoatAll"
                @selectedSubcategoryCoatTopcoat="selectSubcategoryCoatTopcoat"
                @selectedSubcategoryCoatDownJacket="selectSubcategoryCoatDownJacket"
                @selectedSubcategoryCoatFurCoat="selectSubcategoryCoatFurCoat"
                @selectedSubcategoryCoatCoatM="selectSubcategoryCoatCoatM"
        />


        <!--Выбор товара по цвету-->
        <div class="select-color-button-aria">
            <button class="btn-choose-color"  @click="selectedAll">Все товары</button>
            <button class="btn-choose-color"  @click="selectedRed"><i style="color: red"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlack"><i style="color: black"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedGray"><i style="color: gray"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedThistle"><i style="color: thistle"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlue"><i style="color: blue"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedViolet"><i style="color: violet"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedSandyBrown"><i style="color: sandybrown"  class="fas fa-2x fa-tshirt"></i></button>

        </div>

        <h2 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу</h2>
        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>
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
    import {mapActions, mapGetters} from "vuex";

    import CCoatsSubcategory from "../../../women/c-women-category/products/subgategories/c-coats-subcategory";
    export default {
        name: "c-men-coats",
        data() {
            return {
                selected: 'ALL',
                sortedCategories: [],
                sortedCategoryStatus: false,
                sortedSubCategoryStatus: false,
                selectedSubcategoryCoatAll: false,
                sortedSubCategoryName: '',
                productSource: []
            }
        },
        props:{
            type: Object,
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),
            productSources: function(productSource){

                this.productSource = this.PRODUCT_MAN_COAT


            },

            selectSubcategoryCoatAll(selectedSubcategoryCoatAll) {
                if (selectedSubcategoryCoatAll === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryStatus = false
                    this.sortedSubCategoryName = ''
                    if (this.sortedCategories.length){
                        return this.sortedCategories
                    }else {
                        return this.productSource
                    }
                }

            },
            selectSubcategoryCoatTopcoat(selectedSubcategoryCoatTopcoat) {
                if(selectedSubcategoryCoatTopcoat === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryName = ''
                    this.sortedSubCategoryStatus = false
                    let vm = this;
                    this.PRODUCT_MAN_COAT.map(function (item) {
                        if (item.subcategory === 'topcoat'){
                            vm.sortedCategories.push(item)
                            vm.sortedSubCategoryName = 'topcoat'
                        }

                    })
                    if (vm.sortedCategories.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            selectSubcategoryCoatDownJacket(selectedSubcategoryCoatDownJacket){
                if(selectedSubcategoryCoatDownJacket === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryName = ''
                    this.sortedSubCategoryStatus = false
                    let vm = this;
                    this.productSource.map(function (item) {
                        if (item.subcategory === 'downjacket'){
                            vm.sortedCategories.push(item)
                            vm.sortedSubCategoryName = 'downjacket'
                        }

                    })
                    if (vm.sortedCategories.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            selectSubcategoryCoatFurCoat(selectedSubcategoryCoatFurCoat) {
                if(selectedSubcategoryCoatFurCoat === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryName = ''
                    this.sortedSubCategoryStatus = false
                    let vm = this;
                    this.productSource.map(function (item) {
                        if (item.subcategory === 'furcoat'){
                            vm.sortedCategories.push(item)
                            vm.sortedSubCategoryName = 'furcoat'
                        }

                    })
                    if (vm.sortedCategories.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            selectSubcategoryCoatCoatM(selectedSubcategoryCoatCoatM) {
                if(selectedSubcategoryCoatCoatM === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryName = ''
                    this.sortedSubCategoryStatus = false
                    let vm = this;
                    this.productSource.map(function (item) {
                        if (item.subcategory === 'coatm'){
                            vm.sortedCategories.push(item)
                            vm.sortedSubCategoryName = 'coatm'
                        }

                    })
                    if (vm.sortedCategories.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            // Выбор по цветам
            selectedAll: function(event){
                this.sortedCategories = []
                this.sortedCategoryStatus = false

                if (this.sortedCategories.length){
                    return this.sortedCategories
                }else {
                    return this.productSource
                }
            },
            selectedRed: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.productSource.map(function (item) {

                    if (item.color === 'red'){
                        vm.sortedCategories.push(item)


                    }


                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedBlack: function (event) {

                this.sortedCategories = []


                this.sortedCategoryStatus = false
                let vm = this;
                this.PRODUCT_MAN_COAT.map(function (item) {
                    if (vm.sortedSubCategoryName.length){
                        if (item.color === 'black' && item.subcategory === vm.sortedSubCategoryName){
                            vm.sortedCategories.push(item)

                        }
                    }else {
                        if (item.color === 'black' ){
                            vm.sortedCategories.push(item)

                        }
                    }




                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedGray: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.productSource.map(function (item) {
                    if (item.color === 'gray'){
                        vm.sortedCategories.push(item)

                    }

                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedThistle: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.productSource.map(function (item) {
                    if (item.color === 'thistle'){
                        vm.sortedCategories.push(item)

                    }

                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedBlue: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false;
                let vm = this;
                this.productSource.map(function (item) {
                    if (item.color === 'blue'){
                        vm.sortedCategories.push(item)

                    }


                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedViolet: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.productSource.map(function (item) {
                    if (item.color === 'violet'){
                        vm.sortedCategories.push(item)

                    }

                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },
            selectedSandyBrown: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.productSource.map(function (item) {
                    if (item.color === 'sandbrown'){
                        vm.sortedCategories.push(item)

                    }

                })
                if (vm.sortedCategories.length){
                    return this.sortedCategoryStatus = false
                }else{
                    return this.sortedCategoryStatus = true
                }
            },

        },
        components:{
            CMenCoatsItem,
            CPresentWrapper,
            CLinkToMenTemplate,
            CCoatsSubcategory
        },

        computed: {
            ...mapGetters([

                "PRODUCT_MAN_COAT"
            ]),


            filteredProducts: function () {
                if (this.sortedCategories.length) {
                    return this.sortedCategories
                } else {


                    return this.productSource

                }
            },
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }
    }
</script>

<style scoped>

</style>