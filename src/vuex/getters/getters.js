export default {
    // PRODUCTS(state){
    //     return state.products;
    // },
    // PRODUCTS_WOMAN(state){
    //
    //                 return  state.products.filter(products => products.type === 'woman');
    // },
    PRODUCT_WOMAN_COAT(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'Coat'));
    },

    PRODUCT_WOMAN_CAP(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'cap'));
    },
    PRODUCT_WOMAN_OVERALLS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'Комбинезон'));
    },
    PRODUCT_WOMAN_CARDIGANS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'cardigan'));
    },
    PRODUCT_WOMAN_TSHIRT(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 't-short'));
    },
    PRODUCT_WOMAN_TSHIRT_RED(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 't-short'
        && products.color === 'red'));
    },
    PRODUCT_WOMAN_SHOES(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'shoes'));
    },
    PRODUCT_WOMAN_JACKETS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'jacket'));
    },
    PRODUCT_WOMAN_SHIRTS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'shirt'));
    },
    PRODUCT_WOMAN_HOODIES(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'hoodies'));
    },
    PRODUCT_WOMAN_PANTS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'pants'));
    },
    PRODUCT_WOMAN_DRESS(state){

        return  state.products.filter(products => (products.type === 'woman' && products.category === 'dress'));
    },
    PRODUCT_MAN_OVERALLS(state){

        return  state.products.filter(products => (products.type === 'man' && products.category === 'Комбинезон'));
    },
    PRODUCT_MAN_COAT(state){

        return  state.products.filter(products => (products.type === 'man' && products.category === 'Coat'));
    },
    CART(state) {
        return state.cart;
    },
    LIKES(state){
        return state.likes;
    }
}