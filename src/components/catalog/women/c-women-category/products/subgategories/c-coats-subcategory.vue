<template>
    <div class="c-coats-subcategory">
        <div @click="selectSubcategoryAll()" class="c-coats-subcategory_coat">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCoatTopcoat()" class="c-coats-subcategory_topcoat">
            <img src="/images/coat/topcoat/w-topcoat.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Пальто</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCoatDownJacket()" class="c-coats-subcategory_downjacket">
            <img src="/images/coat/downjacket/w-downjacket.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Пуховики</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCoatFurCoat()" class="c-coats-subcategory_furcoat">
            <img src="/images/coat/furcoat/w-furcoat.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Шубы</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCoatCoatM()" class="c-coats-subcategory_w-coatm">
            <img src="/images/coat/coat/w-coatm.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>Куртки</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c-coats-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryCoatTopcoat: false,
                selectedSubcategoryCoatDownJacket: false,
                selectedSubcategoryCoatFurCoat: false
            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryCoatTopcoat(){
                this.selectedSubcategoryCoatTopcoat = true
                return  this.$emit('selectedSubcategoryCoatTopcoat', this.selectedSubcategoryCoatTopcoat)

            },
            selectSubcategoryCoatDownJacket(){
                this.selectedSubcategoryCoatDownJacket = true
                return  this.$emit('selectedSubcategoryCoatDownJacket', this.selectedSubcategoryCoatDownJacket)

            },
            selectSubcategoryCoatFurCoat(){
                this.selectedSubcategoryCoatFurCoat = true
                return  this.$emit('selectedSubcategoryCoatFurCoat', this.selectedSubcategoryCoatFurCoat)

            },
            selectSubcategoryCoatCoatM(){
                this.selectedSubcategoryCoatCoatM = true
                return  this.$emit('selectedSubcategoryCoatCoatM', this.selectedSubcategoryCoatCoatM)

            },
        }
    }
</script>

<style lang="scss">
        .c-coats-subcategory {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            cursor: pointer;

            &_coat {
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

            &_topcoat {
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

            &_downjacket {
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
            &_furcoat {
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
            &_w-coatm {
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