<template>
  <div id="app">
    <div id="nav">
      <div id="links">
        <router-link to="/">Home</router-link>
        <router-link to="/create">Create</router-link>
        <a id="logout" href="#" v-if="this.$root.$data.user != null" @click="logout()">Logout</a>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <a
        class="footer-text"
        href="https://github.com/JazzWeller/VaingloryBuilds"
      >
        Repo
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
export default {
  watch: {
    '$route' (to) {
      document.title = to.meta.title || "Vainglory Builds";
    },
    user(newValue) {
      this.$root.$data.user = newValue; // idk if this is necessary
      console.log("in app.vue watch");
      Vue.forceUpdate()
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async logout() {
      try {
        console.log("here");
        await axios.delete("/api/users");
        console.log("there");
        this.$root.$data.user = null;
        location.reload();
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none none side";
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #FF3e50;
  margin: 15px 15px 15px 15px;
  padding: 0px 0px 5px 10px;
  border: 5px;
  border-radius: 6px;
  text-decoration: none;
  border-style: none none solid solid;
  color: white;
}

#nav a.router-link-exact-active {
  color: #C20000;
}

#links {
  font-size: 1.8em;
  grid-area: side;
  display: flex;
  justify-content: center;
  background-color: #23274C;
  border-radius: 25px;
}

.footer {
  background-color: #23274C;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-right: 30px;
  margin-top: 30px;
  text-align: right;
}

.footer a {
  color: white;
  margin-right: 1em;
  font-size: 1.5em;
}
</style>
