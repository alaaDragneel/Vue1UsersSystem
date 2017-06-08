<template>
    Home Page
    {{ da }}
    <!-- <span v-show="showName">
        Mohamed Alaa
    </span> -->

    <span v-if="showName">
        Mohamed Alaa
    </span>


    <button @click="show" class="btn btn-default">
        Toggle User Name
    </button>
    <br>
    <br>
    <pre>
        to update the js files please use this line =>  browserify -t vueify -e index.js -o app.js
    </pre>
</template>
<script>

    export default {
        data() {
            return {
                da: "Hi",
                showName: true
            }
        },
        created: function () {
            console.log('Created');
        },
        ready: function () {
            console.log('Ready');
        },
        methods: {
            show: function () {
                this.showName = !this.showName;
            }
        }
    }
</script>
