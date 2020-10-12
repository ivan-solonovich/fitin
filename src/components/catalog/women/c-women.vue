<template>
    <div class="c-women">

        <router-link :to="{name:'women'}">
            <img src="/images/c-model_1.jpg" alt="">

            <div class="title-box">
                <p class="title">Для женщин</p>
                <p class="hash">#Объявлена распродажа на коллекцию</p>
            </div>
        </router-link>



    </div>
</template>

<script>
    export default {
        name: "c-women"
    }
</script>

<style lang="scss">
    .c-women{

        background-color: #e0e5e9;

        /*<!--background-color: $bgc;-->*/

        justify-content: start;
        align-items: center;
        height: 600px;
        float: left;

        a{

            text-decoration-line: none;
            text-decoration: none;
        }
            .title-box{
                color: white;
                margin-left: 50px;
                font-size: 3rem;
                width: fit-content;
                padding-left: 3px;
                padding-right: 3px;

                text-transform: uppercase;

                transform: translateY(-150px);
                .title{
                    background-color: rgba(0,0,0,.2);
                    margin-block-end: 0;
                }
                .hash{
                    font-size: 1rem;
                    color: $mark;
                    text-transform: none;
                }

            }
        img{
            vertical-align: bottom;
            object-fit: cover;

            height: 600px;
            max-width: 100%;
        }


    }
</style>