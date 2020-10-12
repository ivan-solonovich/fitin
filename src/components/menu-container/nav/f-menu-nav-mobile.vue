<template>
    <div class="f-menu-nav-mobile">
       <a class="f-menu-nav-mobile_icon">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#ee4266" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
       </a>
    </div>
</template>

<script>
    export default {
        name: "f-menu-nav-mobile"
    }
</script>

<style lang="scss">

    .f-menu-nav-mobile{
        .f-menu-nav-mobile_icon{
            display: flex;
            justify-content:center;
            align-items: center;
        }
    }
    a:hover{
        color:black;
    }

</style>