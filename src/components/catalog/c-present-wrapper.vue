<template>
    <div class="c-present-wrapper">
        <div class="c-present-wrapper_presentation_box">

            <div class="c-present-wrapper_presentation_box_title">
                <p class="c-present-wrapper_presentation_box_title_subtitle">
                    #Новая летняя коллекция 2020
                </p>
                <router-link :to="{name:'catalog'}">
                <h2 class="c-present-wrapper_presentation_box_title_main">Каталог</h2>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "c-present-wrapper"
    }
</script>

<style lang="scss">
    .c-present-wrapper{
    &_presentation_box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: $bgc-content;
        max-height: 40vh;
        padding-bottom: 1vh;
        margin-bottom: 1vh;
        /*&_image{*/
        /*    display: flex;*/
        /*    justify-content: flex-end;*/
        /*    flex-basis: 20%;*/

        /*    &_prop{*/
        /*        height: 20vh;*/
        /*    }*/
        /*}*/
        &_title{
            flex-basis: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            a{

                text-decoration-line: none;
                text-decoration: none;
            }
            &_subtitle{
                font-size: 0.7rem;
                text-align: center;
                text-transform: uppercase;
            }
            h2{
                color: $mark;
                margin-top: .5rem;
                width: 100%;
                background-color: $bgc-content;
                font-size: 3rem;
                text-align: center;
                text-transform: uppercase;
                margin-block-end: .2rem;
            }
            /*&_menu{*/
            /*    display: flex;*/
            /*    justify-content: space-between;*/
            /*    font-size: .5rem;*/
            /*    list-style: none;*/
            /*    text-decoration: none;*/
            /*}*/
        }
    }
    }
</style>