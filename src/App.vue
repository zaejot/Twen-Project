<template>
  <div id="app">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
:root {
  --bg: #111;
  --fg: #fff;
  --muted: #aaa;
  --accent: #ffd366;
  --edge: rgba(255,255,255,0.1);
}

html, body {
  margin:0; padding:0; height:100%;
  background:var(--bg); color:var(--fg);
  font-family: 'Inter', sans-serif;
}

#app {
  display:flex;
  flex-direction:column;
  min-height:100vh;
}

.main {
  flex:1;
  display:flex;
  flex-direction:column;
}
</style>
