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
            <span class="f-menu_icons_items scale"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="crimson"><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></span>
            <span class="f-menu_icons_items scale"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12z"/></g><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" /></svg>  </span>
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