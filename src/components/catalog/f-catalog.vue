<template>
    <div class="f-catalog-main">

        <c-present-wrapper></c-present-wrapper>

        <div class="f-catalog-main--wrapper">

                <c-women></c-women>
            <div class="f-catalog-main--wrapper_second">
                <c-men></c-men>
                <c-children></c-children>
            </div>
            <c-hot></c-hot>

        </div>


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


        .f-catalog-main-wrapper {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: .5rem;


            justify-content: center;
            &_second{
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>