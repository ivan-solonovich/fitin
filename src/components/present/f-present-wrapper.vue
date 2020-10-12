<template>
    <div>
    <div v-if="IS_DESKTOP" class="f-present-wrapper">
        <div class="f-present-wrapper_image_container">
            <img class="f-present-wrapper_image" src="/images/model_1_small.png" alt="">
        </div>
        <div class="f-present-wrapper_content_container">
            <p># ВСЕ ТРЕНДЫ 2020</p>
            <div style="text-align: center">
                <h1 >СОБЕРИ ИДЕАЛЬНЫЙ СТИЛЬ</h1>
            </div>


            <div>
                <Media class="media"
                        :kind="'video'"
                        :isMuted="(false)"
                        :src="'./videos/present.mp4'"
                        :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
                        :autoplay="true"
                        :controls="true"
                        :loop="false"
                        @pause="handle"
                        :ref="'video_player'"
                        width="600"
                ></Media>
            </div>
            <div>
                <p class="f-present-wrapper_button"> НАЧАТЬ ПОДБОР </p>
            </div>
        </div>

    </div>
    <div v-if="IS_MOBILE" class="f-present-wrapper-mobile">
           <div class="f-present-wrapper-mobile_image_container">
                <img class="f-present-wrapper-mobile_image" src="/images/model_1_small.png" alt="">
            </div>
            <div class="f-present-wrapper-mobile_content_container">
                <p># ВСЕ ТРЕНДЫ 2020</p>
                <h1>СОБЕРИ ИДЕАЛЬНЫЙ СТИЛЬ</h1>
                <div>
                    <Media
                            :kind="'video'"
                            :isMuted="(false)"
                            :src="'./videos/present.mp4'"
                            :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
                            :autoplay="true"
                            :controls="true"
                            :loop="false"
                            @pause="handle"
                            :ref="'video_player'"
                            width="300"
                    ></Media>
                </div>
                <div>
                    <p class="f-present-wrapper-mobile_button"> НАЧАТЬ ПОДБОР </p>
                </div>
            </div>

    </div>

    <div v-if="IS_TABLET" class="f-present-wrapper-tablet">
            <div class="f-present-wrapper-tablet-tablet_image_container">
                <img class="f-present-wrapper_image" src="/images/model_1_small.png" alt="">
            </div>
            <div class="f-present-wrapper-tablet_content_container">
                <p class="present-content"># ВСЕ ТРЕНДЫ 2020</p>
                <h1 class="present-content">СОБЕРИ ИДЕАЛЬНЫЙ СТИЛЬ</h1>
                <div>
                    <Media
                            :kind="'video'"
                            :isMuted="(false)"
                            :src="'./videos/present.mp4'"
                            :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
                            :autoplay="true"
                            :controls="true"
                            :loop="false"
                            @pause="handle"
                            :ref="'video_player'"
                            width="450"
                    ></Media>
                </div>
                <div>
                    <p class="f-present-wrapper-tablet_button"> НАЧАТЬ ПОДБОР </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Media from "@dongido/vue-viaudio";
    import {mapGetters} from "vuex";
    import { gsap } from 'gsap';
    export default {
        name: "f-present-warpper",
        components:
            {
                Media
            },
        methods:{
            handle(){

            }
        },
        computed: {
            ...mapGetters([
                'IS_TABLET',
                "IS_MOBILE",
                "IS_DESKTOP",

            ]),

        },
        mounted() {
            gsap.from(".media", {x: -1920, delay:2, duration:2});
            gsap.from(".f-present-wrapper_image", {y: 1920, delay:4, duration:2});
            gsap.from("h1", {x: 1920, delay:3, duration:1});
            gsap.from("p", {x: 1920, delay:3, duration:1});
        }

    }
</script>

<style lang="scss">
    .f-present-wrapper{
        width: 100%;
        min-height: 600px;
        height: calc(100vh - 174px);
        background-color: $bgc-content;
        display: grid;
        grid-template-areas:
                "f-present-wrapper_image_container f-present-wrapper_content_container";

        &_image_container{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
           img{

               padding-right: $p-1*4;
               margin-right: $m-1*4;
               max-height: content-box;
               min-height: 600px;
               height: calc(100vh - 274px);
           }
        }
        &_content_container{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1{

                font-size: 3.5rem;
            }

        }
        &_button{
            border: $mark solid 1px;
            color: $mark;
            padding: $p-1*2;
            margin: $m-1*2;
        }
    }
    .f-present-wrapper_image_container{
        grid-area: f-present-wrapper_image_container;
    }
    .f-present-wrapper_content_container{
        grid-area: f-present-wrapper_content_container;
    }

    .f-present-wrapper-mobile {
        width: 100%;
        min-height: 600px;
        height: calc(100vh - 174px);
        background-color: $bgc-content;
        display: grid;
        grid-template-areas:
                "f-present-wrapper-mobile_content_container"
                "f-present-wrapper-mobile_image_container";
        .f-present-wrapper-mobile_image_container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                max-height: content-box;
                min-height: 600px;
                height: calc(100vh - 274px);
            }
        }
        .f-present-wrapper-mobile_content_container{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


        }
        .f-present-wrapper-mobile_button{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: $mark solid 1px;
            color: $mark;
            padding: $p-1*2;
            margin: $m-1*2;
        }
            .f-present-wrapper-mobile_image_container{
                grid-area: f-present-wrapper_image_container;
            }
            .f-present-wrapper-mobile-mobile_content_container{
                grid-area: f-present-wrapper-mobile_content_container;
            }
        }

        .f-present-wrapper-tablet_image_container{
            grid-area: f-present-wrapper-tablet_image_container;
        }
        .f-present-wrapper-tablet_content_container{
            grid-area: f-present-wrapper-mobile_content_container;
        }
        .f-present-wrapper-mobile_image_container{
            grid-area: f-present-wrapper_image_container;
        }
        .f-present-wrapper-mobile-mobile_content_container{
            grid-area: f-present-wrapper-mobile_content_container;
        }


</style>