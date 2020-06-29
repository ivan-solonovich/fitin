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
            <button class="btn-choose-color"  @click="selectedAll">{{ sortedSubCategoryNameRus }} всех цветов</button>
            <button class="btn-choose-color"  @click="selectedRed"><i style="color: red"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedViolet"><i style="color: violet"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedPurple"><i style="color: purple"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedMediumPurple"><i style="color: mediumpurple"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlue"><i style="color: royalblue"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedLightSeaGreen"><i style="color: LIGHTSEAGREEN"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedForestGreen"><i style="color: forestgreen"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedYellowGreen"><i style="color: yellowgreen"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedYellow"><i style="color: yellow"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedPeru"><i style="color: peru"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedOrange"><i style="color: orange"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedSaddleBrown"><i style="color: saddlebrown"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlack"><i style="color: black"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedGray"><i style="color: gray"  class="fas fa-2x fa-tshirt"></i></button>


            <button class="btn-choose-color"  @click="selectedAll">Все {{ sortedSubCategoryNameRus }} этого цвета</button>
        </div>

        <h5 class="sorted-category-status" >
            Вы ищете {{ sortedSubCategoryNameRus + ' ' +  subCategoryColorStatus }}
        </h5>

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
                sortedCategories: [], // отфильтрованные данные
                sortedCategoryStatus: false, // есть такой цвет в масиве
                sortedSubCategoryStatus: false, // субкатегория товара
                selectedSubcategoryCoatAll: false,
                sortedSubCategoryName: '', // имя субкатегории
                sortedSubCategoryNameRus: 'Верхнюю одежду', //имя субкатегории по русски
                subCategoryColorStatus: 'Любого цвета', // имя цвета по русски
                chosenColor: '', // Имя выбранного цвета по умолчанию
                subCategory: '' // субкатегория по умолчанию
            }
        },
        props:{
           type: Object,
        },

        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),
           // Выбор по субкатегории
            selectSubcategoryCoatAll(selectedSubcategoryCoatAll) {
                this.sortedCategories = []
                this.chosenColor = ''
                this.sortedSubCategoryName = ''
                this.sortedSubCategoryStatus = false
                this.sortedSubCategoryNameRus = 'Все типы верхней одежды'
                if (selectedSubcategoryCoatAll === true){

                   return this.allSubcategory
               }

            },
            selectSubcategoryCoatTopcoat(selectedSubcategoryCoatTopcoat) {
                if(selectedSubcategoryCoatTopcoat === true){

                    this.sortedCategories = []
                    this.chosenColor = ''
                    this.sortedSubCategoryName = 'topcoat'
                    this.sortedSubCategoryNameRus = 'Пальто'
                    this.sortedSubCategoryStatus = false

                    if (this.selectSubCategory.length){
                         this.sortedSubCategoryStatus = false
                    }else{
                         this.sortedSubCategoryStatus = true
                    }

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
                    if (this.selectSubCategory.length){
                         this.sortedSubCategoryStatus = false
                    }else{
                         this.sortedSubCategoryStatus = true
                    }
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

                    if (this.selectSubCategory.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            selectSubcategoryCoatCoatM(selectedSubcategoryCoatCoatM) {
                if(selectedSubcategoryCoatCoatM === true){
                    this.sortedCategories = []
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
                    if (this.selectSubCategory.length){
                        return this.sortedSubCategoryStatus = false
                    }else{
                        return this.sortedSubCategoryStatus = true
                    }
                }
            },
            // Выбор по цветам
            selectedAll: function(event){
                this.chosenColor = ''
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.subCategoryColorStatus = 'Любого цвета'
                if (this.sortedCategories.length){
                    return this.sortedCategories
                }else {
                    return this.productSource

                }
            },
            selectedRed: function (event) {
                this.sortedCategories = []
                this.chosenColor = 'red'
                this.sortedCategoryStatus = false
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //
                //     if (vm.sortedSubCategoryName.length){
                //         if (item.color === vm.chosenColor && item.subcategory === vm.sortedSubCategoryName){
                //             vm.sortedCategories.push(item)
                //
                //         }
                //     }else {
                //         if (item.color === vm.chosenColor ){
                //             vm.sortedCategories.push(item)
                //
                //         }
                //     }
                //
                //         })



            },
            selectedYellow: function (event) {
                this.sortedCategories = []
                this.chosenColor = 'yellow'
                this.sortedCategoryStatus = false
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //
                //     if (vm.sortedSubCategoryName.length){
                //         if (item.color === vm.chosenColor && item.subcategory === vm.sortedSubCategoryName){
                //             vm.sortedCategories.push(item)
                //
                //         }
                //     }else {
                //         if (item.color === vm.chosenColor ){
                //             vm.sortedCategories.push(item)
                //
                //         }
                //     }
                //
                //         })



            },
            selectedBlack: function (event) {

                this.sortedCategories = []
                this.subCategoryColorStatus = 'Черного цвета'
                this.chosenColor = 'black'
                this.sortedCategoryStatus = false
                return this.selectSubCategory
                // let vm = this;
                //
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //             if (vm.sortedSubCategoryName.length){
                //                 if (item.color === 'black' && item.subcategory === vm.sortedSubCategoryName){
                //                     vm.sortedCategories.push(item)
                //
                //                 }
                //             }else {
                //                 if (item.color === 'black' ){
                //                     vm.sortedCategories.push(item)
                //
                //                 }
                //             }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedGray: function (event) {
                this.sortedCategories = []
                this.chosenColor = 'gray'
                this.subCategoryColorStatus = 'Серого цвета'
                this.sortedCategoryStatus = false
                return this.selectSubCategory
                 // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'gray'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Серого цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (this.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedLightSeaGreen: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'lightseagreen'
                this.subCategoryColorStatus = 'сине-зеленого'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'thistle'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
                //     }
                //
                // })

                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }

            },
            selectedForestGreen: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'forestgreen'
                this.subCategoryColorStatus = 'сине-зеленого'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'thistle'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
                //     }
                //
                // })

                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }

            },
            selectedYellowGreen: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'yellowgreen'
                this.subCategoryColorStatus = 'сине-зеленого'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'thistle'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Пастельно-розового цвета'
                //     }
                //
                // })

                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }

            },
            selectedBlue: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false;
                this.chosenColor = 'royalblue'
                this.subCategoryColorStatus = 'Синего цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'blue'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Синего цвета'
                //     }
                //
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedViolet: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'violet'
                this.subCategoryColorStatus = 'Розового цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'violet'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Розового цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedSandyBrown: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'sandbrown'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedOrange: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'orange'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedPeru: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'peru'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedPurple: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'purple'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedMediumPurple: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'mediumpurple'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
            },
            selectedSaddleBrown: function (event) {
                this.sortedCategories = []
                this.sortedCategoryStatus = false
                this.chosenColor = 'saddlebrown'
                this.subCategoryColorStatus = 'Песочного цвета'
                return this.selectSubCategory
                // let vm = this;
                // this.PRODUCT_WOMAN_COAT.map(function (item) {
                //     if (item.color === 'sandbrown'){
                //         vm.sortedCategories.push(item)
                //         vm.subCategoryColorStatus = 'Песочного цвета'
                //     }
                //
                // })
                // if (vm.sortedSubCategoryName.length && vm.sortedCategories <= 0){
                //     return this.sortedCategoryStatus = true
                // }
                // if (vm.sortedCategories.length){
                //     return this.sortedCategoryStatus = false
                // }else{
                //     return this.sortedCategoryStatus = true
                // }
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
                //Передаем геттер с выбранным товарам в переменную
            productSource: function(){
                return this.$store.getters.PRODUCT_WOMAN_COAT
            },

            allSubcategory: function(){
                if (this.sortedCategories.length){
                    return this.sortedCategories
                }else {
                    return this.productSource
                }
            },

            selectSubCategory: function(){


                let vm = this
                vm.sortedCategories = []
                // Проверка при загрузке
                if(vm.sortedCategories.length === 0 && vm.sortedSubCategoryName.length === 0 && vm.chosenColor.length === 0){
                    return this.productSource // Если ничего не выбрано возвращаем все продукты
                }

                // Проверка
                if(vm.sortedSubCategoryName.length > 0 && vm.chosenColor.length > 0){ //если выбран цвет и субкатегория
                    this.productSource.map(function (item) {
                        if(item.subcategory === vm.sortedSubCategoryName && item.color === vm.chosenColor){
                            vm.sortedCategories.push(item) // кладем в масив все найденные товары
                            }
                    })
                        if (vm.sortedCategories.length > 0){ // Если есть товары в данного цвета и категоии
                            return vm.sortedCategories // Возвращаем эти товары
                        } else { // Если товаров нет
                            if (vm.sortedCategories.length === 0 && vm.chosenColor.length > 0){ //Если товаров в субкатегории нет но выбран цвет
                                vm.sortedCategories = []
                                this.productSource.map(function (item) {
                                    if( item.color === vm.chosenColor){ //Ищем товары данношо цвета
                                        vm.sortedCategories.push(item) // кладем в масив все найденные товары
                                    }
                                })

                                if (vm.sortedCategories.length){ //Если товар выдранного цвета нашелся
                                    return vm.sortedCategories, //Вернуть найденный товар выбранной категории
                                        vm.sortedSubCategoryStatus = true //Сообщение об отсуствии товара данной категории //Вернуть найденный товар выбранного цвета
                                }else if(vm.sortedCategories.length === 0 && vm.sortedSubCategoryName.length >0){
                                    vm.sortedCategories = []
                                    this.productSource.map(function (item) {
                                        if(item.subcategory === vm.sortedSubCategoryName ){
                                            vm.sortedCategories.push(item)

                                        }

                                    })
                                    if (vm.sortedCategories.length){ //Если товар данной категории нашелся

                                        return vm.sortedCategories, //Вернуть найденный товар выбранной категории
                                            vm.sortedCategoryStatus = true //Сообщение об отсуствии товара данного цвета
                                    }else {
                                        vm.sortedSubCategoryStatus = true
                                        vm.sortedCategoryStatus = true
                                        return this.productSource
                                    }
                                }
                            }else if(vm.sortedCategories.length === 0 && vm.sortedSubCategoryName.length >0){
                                this.productSource.map(function (item) {
                                    if(item.subcategory === vm.sortedSubCategoryName ){
                                        vm.sortedCategories.push(item)

                                    }

                                })
                                if (vm.sortedCategories.length){ //Если товар данной категории нашелся

                                    return vm.sortedCategories, //Вернуть найденный товар выбранной категории
                                     vm.sortedCategoryStatus = true //Сообщение об отсуствии товара данного цвета
                                }else {
                                    vm.sortedSubCategoryStatus = true
                                    vm.sortedCategoryStatus = true
                                    return this.productSource
                                }
                            }

                            return this.productSource
                        }
                }else if(vm.sortedSubCategoryName.length > 0 ){ // если выбрана только субкатегория
                     this.productSource.map(function (item) {
                        if(item.subcategory === vm.sortedSubCategoryName ){
                            vm.sortedCategories.push(item)

                        }

                    })
                    if(vm.sortedCategories.length){ // Если есть товары в субкатегории
                         return vm.sortedCategories // Возвращаем эти товары
                    }else{ // Если товаров нет возвращаем сообщение
                        return vm.sortedSubCategoryStatus = true


                    }

                }else if(vm.chosenColor.length > 0 ){ // Если выбран только цвет
                     this.productSource.map(function (item) {
                        if(item.color === vm.chosenColor ){
                            vm.sortedCategories.push(item)

                        }
                    })
                    if(vm.sortedCategories.length > 0 ){ // Если есть товары в субкатегории
                        return vm.sortedCategories // Возвращаем эти товары
                    }else{ // Если товаров нет возвращаем сообщение

                        return vm.sortedCategoryStatus = true
                    }
                }else{

                    return this.productSource

                }


            },



            filteredProducts: function(){
                if (this.sortedCategories.length){
                    return this.sortedCategories
                }else {


                    return this.productSource

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