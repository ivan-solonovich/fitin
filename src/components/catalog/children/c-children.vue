<template>
    <div class="c-children">
        <router-link :to="{name: 'children'}">
        <img src="/images/c-model-child.jpg" alt="">

        <div class="title-box">
            <p class="title">Для детей</p>
            <p class="hash">#Новые поступления каждый день</p>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "c-children"
    }
</script>

<style lang="scss">
    .c-children {
        width: 50%;
        background-color: #f4efe9;

        /*<!--background-color: $bgc;-->*/
        display: block;
        justify-content: start;
        align-items: center;
        height: 300px;
        float: left;

        a{

            text-decoration-line: none;
            text-decoration: none;
        }
        .title-box {
            color: white;

            margin-left: 350px;
            font-size: 3rem;
            width: fit-content;
            padding-left: 3px;
            padding-right: 3px;

            text-transform: uppercase;

            transform: translateY(-150px);
            .title{
                background-color: rgba(0, 0, 0, .2);
                margin-block-end: 0;
            }
            .hash{
                font-size: 1rem;
                color: $mark;
                text-transform: none;
            }
        }

        img {
            vertical-align: bottom;
            object-fit: cover;
            margin-left: 25px;
            height: 300px;
        }
    }
</style>