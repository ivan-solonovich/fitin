<template>
    <div class="m-hoodies">
        <div class="m-hoodies_container">
            <router-link :to="{name: 'cm-hoodies'}">
                <img src="/images/hoodies/m-hoodies.png" alt="">
                <div class="title-container">
                    <h3 class="title">Толстовки</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-hoodies"
    }
</script>

<style lang="scss">
    .m-hoodies{

        height: 400px;
        width: 33%;
        &_container{
            justify-content: space-around;
        //noinspection CssInvalidFunction
            background:  #d5975d;

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
                transform: translateY(-320px);


                padding-right: $p-1;
            }
        }
    }

</style>