<template>
    <div class="row">
        <div class="col-md-3">
            <input v-model="name" type="text" class="form-control" placeholder="name">
        </div>
        <div class="col-md-3">
            <input v-model="age" type="text" class="form-control" placeholder="age">

        </div>
        <div class="col-md-3">
            <input v-model="job" type="text" class="form-control" placeholder="job">
        </div>
        <div class="col-md-3">
            <select v-model="gender" class="form-control">
                <option value="male" selected>male</option>
                <option value="female">female</option>
            </select>
        </div>
    </div>
    <br>
    <button @click="addUser()" v-bind:disabled="dis" type="button" class="btn btn-primary">
        {{ btn | addDote '+'}}
    </button>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                age: '',
                job: '',
                gender: 'male',
                dis: true,
                btn: "Add User"
            }
        },
        computed: {
            dis: function () {
                if (this.name == '' || this.age == '' || this.job == '') {
                    return true;
                } else if (this.name.length < 5 || this.age.length < 2 || this.job.length < 5) {
                    return true;
                }else {
                    return false;
                }
            }
        },
        methods: {
            addUser: function () {
                var newPerson = {
                    name: this.name,
                    age: this.age,
                    job: this.job,
                    gender: this.gender,
                    time: new Date().getTime()
                };

                this.$parent.persons.push(newPerson);

                this.name = '';
                this.age = '';
                this.job = '';
            }
        }
    }
</script>
