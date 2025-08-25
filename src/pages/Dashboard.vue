<template>
  <section class="dashboard">
    <div class="container">
      <h1>Dashboard</h1>
      <p>Welcome, <strong>{{ user?.name }}</strong></p>
      <p>Email: {{ user?.email }}</p>
      <button class="btn" @click="logoutUser">Logout</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { currentUser, logout } from "../services/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref<{name:string,email:string}|null>(null);
onMounted(()=>{user.value=currentUser()})
function logoutUser(){ logout(); router.push("/"); }
</script>

<style scoped>
.dashboard { flex:1; background:#111; color:white; padding:6rem 1rem; }
.container { max-width:600px; margin:0 auto; text-align:center; }
h1 { font-size:2rem; margin-bottom:1rem; color:#ffd366; }
p { margin-bottom:0.75rem; color:#ccc; }
.btn { padding:0.75rem 1.5rem; background:#ffd366; color:#111; border:none; border-radius:8px; font-weight:700; cursor:pointer; }
.btn:hover { background:#ffb900; }
</style>
