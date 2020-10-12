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
            'GET_LIKES_FROM_API',
            'ADD_TO_LIKE',
            'ADD_TO_CART'
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