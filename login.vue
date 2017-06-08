<template>
    login Page

    <div class="form-group">
      <label for="UserName">User Name</label>
      <input v-model="userName" type="text" class="form-control" id="UserName" placeholder="UserName">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
    </div>

    <div class="form-group">
      <input @click="sendData" type="button" class="btn btn-primary" value="login">
    </div>



</template>
<script>

    export default {
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        methods: {
            sendData: function () {
                var userName = this.userName;
                var password = this.password;
                this.$http.post('post?login', {userName: userName, password: password}).then(function(res) { // success

                }, function(res) { // error

                });
            }
        }
    }
</script>
