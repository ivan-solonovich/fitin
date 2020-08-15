<template>
    <div class="c-color-picker">
        <div class="select-color-button-aria">

            <button class="btn-choose-color"  @click="selectedRed">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="crimson"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedViolet">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="violet"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
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