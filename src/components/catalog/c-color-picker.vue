<template>
    <div class="c-color-picker">
        <div class="select-color-button-aria">

            <button class="btn-choose-color"  @click="selectedRed"><i style="color: red"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedViolet"><i style="color: violet"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedPurple"><i style="color: purple"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedMediumPurple"><i style="color: mediumpurple"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlue"><i style="color: royalblue"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedLightSeaGreen"><i style="color: LIGHTSEAGREEN"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedForestGreen"><i style="color: forestgreen"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedYellowGreen"><i style="color: yellowgreen"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedYellow"><i style="color: yellow"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedOrangeRed"><i style="color: orangered"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedOrange"><i style="color: orange"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedSaddleBrown"><i style="color: saddlebrown"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedBlack"><i style="color: black"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedGray"><i style="color: gray"  class="fas fa-2x fa-tshirt"></i></button>
            <button class="btn-choose-color"  @click="selectedWhite"><i style=" "  class="far fa-2x fa-tshirt"></i></button>


            <!--            <button class="btn-choose-color"  @click="selectedAll">Все {{ sortedSubCategoryNameRus }} этого цвета</button>-->
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../../event-bus/event-bus";

    export default {
        name: "c-color-picker",
        data() {
            return {

            }
        },
        methods:{
            selectedRed: function () {

                EventBus.$emit('selectedRed', this.selectedRed = 'red')
            },
            selectedViolet: function () {

                EventBus.$emit('selectedViolet', this.selectedViolet = 'violet')
            },
            selectedPurple: function () {

                EventBus.$emit('selectedPurple', this.selectedPurple = 'purple')
            },
            selectedMediumPurple: function () {

                EventBus.$emit('selectedMediumPurple', this.selectedMediumPurple = 'mediumpurple')
            },
            selectedBlue: function () {

                EventBus.$emit('selectedBlue', this.selectedBlue = 'royalblue')
            },
            selectedLightSeaGreen: function () {

                EventBus.$emit('selectedLightSeaGreen', this.selectedLightSeaGreen = 'lightgreen')
            },
            selectedForestGreen: function () {

                EventBus.$emit('selectedForestGreen', this.selectedForestGreen = 'forestgreen')
            },
            selectedYellowGreen: function () {

                EventBus.$emit('selectedYellowGreen', this.selectedYellowGreen = 'yellowgreen')
            },
            selectedYellow: function () {

                EventBus.$emit('selectedYellow', this.selectedYellow = 'yellow')
            },
            selectedOrangeRed: function () {

                EventBus.$emit('selectedOrangeRed', this.selectedOrangeRed = 'orangered')
            },
            selectedOrange: function () {

                EventBus.$emit('selectedOrange', this.selectedOrange = 'orange')
            },
            selectedSaddleBrown: function () {

                EventBus.$emit('selectedSaddleBrown', this.selectedSaddleBrown = 'saddlebrown')
            },
            selectedBlack: function () {

                EventBus.$emit('selectedBlack', this.selectedBlack = 'black')
            },
            selectedGray: function () {

                EventBus.$emit('selectedGray', this.selectedGray = 'gray')
            },
            selectedWhite: function () {

                EventBus.$emit('selectedWhite', this.selectedWhite = 'white')
            },
        },

    }
</script>

<style lang="scss">
    .select-color-button-aria{
        padding: 1rem;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-choose-color{
            margin: 5px;
            height: 35px;
            background-color: #fff;
            border: gray solid 1px;
            border-radius: 5px;
        }
        .btn-choose-color:hover{
            border: $mark solid 2px;
        }
    }
</style>