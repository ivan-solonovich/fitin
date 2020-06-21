<template>
    <div class="c-hot">
        <router-link :to="{name: 'hot'}">
        <img src="/images/v-model-2.png" alt="">
        <div class="title">
            <p>В тренде</p>
            <p class="hash">выбор покупателей</p>

        </div>
    </router-link>
    </div>
</template>

<script>
    export default {
        name: "c-hot"
    }
</script>

<style lang="scss">
    .c-hot{


        height: 410px;


        a{
            color: black;
            background-color: #dee2d0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;

            text-decoration: none;
            &:after{
                color: black;
            }
        }



        img{
            height: 400px;
        }
        .title{
            padding-left: 3rem;
            margin-block-end: 0;
            font-size: 3.5rem;
            text-transform: uppercase;
        }
        .hash{
            border: black solid 1px;
            padding: 8px;
            font-size: 2rem;
            color: $mark;
            text-transform: none;
        }
    }
</style>