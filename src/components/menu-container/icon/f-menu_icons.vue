<template>
    <div class="f-menu_icons ">
        <div f-menu_icons_container>
            <span class="f-menu_icons_items scale">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="crimson"><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></span>
            <router-link :to="{name: 'likes'}"><span v-if="LIKES.length > 0" class="f-menu_icons_items_number">1</span>
            <span class="f-menu_icons_items scale"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12z"/></g><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" /></svg>  </span>
            </router-link>
            <span class="f-menu_icons_items scale"><i class="fal fa-shopping-bag"></i>
                    <span class="f-menu_icons_items_number">1</span>
                </span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    export default {
        name: "f-menu_icons",
        computed: {
            ...mapGetters([
                'LIKES',
            ])
        },
    }
</script>

<style scoped>

</style>