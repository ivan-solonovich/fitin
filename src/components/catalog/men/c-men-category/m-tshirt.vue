<template>
    <div class="m-tshirt">
        <div class="m-tshirt_container">
            <router-link :to="{name: 'cm-tshirt'}">
                <img src="/images/t-shirt/m-tshirt.png" alt="">
                <h3 class="title">Майки</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-tshirt"
    }
</script>

<style lang="scss">
    .m-tshirt{
        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
            //noinspection CssInvalidFunction
            background:  #9999ff;

            max-height: 400px;
            text-align: right;
            img{
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
                transform: translateY(-220px);


                padding-right: $p-1;
            }
        }
    }
</style>