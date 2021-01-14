<template>
  <div class="app">
    <div class="h-full fixed fixed w-screen bottom-0 bottom-0 flex flex-col">
      <Heading class="bg-gradient-to-t from-indigo-50 to-indigo-100" />
      <Output class="bg-indigo-50"
                v-bind:calcData="calcData" />
      <Rolls class="bg-indigo-50"
                 v-bind:rolls="rolls"
                 v-on:del-roll="deleteRoll"
                 v-on:move-roll-up="moveRollUp"
                 v-on:move-roll-down="moveRollDown"
                 v-on:calc="calc" />
      <AddRoll class=""
                   v-on:add-roll="addRoll"
                   v-on:clear-calcs="clearCalcs" />
    </div>
  </div>
</template>

<script>
import Heading from "./components/Heading.vue"
import Output from "./components/Output.vue"
import Rolls from "./components/Rolls.vue"
import AddRoll from "./components/AddRoll.vue"


export default {
  name: 'App',
  components: {
    Heading,
    Output,
    Rolls,
    AddRoll
  },
  data() {
    return {
      rolls: [
        {
          id: 0,
          title: "To Hit 🗡️",
          values: {
            quan: 1,
            size: 20,
            mod: 6,
          } 
        },
        {
          id: 1,
          title: "Damage 🗡️",
          values: {
            quan: 1,
            size: 4,
            mod: 4,
          } 
        },
        {
          id: 2,
          title: "Fireball (DEX14) 🔥",
          values: {
            quan: 8,
            size: 6,
            mod: 0,
          } 
        }
      ],
      calcData: []
    }
  },
  methods: {
    clearCalcs() {
      this.calcData = []
    },
    deleteRoll(el) {
      this.rolls = this.rolls.filter(x=>x.id!=el)
      this.saveRolls()
    },
    moveRollUp(el) {
      var newPos = this.rolls.filter(x=>x.id==el).pop()
      this.rolls = this.rolls.filter(x=>x.id!=el)
      this.rolls.unshift(newPos)
      this.saveRolls()
    },
    moveRollDown(el) {
      var newPos = this.rolls.filter(x=>x.id==el).pop()
      this.rolls = this.rolls.filter(x=>x.id!=el)
      this.rolls.push(newPos)
      this.saveRolls()
    },
    calc(data) {
      if (this.calcData.length > 24) {
        this.calcData.pop()
      }
      this.calcData.unshift(data)
    },
    addRoll(data) {
      this.rolls.push(data)
      this.saveRolls()
    },
    saveRolls(){
      localStorage.setItem("rolls", JSON.stringify(this.rolls))
    }
  },
  mounted() { //grabs local storage
    if (localStorage.getItem("rolls")) {
      try {
        this.rolls = JSON.parse(localStorage.getItem("rolls"))
      } catch(e) {
        localStorage.removeItem("rolls")
      }
    }
  }
}
</script>
