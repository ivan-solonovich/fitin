import Vue from 'vue'
import VueRouter from 'vue-router'
import FCatalog from '../components/catalog/f-catalog'
import CLikes from '../components/likes/c-likes'
import FPresentWrapper from '../components/present/f-present-wrapper'
//CATEGORIES
import CMenCategory from '../components/catalog/men/c-men-category/c-men-category'
import CWomenCategory from '../components/catalog/women/c-women-category/c-women-category'
import CChildrenCategory from '../components/catalog/children/c-children-category/c-children-category'
import CHotCategory from '../components/catalog/hot/c-hot-category/c-hot-category'

// WOMEN
import CWomenOveralls from '../components/catalog/women/c-women-category/products/c-women-overalls'
import CWomenCoats from '../components/catalog/women/c-women-category/products/c-women-coats'
import CWomenCaps from '../components/catalog/women/c-women-category/products/c-women-caps'
import CWomenCardigans from '../components/catalog/women/c-women-category/products/c-women-cardigans'
import CWomenTshirt from '../components/catalog/women/c-women-category/products/c-women-tshirt'
import CWomenShoes from '../components/catalog/women/c-women-category/products/c-women-shoes'
import CWomenJackets from '../components/catalog/women/c-women-category/products/c-women-jackets'
import CWomenShirts from '../components/catalog/women/c-women-category/products/c-women-shirts'
import CWomenHoodies from '../components/catalog/women/c-women-category/products/c-women-hoodies'
import CWomenPants from '../components/catalog/women/c-women-category/products/c-women-pants'
import CWomenDress from '../components/catalog/women/c-women-category/products/c-women-dress'
//MEN
import CMenOveralls from '../components/catalog/men/c-men-category/products/c-men-overalls'
import CMenCoats from '../components/catalog/men/c-men-category/products/c-men-coats'
import CMenCardigans from '../components/catalog/men/c-men-category/products/c-men-cardigans'
import CMenCaps from '../components/catalog/men/c-men-category/products/c-men-caps'
import CMenHoodies from '../components/catalog/men/c-men-category/products/c-men-hoodies'
import CMenTshirt from '../components/catalog/men/c-men-category/products/c-men-tshirt'
Vue.use(VueRouter)

const router = new VueRouter(
    {
        routes:[
            {
                path: '/',
                name: 'present',
                component: FPresentWrapper
            },
            {
                path: '/catalog/',
                name: 'catalog',
                component: FCatalog,


            },
            {
                path: '/likes/',
                name: 'likes',
                component: CLikes,
                beforeRouteUpdate (to, from, next) {
                    return this.$store.getters.LIKES;

                },
            },
            {
                path: '/women',
                name: 'women',
                component: CWomenCategory,
                meta:{sortedCategoryStatus: false, sortedSubCategoryStatus: false}
            },
            {
                path: '/catalog-woman-overalls',
                name: 'cw-overalls',
                component: CWomenOveralls,
            },
            {
                path: '/catalog-woman-coats',
                name: 'cw-coats',
                component: CWomenCoats,
            },
            {
                path: '/catalog-woman-cap',
                name: 'cw-cap',
                component: CWomenCaps,
            },
            {
                path: '/catalog-woman-tshirt',
                name: 'cw-tshirt',
                component: CWomenTshirt,
            },
            {
                path: '/catalog-woman-shoes',
                name: 'cw-shoes',
                component: CWomenShoes,
            },
            {
                path: '/catalog-woman-jackets',
                name: 'cw-jackets',
                component: CWomenJackets,
            },
            {
                path: '/catalog-women-shirts',
                name: 'cw-shirts',
                component: CWomenShirts,
            },
            {
                path: '/catalog-woman-cardigans',
                name: 'cw-cardigans',
                component: CWomenCardigans,
            },
            {
                path: '/catalog-woman-hoodies',
                name: 'cw-hoodies',
                component: CWomenHoodies,
            },
            {
                path: '/catalog-woman-pants',
                name: 'cw-pants',
                component: CWomenPants,
            },
            {
                path: '/catalog-woman-dress',
                name: 'cw-dress',
                component: CWomenDress,
            },
            {
                path: '/men',
                name: 'men',
                component: CMenCategory,
                meta:{sortedCategoryStatus: false, sortedSubCategoryStatus: false}
            },

            {
                path: '/catalog-men-overalls',
                name: 'cm-overalls',
                component: CMenOveralls

            },
            {
                path: '/catalog-men-coats',
                name: 'cm-coats',
                component: CMenCoats

            },
            {
                path: '/catalog-men-cardigans',
                name: 'cm-cardigans',
                component: CMenCardigans

            },
            {
                path: '/catalog-man-cap',
                name: 'cm-cap',
                component: CMenCaps,
            },
            {
                path: '/catalog-man-hoodies',
                name: 'cm-hoodies',
                component: CMenHoodies,
            },
            {
                path: '/catalog-man-tshirt',
                name: 'cm-tshirt',
                component: CMenTshirt,
            },
            {
                path: '/children',
                name: 'children',
                component: CChildrenCategory
            },
            {
                path: '/hot',
                name: 'hot',
                component: CHotCategory
            }

            // {
            //     path: '/cart',
            //     name: 'cart',
            //     component: chCart,
            //     props: true
            // }
        ]
    }
)

export default router;