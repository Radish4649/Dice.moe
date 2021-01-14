<template>
    <div class="bg-gray-600 rounded-full grid grid-cols-8 grid-rows-2 h-16 m-1 shadow-lg font-sans">
        <div v-bind:class="{hidden: !frontActive}"
             class="row-start-1 row-span-2 col-start-1 col-span-5 flex flex-row">
            <div class="bg-blue-300 h-full w-2/6 flex flex-col rounded-l-full">
                <button class="h-1/2 text-xs md:text-base"
                        v-on:click="$emit('move-roll-up', roll.id)">
                    ▲
                </button>
                <button class="h-1/2 text-xs md:text-base"
                        v-on:click="$emit('move-roll-down', roll.id)">
                    ▼
                </button>
            </div>
            <button v-on:click="change_views(false)"
                    class="bg-red-300 w-4/6">
                {{roll.title}}
            </button>
        </div>
        <div v-bind:class="{hidden: frontActive}"
             class="row-start-1 row-span-2 col-start-1 col-span-5 flex flex-row">
            <button class="bg-red-600 float-left w-2/6 rounded-l-full"
                    v-on:click="$emit('del-roll', roll.id)">
                X
            </button>
            <button class="bg-red-50 w-4/6"
                    v-on:click="change_views(true)">
                {{text}}
            </button>
        </div>
        <button class="bg-green-200 row-start-1 row-span-2 col-start-6 col-span-4 rounded-r-full"
                v-on:click="emitCalc">
            ROLL
        </button>
    </div>
</template>

<script>
export default {
    name: "CustomRollValue",
    props: ["roll"],
    data() {
        return {
            frontActive: true,
            text: this.getText(this.roll),
            currentCalcData: {}
        }
    },
    methods: {
        change_views(b) {
            this.frontActive = b
        },
        getText(roll) {
            var [quan, size, mod] = [roll.values.quan, roll.values.size, roll.values.mod];
            var textInitial = `${quan}D${size}`
            var textFinal = mod > 0 ? `+${mod}` : mod == 0 ? "" : `${mod}`
            return textInitial + textFinal
        },
        calculateRoll() {
            var [quan, size, mod] = [this.roll.values.quan, this.roll.values.size, this.roll.values.mod];
            var list = [];
            for (let i = 0; i < quan; i++) {
                let r = Math.floor(Math.random()*size)+1;
                list.push(r);
            }
            this.currentCalcData = {
                    title: this.roll.title,
                    type: "roll",
                    list: list,
                    total: list.reduce((x,y)=>x+y),
                    text: this.text,
                    quan: quan,
                    size: size,
                    mod: mod,
            }
        },
        emitCalc() {
            this.calculateRoll()
            this.$emit('calc', this.currentCalcData)
        },
    },
}
</script>
