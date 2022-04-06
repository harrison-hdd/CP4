<template>
  <div id="login-page">
    <div id="input" v-if="!this.$root.$data.isLoggedIn">
      <div id="username-wrapper">
        <input type="text" id="username" placeholder="Username" />
      </div>
      <div></div>
      <div id="password-wrapper">
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button id="login-button" @click="login">Login</button>
      <button id="register-button" @click="register">Register</button>
    </div>
    <div v-if="this.$root.$data.isLoggedIn">
      You are logged in. Enjoy browsing
      <div>
        <button id="logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginAndRegisterComponent",
  methods: {
    async login() {
      let result;
      try {
        let _username = document.getElementById("username").value;
        let _password = document.getElementById("password").value;

        if (_username === "" || _password === "") {
          alert("Username and password cannot be blank");
          return;
        }

        result = await axios.post("/api/users/login", {
          username: _username,
          password: _password,
        });

        this.$root.$data.isLoggedIn = true;
        this.$root.$data.currentUser = _username;
        this.$root.$data.currentFavorites = result.data.favorites;

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      } catch (e) {
        console.log(e);
        alert(
          "An error happened. Please check your credentials and/or try again later!"
        );
      }
    },
    async register() {
      try {
        let newUsername = document.getElementById("username").value;
        let newPassword = document.getElementById("password").value;

        if (newUsername === "" || newPassword === "") {
          alert("Username and password cannot be blank");
          return;
        }

        await axios.post("/api/users/register", {
          username: newUsername,
          password: newPassword,
        });

        alert("New user successfully registered");
      } catch (e) {
        console.log(e);
        alert(
          "An error happened. Please check your credentials and/or try again later!"
        );
      }
    },
    logout() {
      this.$root.$data.currentUser = "";
      this.$root.$data.currentFavorites = [];
      this.$root.$data.currentDate = "";
      this.$root.$data.isLoggedIn = false;
    },
  },
};
</script>

<style scoped>
#login-page {
  margin-top: 125px;
}
#username-wrapper,
#password-wrapper {
  margin-bottom: 20px;
}

#username,
#password {
  border: 2px solid gray;
}

#login-button,
#register-button {
  margin: 0 10px;
}

#logout-button {
  margin: 20px 10px;
}
</style>
