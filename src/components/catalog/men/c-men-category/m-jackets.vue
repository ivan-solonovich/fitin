<template>
    <div class="m-jackets">
        <div class="m-jackets_container">
            <router-link :to="{name: 'mw-jackets'}">
                <img src="/images/jackets/m-jackets.png" alt="">
                <div class="title-container">
                    <h3 class="title">Пиджаки и костюмы</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-jackets"
    }
</script>

<style lang="scss">
    .m-jackets{

        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
        //noinspection CssInvalidFunction
            background:  #ffe6ff;

            max-height: 400px;
            text-align: left;
            img{
                padding-right: 3rem;
                width: inherit;
                object-fit: cover;
                height: 400px;
            }
            .title-container{
                padding-left: 40%;
            }
            .title{

                max-width: 59%;
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