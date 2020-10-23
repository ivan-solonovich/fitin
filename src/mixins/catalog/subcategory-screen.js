import { mapGetters } from "vuex";

export const subcategoryScreen = {
    data() {
        return {

        }
    },
    props:{
        type: Object,
    },
    // The control of screen's parametres for card-container in catalog
    methods:{
        typeOfScreens() {
            let vm = this;
            if(vm.IS_MOBILE === true){
                vm.typeOfScreen = 'с-subcategory-mobile', console.log("Я мобила")
                return vm.typeOfScreen

            } else
            if(this.IS_TABLET === true){
                vm.typeOfScreen = 'с-subcategory-tablet', console.log("Я планшет")
                return vm.typeOfScreen
            }else
            if(vm.IS_DESKTOP === true){
                vm.typeOfScreen = 'с-subcategory', console.log("Я комп")
                return vm.typeOfScreen
            }else {
                vm.typeOfScreen = 'с-subcategory-mobile'
                return vm.typeOfScreen
            }
        },

    }

}