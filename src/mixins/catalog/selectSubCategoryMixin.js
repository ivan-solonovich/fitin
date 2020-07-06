export const selectSubCategory = {
    data(){
        return{
            selected: 'ALL',
            sortedCategories: [], // отфильтрованные данные
            sortedCategoryStatus: false, // есть такой цвет в масиве
            sortedSubCategoryStatus: false, // субкатегория товара
            selectedSubcategoryAll: false,
            sortedSubCategoryName: '', // имя субкатегории
            sortedSubCategoryNameRus: '', //имя субкатегории по русски
            subCategoryColorStatus: 'Любого цвета', // имя цвета по русски
            chosenColor: '', // Имя выбранного цвета по умолчанию
            subCategory: '' // субкатегория по умолчанию
        }
    },
    methods:{
        selectSubcategoryAll(selectedSubcategoryAll) {
            this.sortedCategories = []
            this.chosenColor = ''
            this.sortedSubCategoryName = ''
            this.sortedSubCategoryStatus = false
            this.sortedSubCategoryNameRus = 'Все типы '
            if (selectedSubcategoryAll === true){

                return this.allSubcategory
            }

        },
        selectedAll: function(){
            this.chosenColor = ''
            this.sortedCategories = []
            this.sortedCategoryStatus = false
            this.subCategoryColorStatus = 'Любого цвета'
            let currentSubCategory = this.sortedSubCategoryName
            let vm = this
            this.productSource.map(function (item) {
                if(item.subcategory === vm.sortedSubCategoryName ){
                    vm.sortedCategories.push(item)

                }

            })

            if (this.sortedCategories.length){
                return this.sortedCategories
            }else {
                return this.productSource, this.sortedSubCategoryStatus = false

            }
        },
    },
    computed:{

        selectSubCategory: function(){


            let vm = this
            vm.sortedCategories = []

            // Проверка при загрузке
            if(vm.sortedCategories.length === 0 && vm.sortedSubCategoryName.length === 0 && vm.chosenColor.length === 0){
                return this.productSource, vm.sortedCategoryStatus = false, vm.sortedSubCategoryStatus = false// Если ничего не выбрано возвращаем все продукты
            }

            // Проверка
            if(vm.sortedSubCategoryName.length > 0 && vm.chosenColor.length > 0){ //если выбран цвет и субкатегория

                this.productSource.map(function (item) {
                    if(item.subcategory === vm.sortedSubCategoryName && item.color === vm.chosenColor){
                        vm.sortedCategories.push(item) // кладем в масив все найденные товары
                    }
                })
                if (vm.sortedCategories.length > 0){ // Если есть товары в данного цвета и категоии
                    return vm.sortedCategories, vm.sortedCategoryStatus = false, vm.sortedSubCategoryStatus = false// Возвращаем эти товары
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
                                vm.sortedCategoryStatus = true //Сообщение об отсуствии товара данной категории //Вернуть найденный товар выбранного цвета
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
        allSubcategory: function(){
            if (this.sortedCategories.length){
                return this.sortedCategories
            }else {
                return this.productSource
            }
        },
    },


}