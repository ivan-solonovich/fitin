<template>
    <div class="c-men">
        <router-link :to="{name:'men'}">
        <img src="/images/c-model-men.png" alt="">

        <div class="title-box">
            <p class="title">Для мужчин</p>
            <p class="hash">#Встречайте сумашедшие скидки</p>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "f-men"
    }
</script>

<style lang="scss">
.c-men {
    background-color: #e2b890;

    /*<!--background-color: $bgc;-->*/
    display: block;
    justify-content: start;
    align-items: center;
    height: 300px;
    float: right;
    width: 50%;
    a{

        text-decoration-line: none;
        text-decoration: none;
    }
    .title-box {
        color: white;
        margin-left: 50px;
        font-size: 3rem;
        width: fit-content;
        padding-left: 3px;
        padding-right: 3px;

        text-transform: uppercase;

        transform: translateY(-5px);
        .title{
            background-color: rgba(0, 0, 0, .2);
            margin-block-end: 0;
        }
        .hash{
            background-color: inherit;
            font-size: 1rem;
            color: $mark;
            text-transform: none;
        }

    }
    img{

        vertical-align: bottom;
        object-fit: cover;
        float: right;
        height: 300px;
    }

}
</style>