<template>
    <div class="c-products-wrapper">
<!--        Меню каталого-->
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>
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
        </div>

        <h2 class="sorted-category-status" v-if="sortedCategoryStatus === true">
            Товар данного цвета еще не поступил в продажу</h2>
        <h2 class="sorted-category-status" v-if="sortedSubCategoryStatus === true">
            Товар данного типа еще не поступил в продажу</h2>
        <div class="card-container">

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
    // import CColorSelect from "../../../c-color-select"
    import CCoatsSubcategory from './subgategories/c-coats-subcategory'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "c-women-coats",
        data() {
            return {
                // categories: [
                //     {name: 'Все', value: 'ALL'},
                //     {name: 'Красный', value: 'red'},
                //     {name: 'Черный', value: 'black'},
                //     {name: 'Серый', value: 'gray'},
                //     {name: 'Вельвет', value: 'red violet'},
                //     {name: 'Синий', value: 'blue'},
                //
                // ],

                selected: 'ALL',
                sortedCategories: [],
                sortedCategoryStatus: false,
                sortedSubCategoryStatus: false,
                selectedSubcategoryCoatAll: false,
                sortedSubCategoryName: '',



            }


        },
        props:{
           type: Object,


        },

        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),
            // optionSelect(option){
            //     this.selected = option.name
            // },
            // sortedByCategories: function (category,) {
            //     this.sortedCategories = [];
            //     let vm = this;
            //
            //     this.PRODUCT_WOMAN_COAT.map(function (item) {
            //         if (item.color === category.value){
            //             vm.sortedCategories.push(item);
            //         }
            //     })
            //     this.selected = category.name
            //
            // },
            selectSubcategoryCoatAll(selectedSubcategoryCoatAll) {
               if (selectedSubcategoryCoatAll === true){
                   this.sortedCategories = []
                   this.sortedSubCategoryStatus = false
                   this.sortedSubCategoryName = ''
                   if (this.sortedCategories.length){
                       return this.sortedCategories
                   }else {
                       return this.PRODUCT_WOMAN_COAT
                   }
               }

            },
            selectSubcategoryCoatTopcoat(selectedSubcategoryCoatTopcoat) {
                if(selectedSubcategoryCoatTopcoat === true){
                    this.sortedCategories = []
                    this.sortedSubCategoryName = ''
                    this.sortedSubCategoryStatus = false
                    let vm = this;
                    this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                    this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                    this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                    this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                    return this.PRODUCT_WOMAN_COAT
                }
            },
            selectedRed: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                let vm = this;
                this.PRODUCT_WOMAN_COAT.map(function (item) {

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
                this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                this.PRODUCT_WOMAN_COAT.map(function (item) {
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
                this.PRODUCT_WOMAN_COAT.map(function (item) {
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

        },
        components:{
            CWomenCoatsItem,
            CPresentWrapper,
            CLinkToWomenTemplate,
            // CColorSelect,
            CCoatsSubcategory
        },

        computed: {
            ...mapGetters([

               "PRODUCT_WOMAN_COAT"
            ]),



            filteredProducts: function(){
                if (this.sortedCategories.length){
                    return this.sortedCategories
                }else {


                    return this.PRODUCT_WOMAN_COAT

                }
            },


        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();

        }

    }

</script>

<style lang="scss">
    @import "src/assets/styles/styles";
    .select-color-button-aria{
        padding: 1rem;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-choose-color{
            margin: 5px;
            height: 35px;
            background-color: #fff;
            border: gray solid 1px;
            border-radius: 5px;
        }
        .btn-choose-color:hover{
            border: $mark solid 2px;
        }
    }
    .sorted-category-status{
        text-align: center;
        padding: 2rem;
    }

</style>