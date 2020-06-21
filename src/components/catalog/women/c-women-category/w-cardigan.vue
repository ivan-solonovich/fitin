<template>
    <div class="w-cardigan">
        <div class="w-cardigan_container">
            <router-link :to="{name: 'cw-cardigans'}">
            <img src="/images/cardigan/w-cardigan.png" alt="">
            <p class="title">Джемперы свитеры кардиганы </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-cardigan"
    }
</script>

<style lang="scss">
    .w-cardigan{
        height: 400px;
        width: 33%;
        &_container{
            justify-content: end;
            background-color: #b3d383;
            max-height: 400px;
            text-align: right;
            img{
                width: inherit;
                object-fit: cover;
                height: 400px;
            }
            .title{
                margin: auto 0;
                text-align: right;
                max-width: 40%;

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