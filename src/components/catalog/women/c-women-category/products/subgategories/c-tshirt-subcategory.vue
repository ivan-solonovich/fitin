<template>
    <div class="c-tshirt-subcategory">
        <div @click="selectSubcategoryAll()" class="c-tshirt-subcategory_all">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategoryTshirt()" class="c-tshirt-subcategory_jumper">
            <img src="/images/t-shirt/tshirt/w-tshirt.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>С рукавами</h3>
            </div>
        </div>
        <div @click="selectSubcategorySleeveless()" class="c-tshirt-subcategory_sweater">
            <img src="/images/t-shirt/sleeveless/w-sleeveless.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Без рукавов</h3>
            </div>
        </div>
        <div @click="selectSubcategoryOverShoulder()" class="c-tshirt-subcategory_cardigan">
            <img src="/images/t-shirt/overshoulder/w-overshoulder.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Через плечо</h3>
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
                selectedSubcategoryTshirt: false,
                selectedSubcategorySleeveless: false,
                selectedSubcategoryOverShoulder: false,

            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategoryTshirt(){
                this. selectedSubcategoryTshirt = true
                return  this.$emit(' selectedSubcategoryTshirt', this. selectedSubcategoryTshirt)

            },
            selectSubcategorySleeveless(){
                this.selectedSubcategorySleeveless = true
                return  this.$emit('selectedSubcategorySleeveless', this.selectedSubcategorySleeveless)

            },
            selectSubcategoryOverShoulder(){
                this.selectedSubcategoryOverShoulder = true
                return  this.$emit('selectedSubcategoryOverShoulder', this.selectedSubcategoryOverShoulder)

            },

        }
    }
</script>

<style lang="scss">
        .c-tshirt-subcategory {
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