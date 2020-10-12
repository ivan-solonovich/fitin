import axios from "axios";

export default {

    GET_PRODUCTS_FROM_API({commit}){
        return axios('http://localhost:3000/products/', {
            method: "GET"
        })
            .then(( products  ) => {

                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {

                console.log(error);
                return error;
            })
    },
    GET_LIKES_FROM_API({commit}){
        return axios('http://localhost:3000/likes/', {
            method: "GET"
        })
            .then(( likes  ) => {
                commit('SET_LIKES_TO_STATE', likes.data);
                return likes;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    ADD_TO_LIKE_DATA({commit}, product_data){
        axios.post('http://localhost:3000/likes/', product_data)
            .then(product_data => commit('SET_LIKE', product_data))
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            })


    },
    ADD_TO_LIKE({commit}, product){
        commit('SET_LIKE', product);
    },
    ADD_TO_CART({commit}, product){
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index){
        commit('REMOVE_FROM_CART', index)

    },
    INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
    },
    SET_MOBILE({commit}){
        commit('SWITCH_MOBILE')
    },
    SET_DESKTOP({commit}){
        commit('SWITCH_DESKTOP')
    },
    SET_TABLET({commit}){
        commit('SWITCH_TABLET')
    },
}
