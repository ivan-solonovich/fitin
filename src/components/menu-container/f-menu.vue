<template>
    <div>
    <div v-if="IS_DESKTOP" class="f-menu">

        <f-menu-logo/>

        <f-menu-nav/>

        <f-menu-icon/>


    </div>
        <div v-if="IS_TABLET" class="f-menu_tab">

            <f-menu-logo/>

            <f-menu-nav/>

            <f-menu-icon/>
        </div>

        <div v-if="IS_MOBILE" class="f-menu-nav-mobile">

            <f-menu-logo/>

            <f-menu-nav-mobile class="f-menu-nav-mobile"/>

            <f-menu-icon class="f-menu-nav-mobile_icons"/>
        </div>

    </div>
</template>

<script>
    import { gsap } from 'gsap';
    import {mapGetters} from "vuex";
    import FMenuLogo from "./logo/f-menu-logo.vue"
    import FMenuIcon from "./icon/f-menu_icons.vue"
    import FMenuNav from "./nav/f-menu-nav"
    import FMenuNavMobile from "./nav/f-menu-nav-mobile";

    export default {
        name: "f-menu",
        components: {
            FMenuNavMobile,
            FMenuLogo,
            FMenuIcon,
            FMenuNav,

        },
        data() {
            return{

                device: '',

            }
        },
        computed: {
            ...mapGetters([
                'IS_TABLET',
                "IS_MOBILE",
                "IS_DESKTOP"
            ]),

        },
        mounted() {
            gsap.from(".f-menu_logo_box",  {y: -100, delay:2, duration: 2});

            if (this.IS_TABLET === true){

                gsap.to(".f-menu_logo_box",   { scaleX:1.5, scaleY:1.5, delay:2, duration: 2 });
            }
            if(this.IS_MOBILE === true){
                gsap.from(".f-menu-nav-mobile", { y: -100, scaleX:1.1, scaleY:1.1, delay:1, duration: 2 })
            }

            gsap.from(".f-menu_nav", {x: 1920, duration: 2});
            gsap.from(".f-menu_icons", {x: 1920, delay:2, duration:1});
        }

    }
</script>

<!--suppress CssInvalidPropertyValue -->
<style lang="scss">

    .f-menu{
        width: 100%;
        padding-bottom: 1rem;
        display: grid;
        grid-template-areas:
                "f-menu_logo f-menu_nav f-menu_icons";
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
        &_logo_wrapper{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &_logo_box{
            width: 90px;
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
            max-width: 100%;
            display: flex;
            justify-content: center;
            padding: $p-1;
            &_container{
                display: flex;
                justify-content: center;
                align-items: center;
            }
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
    .f-menu_icons{
        grid-area: f-menu_icons;
    }

     .f-menu_nav{
        grid-area: f-menu_nav;
     }
     .f-menu_logo{
         grid-area: f-menu_logo;
     }



    }
    .f-menu_tab{
        width: 100%;
        padding-top: 2.3rem;
        padding-bottom: 1rem;
        display: grid;
        grid-template-areas:
                "f-menu_logo f-menu_nav "
                "f-menu_logo f-menu_icons"
               ;
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
        &_logo_wrapper{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &_logo_box{
            width: 180 px;

            border: black solid 1px;
            .logo{
                color: $mark;
                padding: $p-1*2;
                margin: $m-1*2;
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
            max-width: 100%;
            display: flex;
            justify-content: center;
            padding: $p-1;
            &_container{
                display: flex;
                justify-content: center;
                align-items: center;
            }
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
        .f-menu_icons{
            grid-area: f-menu_icons;
        }

        .f-menu_nav{
            grid-area: f-menu_nav;
        }
        .f-menu_logo{
            grid-area: f-menu_logo;
        }



    }
    .f-menu-nav-mobile{
        max-height: 45px;
        width: 100%;
        padding-bottom: 1rem;
        display: grid;
        grid-template-areas:
                "f-menu_logo f-menu-nav-mobile f-menu_icons";
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
        &_logo_wrapper{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &_logo_box{
            width: 35px;
            border: black solid 1px;
            .logo{
                color: $mark;
                padding: $r-1;
                margin: $r-1;
                text-decoration: none;
            }
        }
        .f-menu-nav-mobile_icon{
            padding-top: 4px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .f-menu-nav-mobile_icon{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;

                    cursor: pointer;

            }
        }
        .f-menu-nav-mobile_icons{

            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: $p-1;
            &_container{
                padding-top: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &_items{
                padding-right: $p-1;
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

        .f-menu-nav-mobile{
            grid-area: f-menu-nav-mobile;
        }

    }
</style>