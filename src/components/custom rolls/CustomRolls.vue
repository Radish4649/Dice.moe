<template>
    <div>
        <div id="rolls" class="flex flex-col" v-for='roll in rolls' :key='roll.id'>
            <CustomRollValue class="values" 
                       v-bind:roll="roll" 
                       v-on:del-roll="$emit('del-roll', roll.id)"
                       v-on:move-roll-down="$emit('move-roll-down', roll.id)"
                       v-on:move-roll-up="$emit('move-roll-up', roll.id)" 
                       v-on:calc="emitCalc"/>
        </div>
    </div>
</template>

<script>
import CustomRollValue from "./CustomRollValue.vue"

export default {
    name: "CustomRolls",
    props: ["rolls"],
    components: {
        CustomRollValue,
    },
    methods: {
        emitCalc(data) {
            this.$emit('calc', data)
        }
    }
}
</script>