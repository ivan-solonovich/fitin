<template>
    <div class="color-select">
        <div class="options">
            <span class="options-item"

            v-for="category in categories"
            :key="category.value"
            @click.passive="selectCategory(category)"

            >
            <!--            -->

                <span @click.passive="selected"
                >{{ category.value }}</span>

               </span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "c-color-select",
        data() {
            return {}
        },

        methods:{
            selectCategory(category){


                    this.$emit('select', category)



            }

        },
        props:{
            categories:{
                type: Array,
                default(){
                    return []
                }
            },
            selected:{
                type: String,
                default: ''
            },

        }

    }
</script>

<style lang="scss">
    .color-select{
        .options{
            padding: .5rem;
            .options-item{
                padding-right: 1rem;
                padding-left: 1rem;
                cursor: pointer;
                border: solid 1px #fffff9;

            }
            .options-item:hover{
                background-color: #e7e7e7;
            }
        }
    }
</style>