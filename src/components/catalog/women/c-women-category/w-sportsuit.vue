<template>
    <div class="w-sportsuit">
            <div class="w-sportsuit_container">
                <img src="/images/sportsuit/w-sportsuit.png" alt="">
                <div class="title-container">
                    <h3 class="title">Спортивная одежда</h3>
                </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "w-sportsuit"
    }
</script>

<style lang="scss">
    .w-sportsuit{
        height: 400px;
        width: 33%;
        &_container{
            justify-content: space-around;
        //noinspection CssInvalidFunction
            background:  #dee2d0;

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
                transform: translateY(-120px);


                padding-right: $p-1;
            }
        }
    }
</style>