<template>
    <div class="f-menu">
        <div class="f-menu_logo ">
            <router-link :to="{name:'present'}">
                <div class="f-menu_logo_box ">
                    <p class="logo">FIT - IN</p>
                </div>
            </router-link>
        </div>
        <div class="f-menu_nav ">
            <ul>
                <router-link :to="{name:'present'}">
                    <li>ГЛАВНАЯ</li>
                </router-link>

                <li>ПОДОБРАТЬ</li>
                <router-link to="catalog">
                    <li>КАТАЛОГ</li>
                </router-link>
                <router-link to="hot">
                <li>В ТРЕНДЕ</li>
                </router-link>
                <li>КОНТАКТЫ</li>
            </ul>
        </div>
        <div class="f-menu_icons ">
            <span class="f-menu_icons_items scale"><i class="fal fa-search"></i></span>
            <span class="f-menu_icons_items scale"> <i class="fad fa fa-heart"> </i> </span>
            <span class="f-menu_icons_items scale"><i class="fal fa-shopping-bag"></i>
                <span class="f-menu_icons_items_number">1</span>
            </span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "f-menu"

    }
</script>

<!--suppress CssInvalidPropertyValue -->
<style lang="scss">

    .f-menu{
        width: 100%;
        padding-bottom: 1rem;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        text-decoration: none;

        a{
            text-decoration: none;
            &:visited {
                color: black;
            }
            &:active{
                background-color: $mark;
                color: white;
            }
        }
        &_logo_box{

            border: black solid 1px;
            .logo{
                color: $mark;
                padding: $p-1;
                margin: $m-1;
                text-decoration: none;
            }
        }
        &_nav{

            ul{
                width: 100%;
                display: flex;
                justify-content: space-around;
                list-style: none;
                li{
                    padding-right: $p-1*2;
                    margin-right: $m-1=2;
                    &:hover{
                        color: $mark;
                    }
                    cursor: pointer;
                }
            }
        }
        &_icons{
            max-width: 150px;
            display: flex;
            justify-content: space-around;
            padding: $p-1;
            &_items{
                padding-right: $p-1*2;
                &:hover{

                    color: $mark;
                    font-size: 110%;

                }
                &_number{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    /*margin-left: .5rem;*/
                    /*margin-right: .5rem;*/
                    font-size: .7rem;
                    vertical-align: text-top;


                }
            }

        }





    }
</style>