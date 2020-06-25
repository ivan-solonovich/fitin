<template>
    <div class="m-coats">
        <div class="m-coats_container">
            <router-link :to="{name: 'cm-coats'}">
                <img src="/images/coat/m-coat.png" alt="">
                <p class="title">Верхняя одежда</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "m-coats"
    }
</script>

<style lang="scss">
    .m-coats {
        height: 400px;
        width: 33%;

        a {

            text-decoration-line: none;
            text-decoration: none;
        }

        &_container {
            justify-content: space-around;
            background-color: #ffdd99;
            max-height: 400px;
            text-align: right;
            cursor: pointer;

            img {
                width: inherit;
                object-fit: cover;
                height: 400px;
                cursor: pointer;
            }

            .title {
                cursor: pointer;
                max-width: 60%;
                text-align: center;
                color: white;
                background-color: rgba(0, 0, 0, .2);
                font-size: 2rem;
                text-decoration: none;
                text-transform: uppercase;
                transform: translateY(-120px);

                padding-right: $p-1;
            }
        }
    }
</style>