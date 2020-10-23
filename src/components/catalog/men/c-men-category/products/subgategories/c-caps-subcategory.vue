<template>
<div>
        <div v-if="typeOfScreens() === 'с-subcategory'" class="с-subcategory">
            <div @click="selectSubcategoryAll()" class="c-caps-subcategory_cap">
                <div class="logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     focusable="false" width="2.07em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform:
                     rotate(360deg); transform: rotate(360deg);"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 960">
                    <path d="M640 640v8q167 22 275.5 91T1024 896q0 26-28 45t-68 19t-68-19t-28-45q0-35-43-64.5T672.5 785T512
                    768t-160.5 17T235 831.5T192 896q0 26-28 45t-68 19t-68-19t-28-45q0-89 108.5-157.5T384 648v-8q0-26
                    19-45t45-19V448q0-26 19-45t45-19q53 0 90.5-37.5T640 256t-37.5-90.5T512 128t-90.5 37.5T384 256q0
                    26-18.5 45t-45 19t-45.5-19t-19-45q0-106 75-181T512 0t181 75t75 181q0 88-54 157t-138 91v72q27 0
                    45.5 19t18.5 45z" fill="#626262"/>
                    <rect x="0" y="0" width="1024" height="960" fill="rgba(0, 0, 0, 0)" /></svg>
                </div>
                <div class="c-coats-subcategory_coat_title">
                    <h3>Все категории</h3>
                </div>
            </div>
            <div @click="selectSubcategoryCapBaseball()" class="c-caps-subcategory_baseball">
                <img src="/images/cap/baseball/m-baseball.png" alt="">
                <div class="c-coats-subcategory_topcoat_title">
                    <h3>Бейсболки</h3>
                </div>
            </div>
            <div @click="selectSubcategoryCapNapper()" class="c-caps-subcategory_napper">
                <img src="/images/cap/napper/napper.png" alt="">
                <div class="c-coats-subcategory_downjacket_title">
                    <h3>С полями</h3>
                </div>
            </div>
            <div @click="selectSubcategoryCapWinter()" class="c-caps-subcategory_winter">
                <img src="/images/cap/winter/m-winter.png" alt="">
                <div class="c-coats-subcategory_furcoat_title">
                    <h3>Зимние</h3>
                </div>
            </div>
            <div @click="selectSubcategoryCapBeret()" class="c-caps-subcategory_beret">
                <img src="/images/cap/beret/m-beret.png" alt="">
                <div class="c-coats-subcategory_w-coatm_title">
                    <h3>Береты</h3>
                </div>
            </div>
        </div>
        <div v-if="typeOfScreens() === 'с-subcategory-mobile' || 'c-subcategory-tablet' " :class="typeOfScreens()">
            <div v-if="typeOfScreens() != 'с-subcategory'" class="hunger">

                    <svg class="hunger-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                         focusable="false" width="2.07em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform:
                     rotate(360deg); transform: rotate(360deg);"
                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 960">
                        <path d="M640 640v8q167 22 275.5 91T1024 896q0 26-28 45t-68 19t-68-19t-28-45q0-35-43-64.5T672.5 785T512
                    768t-160.5 17T235 831.5T192 896q0 26-28 45t-68 19t-68-19t-28-45q0-89 108.5-157.5T384 648v-8q0-26
                    19-45t45-19V448q0-26 19-45t45-19q53 0 90.5-37.5T640 256t-37.5-90.5T512 128t-90.5 37.5T384 256q0
                    26-18.5 45t-45 19t-45.5-19t-19-45q0-106 75-181T512 0t181 75t75 181q0 88-54 157t-138 91v72q27 0
                    45.5 19t18.5 45z" fill="crimson"/>
                        </svg>

            </div>
        </div>
    </div>
</template>

<script>
    import {subcategoryScreen} from "../../../../../../mixins/catalog/subcategory-screen";
    import {mapGetters} from "vuex";

    export default {
        name: "c-caps-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryCapBaseball: false,
                selectedSubcategoryCapNapper: false,
                selectedSubcategoryCapWinter: false,
                selectedSubcategoryCapBeret: false,

            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryCapBaseball(){
                this.selectedSubcategoryCapBaseball = true
                return  this.$emit('selectedSubcategoryCapBaseball', this.selectedSubcategoryCapBaseball)

            },
            selectSubcategoryCapNapper(){
                this.selectedSubcategoryCapNapper = true
                return  this.$emit('selectedSubcategoryCapNapper', this.selectedSubcategoryCapNapper)

            },
            selectSubcategoryCapWinter(){
                this.selectedSubcategoryCapWinter = true
                return  this.$emit('selectedSubcategoryCapWinter', this.selectedSubcategoryCapWinter)

            },
            selectSubcategoryCapBeret(){
                this.selectedSubcategoryCapBeret = true
                return  this.$emit('selectedSubcategoryCapBeret', this.selectedSubcategoryCapBeret)

            },
            subcategoryScreenClose(){
                let vm = this;
                if (vm.IS_DESKTOP === true){

                    return   vm.subcategoryScreenClose = false
                }else{

                    return   vm.subcategoryScreenClose = true
                }
            }
        },
        computed: {
            ...mapGetters([
                "IS_DESKTOP",
                "IS_TABLET",
                "IS_MOBILE"
            ]),

        },
        mixins: [subcategoryScreen]
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
        .c-subcategory {


            &_cap {
                background-color: #ffdd99;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-color: lightgray;
                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }

            &_baseball {
                background-color: #e0e5e9;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }

            &_napper {
                background-color: #ffccb3;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-color: lightgray;
                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_winter {
                background-color: #5fccb3;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-color: lightgray;
                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_beret {
                background-color: #9999ff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-color: lightgray;
                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            .c-coats-subcategory_coat_title {
                padding-right: 5px;

            }
            .c-coats-subcategory_furcoat_title {
                padding-right: 5px;

            }
            .c-coats-subcategory_downjacket_title {
                padding-right: 5px;

            }

            .c-coats-subcategory_topcoat_title {
                padding-right: 5px;

            }
            .c-coats-subcategory_w-coatm_title {
                padding-right: 5px;

            }



        }
</style>