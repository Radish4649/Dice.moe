this whole piece fucking sucks lmao
<template>
    <div class="flex flex-col relative">
        <div v-bind:class="{hidden: addActive}"
             class="fixed flex flex-col w-screen absolute bottom-24 border-black border-2">
            <input class="h-12 text-center"
                   type="text" v-model="dice" name="dice881" placeholder="roll (format as xdy+z)">
            <input class="h-12 text-center"
                   type="text" v-model="title" name="title881" placeholder="name">
            <button class="bg-white h-12"
                    v-on:click="newroll">add roll</button>
        </div>
        <button class="h-12 w-full bg-red-600 text-white font-bold text-2xl"
                v-on:click="showAddRoll">
            {{symbol}}
        </button>
        <button class="h-12 w-full bg-blue-600 text-white font-bold"
                v-on:click="$emit('clear-calcs')">
            clear history
        </button>
    </div>
</template>

<script>
export default {
    name: "AddRoll",
    data() {
        return {
            addActive: true,
            symbol: "+",
            dice: "",
            title: "",
            newRoll: {}     
        }
    },
    methods: {
        getDice() {
            var diceWithMod = this.dice.match(/(\d+)[dD](\d+)([+-])(\d+)$/)
            var diceNoMod = this.dice.match(/(\d+)[dD](\d+)$/)

            if (diceWithMod) {
                diceWithMod
                if (diceWithMod[3] == "-") {
                    diceWithMod[4] = 0 - diceWithMod[4]
                }
                diceWithMod.splice(3, 1)
                return diceWithMod
            } else if (diceNoMod) {
                diceNoMod.push(0)
                return diceNoMod
            } else {
                alert("Invalid input. Please confirm that you have entered a valid dice value.")
                return null
            }
        },
        newroll() { //for some reason this function's name needs to be lower case (coding sucks)
            var dice = this.getDice()
            this.newRoll = {
                id: Math.floor(Math.random() * (10**10)),
                title: this.title,
                values: {
                quan: dice[1],
                size: dice[2],
                mod: dice[3]
                } 
            }
            this.$emit('add-roll', this.newRoll)
        },
        showAddRoll() {
            this.addActive = !this.addActive
            this.symbol = this.addActive ? "+" : "-"
        }
    }
}
</script>