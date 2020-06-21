<template>
    <div class="f-main-wrapper">
        <f-menu></f-menu>
        <keep-alive>

            <router-view></router-view>

        </keep-alive>
<!--    Menu container    -->

<!--        presenrt container-->
<!--        <f-present-wrapper></f-present-wrapper>-->
<!--        <f-catalog></f-catalog>-->
    </div>
</template>

<script>
                //   import components
     import FMenu from './menu-container/f-menu'
     // import FPresentWrapper from './present/f-present-wrapper'
//     import FCatalog from './catalog/f-catalog'

    export default {
        name: "f-main-wrapper",
        components:{
             FMenu,
             // FPresentWrapper,
            // FCatalog
        }
    }
</script>

<style lang="scss">
.f-main-wrapper{
    max-width: 1920px;

}
</style>