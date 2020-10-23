import {EventBus} from "../../event-bus/event-bus";
import {colorPickerScreen} from "./color-picker-screen";
import {mapGetters} from "vuex";

export const colorPicker = {
    data() {
        return {
            colorIsOpen: true,
        }
    },
    mixins: [colorPickerScreen],
    methods:{

        closeColorList:function() {
            EventBus.$emit('closeColorList', this.colorIsOpen = false)
            return this.colorIsOpen = false, console.log("close color")
        },
        openColorList: function(){
            EventBus.$emit('openColorList', this.colorIsOpen = true)
            return this.colorIsOpen = true, console.log("close color")
        },

        selectedAll: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedAll', this.selectedAll = '')
            }else {
                EventBus.$emit('selectedAll', this.selectedAll = '', this.colorIsOpen = false)
            }
        },
        selectedRed: function () {
            if(this.IS_DESKTOP === true){
                EventBus.$emit('selectedRed', this.selectedRed = 'red', )
            } else{
                EventBus.$emit('selectedRed', this.selectedRed = 'red', this.colorIsOpen = false)
            }
        },
        selectedViolet: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedViolet', this.selectedViolet = 'violet')
            } else {
                EventBus.$emit('selectedViolet', this.selectedViolet = 'violet', this.colorIsOpen = false)
            }
        },
        selectedPurple: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedPurple', this.selectedPurple = 'purple')
            } else {
                EventBus.$emit('selectedPurple', this.selectedPurple = 'purple', this.colorIsOpen = false)
            }
        },
        selectedMediumPurple: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedMediumPurple', this.selectedMediumPurple = 'mediumpurple')
            } else {
                EventBus.$emit('selectedMediumPurple', this.selectedMediumPurple = 'mediumpurple', this.colorIsOpen = false)
            }
        },
        selectedBlue: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedBlue', this.selectedBlue = 'royalblue')
            } else {
                EventBus.$emit('selectedBlue', this.selectedBlue = 'royalblue', this.colorIsOpen = false)
            }
        },
        selectedLightSeaGreen: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedLightSeaGreen', this.selectedLightSeaGreen = 'lightgreen')
            }else {
                EventBus.$emit('selectedLightSeaGreen', this.selectedLightSeaGreen = 'lightgreen', this.colorIsOpen = false)
            }
        },
        selectedForestGreen: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedForestGreen', this.selectedForestGreen = 'forestgreen')
            }else {
                EventBus.$emit('selectedForestGreen', this.selectedForestGreen = 'forestgreen', this.colorIsOpen = false)
            }
        },
        selectedYellowGreen: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedYellowGreen', this.selectedYellowGreen = 'yellowgreen')
            } else {
                EventBus.$emit('selectedYellowGreen', this.selectedYellowGreen = 'yellowgreen', this.colorIsOpen = false)
            }
        },
        selectedYellow: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedYellow', this.selectedYellow = 'yellow')
            }else {
                EventBus.$emit('selectedYellow', this.selectedYellow = 'yellow', this.colorIsOpen = false)
            }
        },
        selectedOrangeRed: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedOrangeRed', this.selectedOrangeRed = 'orangered')
            }else {
                EventBus.$emit('selectedOrangeRed', this.selectedOrangeRed = 'orangered', this.colorIsOpen = false)
            }
        },
        selectedOrange: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedOrange', this.selectedOrange = 'orange')
            }else {
                EventBus.$emit('selectedOrange', this.selectedOrange = 'orange', this.colorIsOpen = false)
            }
        },
        selectedSaddleBrown: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedSaddleBrown', this.selectedSaddleBrown = 'saddlebrown')
            }else {
                EventBus.$emit('selectedSaddleBrown', this.selectedSaddleBrown = 'saddlebrown', this.colorIsOpen = false)
            }
        },
        selectedBlack: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedBlack', this.selectedBlack = 'black')
            }else {
                EventBus.$emit('selectedBlack', this.selectedBlack = 'black', this.colorIsOpen = false)
            }
        },
        selectedGray: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedGray', this.selectedGray = 'gray')
            }else {
                EventBus.$emit('selectedGray', this.selectedGray = 'gray', this.colorIsOpen = false)
            }
        },
        selectedWhite: function () {
            if(this.IS_DESKTOP === true) {
                EventBus.$emit('selectedWhite', this.selectedWhite = 'white')
            }else {
                EventBus.$emit('selectedWhite', this.selectedWhite = 'white', this.colorIsOpen = false)
            }
        },
    },
    computed:{

    },
    created() {

        EventBus.$on('closeColorList', closeColorList => {
                if(this.IS_DESKTOP === true) {
                    return this.colorIsOpen = false
                }else {
                    return this.colorIsOpen = false
                }
        }),
        EventBus.$on('openColorList', openColorList => {
                    if(this.IS_DESKTOP === true){
                        return this.colorIsOpen = false
                    }else {
                        return this.colorIsOpen = true
                    }
        }),


        EventBus.$on('selectedAll', selectedAll => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = ''
            vm.selectedSubcategoryAll = true
            vm.subCategoryColorStatus = ''
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedRed', selectedRed => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'red'
            vm.subCategoryColorStatus = 'Красный'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedViolet', selectedViolet => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'violet'
            vm.subCategoryColorStatus = 'Розовый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedPurple', selectedPurple => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'purple'
            vm.subCategoryColorStatus = 'Фиолетовый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedMediumPurple', selectedMediumPurple => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'mediumpurple'
            vm.subCategoryColorStatus = 'CbytФиолетовый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedBlue', selectedBlue => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'royalblue'
            vm.subCategoryColorStatus = 'Синий'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedLightSeaGreen', selectedLightSeaGreen => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'lightgreen'
            vm.subCategoryColorStatus = 'зеленый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedForestGreen', selectedForestGreen => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'forestgreen'
            vm.subCategoryColorStatus = 'зеленый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedYellowGreen', selectedYellowGreen => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'yellowgreen'
            vm.subCategoryColorStatus = 'желто-зеленый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedYellow', selectedYellow => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'yellow'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedOrangeRed', selectedOrangeRed => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'orangered'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedOrange', selectedOrange => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'orange'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedSaddleBrown', selectedSaddleBrown => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'saddlebrown'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedBlack', selectedBlack => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'black'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedGray', selectedGray => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'gray'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
        EventBus.$on('selectedWhite', selectedWhite => {
            let vm = this
            vm.sortedCategories = []
            vm.chosenColor = 'white'
            vm.subCategoryColorStatus = 'желтый'
            vm.sortedCategoryStatus = false
            return vm.selectSubCategory
        })
    }
}