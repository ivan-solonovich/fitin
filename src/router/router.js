import Vue from 'vue'
import VueRouter from 'vue-router'
import FCatalog from '../components/catalog/f-catalog'
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
                path: '/women',
                name: 'women',
                component: CWomenCategory
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
                component: CMenCategory
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