<template>
    <div class="c-men-category">
        <c-present-wrapper></c-present-wrapper>
        <c-link-to-men-template></c-link-to-men-template>

        <div class="c-men-category_content">
            <m-overalls></m-overalls>
            <m-cardigangs></m-cardigangs>
            <m-coats></m-coats>
         </div>
        <div class="c-women-category_content1">
            <m-shirt></m-shirt>
            <m-tshirt></m-tshirt>
        </div>
        <div class="c-men-category_content">
            <m-hoodies></m-hoodies>
            <m-cap></m-cap>
            <m-sportsuit></m-sportsuit>
        </div>
        <div class="c-women-category_content1">
            <m-pants></m-pants>
            <m-jackets></m-jackets>
        </div>
    </div>
</template>

<script>
    import CPresentWrapper from '../../c-present-wrapper'
    import CLinkToMenTemplate from './products/cards-template/c-link-to-men-template'
    import MOveralls from '../c-men-category/m-overalls'
    import MCardigangs from '../c-men-category/m-cardigans'
    import MCoats from '../c-men-category/m-coats'
    import MShirt from '../c-men-category/m-shirt'
    import MTshirt from "./m-tshirt"
    import MSportsuit from "./m-sportsuit"
    import MHoodies from '../c-men-category/m-hoodies'
    import MCap from "./m-cap"
    import MPants from "./m-pants"
    import MJackets from "./m-jackets"
    export default {
        name: "c-men-category",
        components:{
            MTshirt,
            CPresentWrapper,
            CLinkToMenTemplate,
            MOveralls,
            MCardigangs,
            MCoats,
            MShirt,
            MSportsuit,
            MHoodies,
            MCap,
            MPants,
            MJackets

        }
    }
</script>

<style lang="scss">
    .c-men-category{
        &_content{
            width: 100%;

            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;

        }
        &_content1{
            width: 100%;

            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
        }
        a{
            color: black;

            text-decoration: none;
        }
        .to-men{
            display: flex;

            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;



            h2{

                padding: 6px;
                border: $mark solid 1px;
                text-transform: uppercase;
            }
        }
    }
</style>