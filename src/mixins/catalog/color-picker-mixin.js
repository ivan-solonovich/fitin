import {EventBus} from "../../event-bus/event-bus";

export const colorPicker = {
    created() {
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