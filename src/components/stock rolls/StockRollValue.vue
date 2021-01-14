<template>
    <button v-on:click="emitRoll">
        {{roll}}
    </button>
</template>

<script>
export default {
    name: "StockRollValue",
    props: ["roll"],
    methods: {
        calculateRoll() {
            let size = this.roll
            let calc = Math.floor(Math.random()*size)+1
            return {
                    title: "default",
                    type: "default",
                    list: [calc],
                    total: calc,
                    text: `1D${size}`,
                    quan: 1,
                    size: size,
                    mod: 0,
            }
        },
        emitRoll() {
            let calc = this.calculateRoll()
            this.$emit('calc', calc)
        }
    }
}
</script>