<template>
    <div class="m-cardigans">
        <div class="m-cardigans_container">
            <router-link :to="{name: 'cm-cardigans'}">
                <img src="/images/cardigan/m-cardigan.png" alt="">
                <p class="title">Джемперы свитеры кардиганы</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "m-cardigan"
    }
</script>

<style lang="scss">
    .m-cardigans{
        height: 400px;
        width: 34%;
        a{

            text-decoration-line: none;
            text-decoration: none;
        }

        &_container{
            justify-content: end;
            background-color: #97b6c9;
            max-height: 400px;
            text-align: right;
            cursor: pointer;
            img{
                width: inherit;
                object-fit: cover;
                height: 400px;
                cursor: pointer;
            }
            .title{
                cursor: pointer;
                max-width: 60%;
                text-align: center;
                color: white;
                background-color: rgba(0,0,0,.2);
                font-size: 2rem;
                text-decoration: none;
                text-transform: uppercase;
                transform: translateY(-220px);

                padding-right: $p-1;
            }
        }
    }
</style>