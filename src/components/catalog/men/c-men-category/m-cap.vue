<template>
    <div class="m-cap">
        <div class="m-cap_container">
            <router-link :to="{name: 'cm-cap'}">
                <img src="/images/cap/m-cap.png" alt="">
                <div class="title-container">
                    <h3 class="title">Головные уборы</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-cap"
    }
</script>

<style lang="scss">
    .m-cap{
        height: 400px;
        width: 34%;
        &_container{
            justify-content: space-around;
        //noinspection CssInvalidFunction
            background:  #e0e3ec;

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