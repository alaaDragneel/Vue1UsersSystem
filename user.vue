<template>
    <!-- Show Users -->
    <showusers :persons="persons"></showusers>
    <!-- Show Users -->

    <!-- Add User -->
    <add_user></add_user>
    <!-- Add User -->
</template>
<script>

var showUsers = require('./show_users.vue'); // if locally
var addUser = require('./add_user.vue'); // if locally

    export default {
        data() {
            return {
                persons: [
                    {name: 'moaalaa', age: '19', job: 'web Developer', gender: 'female', time: 1496891925229},
                    {name: 'alaaDragneel', age: '20', job: 'web Desginer', gender: 'male', time: 1496891319579},
                    {name: 'sasuke_alaa', age: '24', job: 'Programmer', gender: 'female', time: 1496891711442},
                    {name: 'mohamed zayed', age: '50', job: 'Designer', gender: 'male', time: 1496891767363}
                ]
            }
        },
        components: {
            showusers: showUsers,
            add_user: addUser
        },
    }
</script>
