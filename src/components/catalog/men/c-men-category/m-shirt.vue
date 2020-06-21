<template>
    <div class="m-shirt">
        <div class="m-shirt_container">
            <router-link :to="{name: 'cm-shirts'}">
                <img src="/images/shirt/m-shirt.png" alt="">
                <div class="title-container">
                    <h3 class="title">Рубашки</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-shirt"
    }
</script>

<style lang="scss">
    .m-shirt{
        height: 400px;
        width: 50%;
        &_container{
            justify-content: space-around;
            //noinspection CssInvalidFunction
            background: #f4efe9;
            max-height: 400px;
            text-align: left;
            img{
                padding-left: 4rem;
                width: inherit;
                object-fit: cover;
                height: 400px;
            }
            .title-container{

                margin: 0 auto;
                max-width: 30%;
                text-align: right;
                color: white;
                background-color: rgba(0,0,0,.2);
                font-size: 2rem;
                text-transform: uppercase;
                transform: translateY(-220px);

                padding-right: $p-1;
                .title{

                    text-align: center;
                }
            }
        }
    }
</style>