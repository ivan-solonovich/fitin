<template>
    <div class="c-cardigans-subcategory">
        <div @click="selectSubcategoryAll()" class="c-cardigans-subcategory_all">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCardiganJumper()" class="c-cardigans-subcategory_jumper">
            <img src="/images/cardigan/jumper/w-jumper.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Джемпер</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCardiganSweater()" class="c-cardigans-subcategory_sweater">
            <img src="/images/cardigan/sweater/w-sweater.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Свитер</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCardiganCardigan()" class="c-cardigans-subcategory_cardigan">
            <img src="/images/cardigan/cardigan/w-cardigan.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Кардиганы</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCardiganSweaterSvell()" class="c-cardigans-subcategory_sweatersvell">
            <img src="/images/cardigan/SweaterSvell/w-sweatersvell.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>С горлом</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c-cardigans-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryCardiganJumper: false,
                selectedSubcategoryCardiganSweater: false,
                selectedSubcategoryCardiganCardigan: false,
                selectedSubcategoryCardiganSweaterSvell: false
            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryCardiganJumper(){
                this. selectedSubcategoryCardiganJumper = true
                return  this.$emit(' selectedSubcategoryCardiganJumper', this. selectedSubcategoryCardiganJumper)

            },
            selectSubcategoryCardiganSweater(){
                this.selectedSubcategoryCardiganSweater = true
                return  this.$emit('selectedSubcategoryCardiganSweater', this.selectedSubcategoryCardiganSweater)

            },
            selectSubcategoryCardiganCardigan(){
                this.selectedSubcategoryCardiganCardigan = true
                return  this.$emit('selectedSubcategoryCardiganCardigan', this.selectedSubcategoryCardiganCardigan)

            },
            selectSubcategoryCardiganSweaterSvell(){
                this.selectedSubcategoryCardiganSweaterSvell = true
                return  this.$emit('selectedSubcategoryCardiganSweaterSvell', this.selectedSubcategoryCardiganSweaterSvell)

            },
        }
    }
</script>

<style lang="scss">
        .c-cardigans-subcategory {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            cursor: pointer;

            &_all {
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

            &_jumper {
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

            &_sweater {
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
            &_cardigan {
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
            &_sweatersvell {
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