<template>
  <div id="app">
    <nav>
      <router-link to="/">Login/Register</router-link> |
      <router-link to="/browse">Browse</router-link> |
      <router-link to="/saved">Saved</router-link>
    </nav>
    <router-view />
    <div></div>
    <footer class="footer" id="footer-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a
          class="navbar-brand"
          href="https://github.com/hoandohdd/creative-project-3"
          >Source</a
        >
      </nav>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > nav {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  position: fixed;
  top: 0;
}

#app > nav a {
  font-weight: bold;
  color: #2c3e50;
}

#app > nav a.router-link-exact-active {
  color: #42b983;
}
@media only screen and (min-width: 1200px) {
  .footer {
    border-top: 6px gray double;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
