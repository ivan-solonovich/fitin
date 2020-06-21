<template>
    <div class="w-coat">
        <div class="w-coat_container">
            <router-link :to="{name: 'cw-coats'}">
            <img src="/images/coat/w-coat.png" alt="">
            <p class="title">Верхняя одежда</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-coat"
    }
</script>

<style lang="scss" >
    .w-coat{
        height: 400px;
        width: 33%;
        &_container{

            text-align: right;
            background-color: #97b6c9;
            max-height: 400px;
            img{
                width: initial;
                /*object-fit: cover;*/
                height: 400px;
            }
            .title{
                max-width: 50%;
                text-align: center;
                color: white;
                background-color: rgba(0,0,0,.2);
                font-size: 2rem;
                text-transform: uppercase;
                transform: translateY(-120px);
                padding-left: $p-1;
            }
        }
    }
</style>