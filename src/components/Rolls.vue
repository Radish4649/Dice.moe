<template>
    <div class="">
        <StockRolls v-on:calc="emitCalc"/>
        <CustomRolls class="max-h-56 overflow-auto" 
                     v-bind:rolls="rolls" 
                     v-on:del-roll="emitDelRoll"
                     v-on:move-roll-down="emitMoveRollDown"
                     v-on:move-roll-up="emitMoveRollUp" 
                     v-on:calc="emitCalc"/>
    </div>
</template>

<script>
import CustomRolls from "./custom rolls/CustomRolls.vue"
import StockRolls from "./stock rolls/StockRolls.vue"

export default {
    name: "Rolls",
    props: ["rolls"],
    components: {
        CustomRolls,
        StockRolls
    },
    methods: {
        emitCalc(data) {
            this.$emit('calc', data)
        },
        emitDelRoll(data) {
            this.$emit('del-roll', data)
        },
        emitMoveRollUp(data) {
            this.$emit('move-roll-up', data)
        },
        emitMoveRollDown(data) {
            this.$emit('move-roll-down', data)
        }
    }
}
</script>