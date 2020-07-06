import {mapActions} from "vuex";

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
        ]),

    },
    computed: {
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