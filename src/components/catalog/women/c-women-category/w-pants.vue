<template>
    <div class="w-pants">

            <div class="w-pants_container">
                <router-link :to="{name: 'cw-pants'}">
                <img src="/images/pants/w-pants.png" alt="">
                <div class="title-container">
                    <h3 class="title">Штаны и шорты</h3>
                </div>
                </router-link>
            </div>

    </div>
</template>

<script>
    export default {
        name: "w-pants"
    }
</script>

<style lang="scss">
    .w-pants{

        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
            //noinspection CssInvalidFunction
            background:  #9fdf9f;

            max-height: 400px;
            text-align: right;
            img{
                padding-right: 3rem;
                width: inherit;
                object-fit: cover;
                height: 400px;
            }
            .title{

                max-width: 60%;
                text-align: center;
                color: white;
                background-color: rgba(0,0,0,.2);
                font-size: 2rem;
                text-transform: uppercase;
                transform: translateY(-320px);


                padding-right: $p-1;
            }
        }
    }
</style>