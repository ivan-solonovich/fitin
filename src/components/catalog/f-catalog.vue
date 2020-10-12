<template>
    <div class="f-catalog-main">

    <c-present-wrapper class="c-present-wrapper"></c-present-wrapper>


    <c-women class="c-women"></c-women>


     <c-men class="c-men"></c-men>

     <c-children class="c-children"></c-children>

     <c-hot class="c-hot"></c-hot>






    </div>
</template>

<script>
    import CWomen from '../catalog/women/c-women'
    import CMen from '../catalog/men/c-men'
    import CChildren from '../catalog/children/c-children'
    import CHot from '../catalog/hot/c-hot'
    import CPresentWrapper from '../catalog/c-present-wrapper'

    export default {
        name: "f-catalog",
        components: {
            CPresentWrapper,
            CWomen,
            CMen,
            CChildren,
            CHot,

        },

    }
</script>

<style lang="scss">
    .f-catalog-main{
        display: grid;
        grid-template-areas:
                "c-present-wrapper c-present-wrapper c-present-wrapper c-present-wrapper c-present-wrapper"
                "c-women c-women c-women c-men c-men"
                "c-women c-women c-women c-children c-children"
                "c-hot c-hot c-hot c-hot c-hot";


    }
    .c-present-wrapper{
        grid-area: c-present-wrapper;
    }
    .c-women{
        grid-area: c-women;
    }
    .c-men{
        grid-area: c-men;
    }
    .c-children{
        grid-area: c-children;
    }
    .c-hot{
        grid-area: c-hot;
    }
    @media(max-width: 800px){
        .f-catalog-main{
            display: grid;
            grid-template-areas:
                    "c-present-wrapper"
                    "c-women"
                    "c-men"
                    "c-children"
                    "c-hot";


        }
    }
</style>