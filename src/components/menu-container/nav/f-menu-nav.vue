<template>
    <div class="f-menu_nav">
        <ul>
            <router-link :to="{name:'present'}">
                <li>ГЛАВНАЯ</li>
            </router-link>

            <li>ПОДОБРАТЬ</li>
            <router-link to="catalog">
                <li>КАТАЛОГ</li>
            </router-link>
            <router-link to="hot">
                <li>В ТРЕНДЕ</li>
            </router-link>
            <li>КОНТАКТЫ</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "f-menu-nav"
    }
</script>

<style scoped>

</style>