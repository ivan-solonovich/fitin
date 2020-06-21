<template>
    <div class="c-women-category">

        <c-present-wrapper></c-present-wrapper>
        <c-link-to-women-template></c-link-to-women-template>

        <div class="c-women-category_content">
            <w-overalls></w-overalls>
            <w-cardigan></w-cardigan>
            <w-coat></w-coat>
        </div>
        <div class="c-women-category_content1">
            <w-tshirt></w-tshirt>
            <w-shirts></w-shirts>
        </div>
        <div class="c-women-category_content">
            <w-sportsuit></w-sportsuit>
            <w-hoodies></w-hoodies>

                <w-cap></w-cap>



        </div>
        <div class="c-women-category_content1">
            <w-pants></w-pants>
            <w-dress></w-dress>
        </div>
        <div class="c-women-category_content1">
            <w-jackets></w-jackets>
            <w-shoes></w-shoes>
        </div>
    </div>
</template>

<script>
    import CPresentWrapper from '../../c-present-wrapper'
    import CLinkToWomenTemplate from '../c-women-category/products/cards-template/c-link-to-women-template'
    import WOveralls from './w-overalls'
    import WCoat from './w-coat'
    import WCardigan from './w-cardigan'
    import WTshirt from './w-tshirt'
    import WShirts from './w-shirts'
    import WSportsuit from './w-sportsuit'
    import WCap from './w-cap'
    import WHoodies from './w-hoodies'
    import WPants from './w-pants'
    import WDress from './w-dress'
    import WShoes from './w-shoes'
    import WJackets from './w-jackets'


    export default {
        name: "c-women-category",
        components:{
            CPresentWrapper,
            CLinkToWomenTemplate,
            WOveralls,
            WCoat,
            WCardigan,
            WTshirt,
            WShirts,
            WSportsuit,
            WCap,
            WHoodies,
            WPants,
            WDress,
            WShoes,
            WJackets
        },


    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
        .c-women-category{

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
                text-decoration-line: none;
                text-decoration: none;
            }
            .to-women{
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