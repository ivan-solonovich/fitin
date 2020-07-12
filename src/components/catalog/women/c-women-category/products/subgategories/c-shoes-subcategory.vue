<template>
    <div class="c-shoes-subcategory">
        <div @click="selectSubcategoryAll()" class="c-shoes-subcategory_coat">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategorySneakers ()" class="c-shoes-subcategory_topcoat">
            <img src="/images/coat/topcoat/w-topcoat.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Кроссовки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryBallet()" class="c-shoes-subcategory_downjacket">
            <img src="/images/coat/downjacket/w-downjacket.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Балетки</h3>
            </div>
        </div>
        <div @click="selectSubcategorySandals()" class="c-shoes-subcategory_furcoat">
            <img src="/images/coat/furcoat/w-furcoat.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Босоножки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryCoatCoatM()" class="c-shoes-subcategory_w-coatm">
            <img src="/images/coat/coat/w-coatm.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>Куртки</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c-shoes-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategorySneakers : false,
                selectedSubcategoryBallet: false,
                selectedSubcategoryBoots: false
            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategorySneakers (){
                this.selectedSubcategorySneakers = true
                return  this.$emit('selectedSubcategorySneakers', this.selectedSubcategorySneakers)

            },
            selectSubcategoryBallet(){
                this.selectedSubcategoryBallet = true
                return  this.$emit('selectedSubcategoryBallet', this.selectedSubcategoryBallet)

            },
            selectSubcategorySandals(){
                this.selectedSubcategorySandals = true
                return  this.$emit('selectedSubcategorySandals', this.selectedSubcategorySandals)

            },
            selectSubcategoryBoots(){
                this.selectedSubcategoryBoots = true
                return  this.$emit('selectedSubcategoryBoots', this.selectedSubcategoryBoots)

            },
        }
    }
</script>

<style lang="scss">
        .c-shoes-subcategory {
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