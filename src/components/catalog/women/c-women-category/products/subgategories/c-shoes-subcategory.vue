<template>
    <div>
    <div class="c-shoes-subcategory">
        <div @click="selectSubcategoryAll()" class="c-shoes-subcategory_coat">
            <img src="/images/coat/all/all-w-coat.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Все категории</h3>
            </div>
        </div>
        <div @click="selectSubcategorySneakers()" class="c-shoes-subcategory_topcoat">
            <img src="/images/shoes/sneakers/w-sneakers.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Кроссовки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryBallet()" class="c-shoes-subcategory_downjacket">
            <img src="/images/shoes/ballet/w-ballet.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Балетки</h3>
            </div>
        </div>
        <div @click="selectSubcategorySandals()" class="c-shoes-subcategory_furcoat">
            <img src="/images/shoes/sandals/w-sandals.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Босоножки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryBoots()" class="c-shoes-subcategory_w-coatm">
            <img src="/images/shoes/boots/w-boots.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>Сапоги</h3>
            </div>
        </div>
    </div>
    <div class="c-shoes-subcategory">
        <div @click="selectSubcategoryAnkleBoots()" class="c-shoes-subcategory_ankle">
            <img src="/images/shoes/ankle/ankle.png" alt="">
            <div class="c-coats-subcategory_coat_title">
                <h3>Ботильены</h3>
            </div>
        </div>
        <div @click="selectSubcategoryFlipFlops()" class="c-shoes-subcategory_flipflops">
            <img src="/images/shoes/flipflops/w-flipflops.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Шлепки</h3>
            </div>
        </div>
        <div @click="selectSubcategorySlippers()" class="c-shoes-subcategory_slippers">
            <img src="/images/shoes/slippers/w-slippers.png" alt="">
            <div class="c-coats-subcategory_downjacket_title">
                <h3>Тапочки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryBooties()" class="c-shoes-subcategory_booties">
            <img src="/images/shoes/booties/w-booties.png" alt="">
            <div class="c-coats-subcategory_furcoat_title">
                <h3>Ботинки</h3>
            </div>
        </div>
        <div @click="selectSubcategoryRainBoots()" class="c-shoes-subcategory_rain">
            <img src="/images/shoes/rain/w-rain.png" alt="">
            <div class="c-coats-subcategory_w-coatm_title">
                <h3>Резиновые сапоги</h3>
            </div>
        </div>
    </div>
    <div class="c-shoes-subcategory">

        <div @click="selectSubcategoryPumps()" class="c-shoes-subcategory_pumps">
            <img src="/images/shoes/pumps/w-pumps.png" alt="">
            <div class="c-coats-subcategory_topcoat_title">
                <h3>Туфли</h3>
            </div>
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
                selectedSubcategoryBoots: false,
                selectedSubcategoryAnkleBoots: false,
                selectedSubcategoryFlipFlops: false,
                selectedSubcategorySlippers: false,
                selectedSubcategoryBooties: false,
                selectedSubcategoryRainBoots: false,
                selectedSubcategoryPumps: false,
            }
        },
        methods: {
            selectSubcategoryAll(){
                this.selectedSubcategoryAll = true
                return  this.$emit('selectedSubcategoryAll', this.selectedSubcategoryAll)

            },
            selectSubcategorySneakers(){
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
            selectSubcategoryAnkleBoots(){
                this.selectedSubcategoryAnkleBoots = true
                return  this.$emit('selectedSubcategoryAnkleBoots', this.selectedSubcategoryAnkleBoots)

            },
            selectSubcategoryFlipFlops(){
                this.selectedSubcategoryFlipFlops = true
                return  this.$emit('selectedSubcategoryFlipFlops', this.selectedSubcategoryFlipFlops)

            },
            selectSubcategorySlippers(){
                this.selectedSubcategorySlippers = true
                return  this.$emit('selectedSubcategorySlippers', this.selectedSubcategorySlippers)

            },
            selectSubcategoryBooties(){
                this.selectedSubcategoryBooties = true
                return  this.$emit('selectedSubcategoryBooties', this.selectedSubcategoryBooties)

            },
            selectSubcategoryRainBoots(){
                this.selectedSubcategoryRainBoots = true
                return  this.$emit('selectedSubcategoryRainBoots', this.selectedSubcategoryRainBoots)

            },
            selectSubcategoryPumps(){
                this.selectedSubcategoryPumps = true
                return  this.$emit('selectedSubcategoryPumps', this.selectedSubcategoryPumps)

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
            img:hover{
                transition: ease-in-out .7s ;
                transform: scale(1.8);
            }
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
            &_ankle {
                background-color: #b3d383;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_flipflops {
                background-color: #279ab5;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_slippers {
                background-color: palevioletred;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_booties {
                background-color: silver;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_rain {
                background-color: #e0c89b;
                display: flex;
                justify-content: space-around;
                align-items: center;

                height: 80px;
                width: 20%;

                img {
                    max-height: 45px;
                }

            }
            &_pumps {
                background-color: #ffff99;

                display: flex;
                justify-content: space-around;
                align-items: center;

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