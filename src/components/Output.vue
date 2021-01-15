<template>
    <div class="whitespace-pre-wrap flex flex-col overflow-auto h-full text-center">
        <p class="text-gray-600 mx-10 font-mono first:font-black first:text-black first:text-xl" v-for="calc in calcData" :key="calc.id">
            {{formatCalc(calc)}}
        </p>
    </div>
</template>

<script>
export default {
    props: ["calcData"],
    name: "Output",
    methods: {
        formatCalc(data) {
            var lineOne = `Rolling ${data.title} (${data.text})`
            var lineTwo = `( ${data.list.join(", ")} )`
            var lineThree = `Total: ${+data.total + +data.mod} | Average: ${(data.total / data.quan).toFixed(2)}`
            var lineBreak = " "

            if (data.type == "default") {
                return [lineOne, lineTwo, lineBreak].join("\n")
            }

            return [lineOne, lineTwo, lineThree, lineBreak].join("\n")
        },
    }
}
</script>