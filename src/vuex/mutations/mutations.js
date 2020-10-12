export default {

    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_LIKES_TO_STATE: (state, likes) => {
        state.likes = likes;
    },

    SET_CART: (state, product )=> {
        if(state.cart.length){
            let isProductExists = false;
            state.cart.map(function (item) {
                if(item.article === product.article){
                    isProductExists = true;
                    item.quantity++;
                }
            })
            if(!isProductExists){
                state.cart.push(product);
            }
        }
        else {
            state.cart.push(product);
        }

    },
    SET_LIKE: (state, product_data) => {
        state.likes.push(product_data);
    },

    REMOVE_FROM_CART: (state, index ) => {
        state.cart.splice(index, 1);

    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {

        // state.cart[index].quantity--;
        --state.cart[index].quantity < 1 && state.cart.splice(index, 1)
    },
    SWITCH_MOBILE: (state) => {
        state.isMobile = true;
        state.isTablet = false;
        state.isDesktop = false;
    },
    SWITCH_TABLET: (state) => {
        state.isMobile = false;
        state.isTablet = true;
        state.isDesktop = false;
    },
    SWITCH_DESKTOP: (state) => {
        state.isMobile = false;
        state.isTablet = false;
        state.isDesktop = true;
    },
}