<template>
    <div class="c-dress-subcategory">
        <div @click="selectSubcategoryAll()" class="c-dress-subcategory_coat">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategoryEveryDayDress()" class="c-dress-subcategory_topcoat">
            <img src="/images/dress/dress/w-dress.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Повседневное платье</h3>
            </div>
        </div>
        <div @click="selectSubcategoryEveningDress()" class="c-dress-subcategory_downjacket">
            <img src="/images/dress/dress/w-eveningdress.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Вечернее платье</h3>
            </div>
        </div>
        <div @click="selectSubcategoryLongDress()" class="c-dress-subcategory_furcoat">
            <img src="/images/dress/dress/w-longdress.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Платье в пол</h3>
            </div>
        </div>
        <div @click="selectSubcategorySunDress()" class="c-dress-subcategory_w-coatm">
            <img src="/images/dress/dress/w-sundress.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>Сарафан</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c-dress-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryEveryDayDress: false,
                selectedSubcategoryEveningDress: false,
                selectedSubcategoryLongDress: false,
                selectedSubcategorySunDress: false
            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryEveryDayDress(){
                this.selectedSubcategoryEveryDayDress = true
                return  this.$emit('selectedSubcategoryEveryDayDress', this.selectedSubcategoryEveryDayDress)

            },
            selectSubcategoryEveningDress(){
                this.selectedSubcategoryEveningDress = true
                return  this.$emit('selectedSubcategoryEveningDress', this.selectedSubcategoryEveningDress)

            },
            selectSubcategoryLongDress(){
                this.selectedSubcategoryLongDress = true
                return  this.$emit('selectedSubcategoryLongDress', this.selectedSubcategoryLongDress)

            },
            selectSubcategorySunDress(){
                this.selectedSubcategorySunDress = true
                return  this.$emit('selectedSubcategorySunDress', this.selectedSubcategorySunDress)

            },
        }
    }
</script>

<style lang="scss">
        .c-dress-subcategory {
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