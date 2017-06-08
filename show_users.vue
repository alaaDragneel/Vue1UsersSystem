<template>
    <table class="table table-bordered">
        <tr v-for="person in persons">
            <td>{{ $index + 1 }}</td>
            <td>{{ person.name | addDote "." }}</td>
            <td>{{ person.age | addDote " Years old"  }}</td>
            <td>{{ person.job | addDote "!"  }}</td>
            <td>{{ person.time | moment "from" "now" }}</td>
            <td>
                <span v-if="person.gender == 'female'">
                    <p class="label label-info">{{ person.gender }}</p>
                </span>
                <span v-else>
                    <p class="label label-primary">{{ person.gender }}</p>
                </span>
            </td>
            <td>
                <button @click="deleteUser($index)" type="button" class="btn btn-danger"> Delete User </button>
            </td>
            </tr>
    </table>
</template>
<script>
    export default {
        props: ['persons'],
        data() {
            return {

            }
        },
        methods: {
            deleteUser: function (index) {
                this.$parent.persons.splice(index, 1);
            }
        },
        // filters: { // local filter replaced by the global filter in the index.js
            // addDote: function (val, com) {
            //     return val + ' ' + com;
            // }
        // }
    }
</script>
