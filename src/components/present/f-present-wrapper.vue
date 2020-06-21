<template>
    <div class="f-present-wrapper">
        <div class="f-present-wrapper_image_container">
            <img class="f-present-wrapper_image" src="/images/model_1.png" alt="">
        </div>
        <div class="f-present-wrapper_content_container">
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
                        width="600"
                ></Media>
            </div>
            <div>
                <p class="f-present-wrapper_button"> НАЧАТЬ ПОДБОР </p>
            </div>
        </div>

    </div>
</template>

<script>
    import Media from "@dongido/vue-viaudio";
    export default {
        name: "f-present-warpper",
        components:
            {
                Media
            },
        methods:{
            handle(){

            }
        }

    }
</script>

<style lang="scss">
    .f-present-wrapper{
        width: 100%;
        min-height: 600px;
        height: calc(100vh - 174px);
        background-color: $bgc-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        &_image_container{
           img{
               padding-right: $p-1*4;
               margin-right: $m-1*4;
               min-height: 600px;
               height: calc(100vh - 274px);
           }
        }
        &_content_container{
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

</style>