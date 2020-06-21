<template>
    <div class="w-dress">
        <div class="w-dress_container">
            <router-link :to="{name: 'cw-dress'}">
            <img src="/images/dress/w-dress.png" alt="">
            <div class="title-container">
                <h3 class="title">Платья</h3>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-dress"
    }
</script>

<style lang="scss">
    .w-dress{

        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
            //noinspection CssInvalidFunction
            background:  #f2f2f2;

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
                transform: translateY(-120px);


                padding-right: $p-1;
            }
        }
    }
</style>