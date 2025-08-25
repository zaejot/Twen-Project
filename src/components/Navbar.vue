<template>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="/">TwenTears</a>
      <nav class="links">
        <router-link to="/">Beranda</router-link>
        <router-link to="/about">Tentang</router-link>
        <router-link to="/contact">Kontak</router-link>
        <template v-if="!logged">
          <router-link to="/login">Masuk</router-link>
          <router-link to="/register">Daftar</router-link>
        </template>
        <template v-else>
          <router-link to="/dashboard">Dashboard</router-link>
          <button class="btn-ghost" @click="doLogout">Keluar</button>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { isLoggedIn, logout } from "../services/auth";

const router = useRouter();
const logged = ref(false);
onMounted(()=>{logged.value = isLoggedIn()});
function doLogout(){ logout(); logged.value=false; router.push("/"); }
</script>

<style scoped>
.nav { width:100%; background:#111; color:#fff; }
.nav-inner { max-width:1100px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:14px 20px; }
.brand { color: var(--accent); font-weight:900; font-size:20px; }
.links { display:flex; gap:14px; align-items:center; flex-wrap:wrap; }
.links a { color:#fff; text-decoration:none; }
.btn-ghost { background:transparent; border:1px solid rgba(255,255,255,0.12); padding:6px 12px; border-radius:8px; color:#fff; cursor:pointer; }
</style>
