<template>
    <div class="c-caps-subcategory">
        <div @click="selectSubcategoryAll()" class="c-caps-subcategory_cap">
            <img src="/images/coat/all/all-w-coat.png" alt="">
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
</template>

<script>
    export default {
        name: "c-caps-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryCapBaseball: false,
                selectedSubcategoryCapNapper: false,
                selectedSubcategoryCapWinter: false,
                selectedSubcategoryCapBeret: false
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
        }
    }
</script>

<style lang="scss">
        .c-caps-subcategory {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            cursor: pointer;

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