<template>
    <div>
        <button class="w-screen font-sans text-xl font-bold relative"
                v-on:click="info">
            Dice Roller {{symbol}}
        </button>
        <div class="absolute w-screen bg-indigo-200 flex flex-row bg-gradient-to-b from-indigo-50 to-white"
             v-bind:class="{hidden: !infoActive}">
            <div class="w-1/3 my-2">
                <h1 class="font-bold">Written in:</h1>
                <ul>
                    <li>✌️ Vue / Vite.js</li>
                    <li>♒ Tailwind.css</li>
                    <li>👨‍💻 Some Typescript</li>
                </ul>
            </div>
            <div class="w-1/3 my-2">
                <h1 class="font-bold">Written By:</h1>
                Kyle Rudisill
                <div class="flex flex-row justify-center">
                    <a id="github" class="m-2" target="_blank"
                   href="https://github.com/Radish4649"></a>
                    <a id="website" class="m-2" target="_blank"
                   href="https://radish4649.github.io"></a>
                </div>
            </div>
            <div class="w-1/3 my-2">
                <h1 class="font-bold">View this project on GitHub:</h1>
                <a id="github-lg" class="m-2" target="_blank"
                   href="https://github.com/Radish4649/Vue-Dice-Roller"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Heading",
    data() {
        return {
            infoActive: false,
            symbol: "▼"
        }
    },
    methods: {
        info() {
            this.infoActive = !this.infoActive
            this.symbol = this.symbol == "▼" ? "▲" : "▼"
        }
    }
}
</script>

<style scoped>
#linkedin {
    content: url(../assets/linkedin.svg);
}

#github {
    content: url(../assets/github.svg);
}

#website {
   content: url(../assets/website.svg);
}

#github-lg {
    content: url(../assets/github.svg);
    height: 60px;
}
</style>