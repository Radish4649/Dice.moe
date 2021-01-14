<template>
    <div class="flex flex-row justify-center">
        <div class="w-12 mx-2 md:w-24 md:mx-6"
             v-for='roll in stockRolls' :key='roll.id'>
            <StockRollValue class="bg-red-200 w-full m-1 rounded shadow h-8"
                            v-bind:roll="roll"
                            v-on:calc="emitCalc"/>
        </div>
    </div>
</template>

<script>
import StockRollValue from "./StockRollValue.vue"

export default {
    components: {
        StockRollValue,
    },
    data() {
        return {
            stockRolls: [4,6,8,10,12,20]
        }
    },
    methods: {
        emitCalc(data) {
            this.$emit('calc', data)
        }
    }
}
</script>