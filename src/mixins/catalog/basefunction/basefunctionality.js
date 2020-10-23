import {mapActions, mapGetters} from "vuex";

export const baseFunctionality={
    data() {
        return {

        }
    },
    props:{
        type: Object,
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'GET_LIKES_FROM_API',
            'ADD_TO_LIKE',
            'ADD_TO_CART'
        ]),
        // The control of screen's parametres for card-container in catalog
        typeOfScreens() {
            let vm = this;
            if(vm.IS_MOBILE === true){
                vm.typeOfScreen = 'card-container-mobile', console.log("Я мобила")
                return vm.typeOfScreen

            } else
            if(this.IS_TABLET === true){
                vm.typeOfScreen = 'card-container-tablet', console.log("Я планшет")
                return vm.typeOfScreen
            }else
            if(vm.IS_DESKTOP === true){
                vm.typeOfScreen = 'card-container', console.log("Я комп")
                return vm.typeOfScreen
            }else {
                vm.typeOfScreen = 'card-container-mobile'
                return vm.typeOfScreen
            }
        },

    },
    computed: {
        ...mapGetters([
            "IS_DESKTOP",
            "IS_TABLET",
            "IS_MOBILE",


        ]),
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