import { mapGetters } from "vuex";

export const colorPickerScreen = {
    data() {
        return {

        }
    },
    props:{
        type: Object,
    },
    // The control of screen's parametres for card-container in catalog
    methods:{
        colorPickerScreen() {
            let vm = this;
            if(vm.IS_MOBILE === true){
                vm.colorPickerScreenType = 'с-color-picker-mobile', console.log("Я мобила color")
                return vm.colorPickerScreenType

            } else
            if(vm.IS_TABLET === true){
                vm.colorPickerScreenType = 'с-color-picker-tablet', console.log("Я планшет color")
                return vm.colorPickerScreenType
            }else
            if(vm.IS_DESKTOP === true){
                vm.colorPickerScreenType = 'с-color-picker', console.log("Я комп color")
                return vm.colorPickerScreenType
            }else {
                vm.colorPickerScreenType = 'с-color-picker-mobile'
                return vm.colorPickerScreenType
            }
        },
    },
    computed: {
        ...mapGetters([
            "IS_DESKTOP",
            "IS_TABLET",
            "IS_MOBILE"
        ]),
    }

}