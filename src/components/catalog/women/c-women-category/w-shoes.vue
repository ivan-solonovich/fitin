<template>
    <div class="w-shoes">
        <div class="w-shoes_container">
            <router-link :to="{name: 'cw-shoes'}">
            <img src="/images/shoes/w-shoes.png" alt="">
            <div class="title-container">
                <h3 class="title">Обувь</h3>
           </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-shoes"
    }
</script>

<style lang="scss">
    .w-shoes{

        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
            //noinspection CssInvalidFunction
            background:  #ffccb3;

            max-height: 400px;
            text-align: left;
            img{
                padding-right: 3rem;
                width: inherit;
                object-fit: cover;
                height: 400px;
            }
            .title-container{
                padding-left: 60%;
            }
            .title{

                max-width: 30%;
                text-align: center;
                color: white;
                background-color: rgba(0,0,0,.2);
                font-size: 2rem;
                text-transform: uppercase;
                transform: translateY(-120px);


                padding-right: $p-1;
            }
        }
    }
</style>