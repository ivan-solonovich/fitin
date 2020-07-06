<template>
    <div class="c-overalls-subcategory">
        <div @click="selectSubcategoryAll()" class="c-overalls-subcategory_all">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategoryOverallsJeans()" class="c-overalls-subcategory_jeans">
            <img src="/images/overalls/jeans/cm-overalls-jeans.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Джинсовые</h3>
            </div>
        </div>
        <div @click="selectSubcategoryOverallsTextill()" class="c-overalls-subcategory_textill">
            <img src="/images/overalls//textill/cm-overalls-textill.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Текстильные</h3>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "c-overalls-subcategory",
        data() {
            return {
                selectedSubcategoryAll: false,
                selectedSubcategoryOverallsJeans: false,
                selectedSubcategoryOverallsTextill: false,

            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryOverallsJeans(){
                this.selectedSubcategoryOverallsJeans = true
                return  this.$emit('selectedSubcategoryOverallsJeans', this.selectedSubcategoryOverallsJeans)

            },
            selectSubcategoryOverallsTextill(){
                this.selectedSubcategoryOverallsTextill = true
                return  this.$emit('selectedSubcategoryOverallsTextill', this.selectedSubcategoryOverallsTextill)

            },

        }
    }
</script>

<style lang="scss">
        .c-overalls-subcategory {
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

            &_jeans {
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

            &_textill {
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