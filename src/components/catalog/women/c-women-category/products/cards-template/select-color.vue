<template>
    <div class="select-color-button-aria">
        <button class="btn-choose-color"  @click="selectedAll">Все товары</button>
        <button class="btn-choose-color"  @click="selectedRed"><i style="color: red"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedBlack"><i style="color: black"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedGray"><i style="color: gray"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedThistle"><i style="color: thistle"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedBlue"><i style="color: blue"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedViolet"><i style="color: violet"  class="fas fa-2x fa-tshirt"></i></button>
        <button class="btn-choose-color"  @click="selectedSandyBrown"><i style="color: sandybrown"  class="fas fa-2x fa-tshirt"></i></button>

    </div>
</template>

<script>
    export default {
        name: "select-color"
    }
</script>

<style lang="scss">

</style>