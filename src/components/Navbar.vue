<template>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="/">TwenTears</a>
      <nav class="links">
        <router-link
          to="/"
          class="hover:text-lg hover:transition-all hover:duration-500"
          >Beranda</router-link
        >
        <router-link
          to="/about"
          class="hover:text-lg hover:transition-all hover:duration-500"
          >Tentang</router-link
        >
        <router-link
          to="/contact"
          class="hover:text-lg hover:transition-all hover:duration-500"
          >Kontak</router-link
        >

        <template v-if="!auth.isLoggedIn">
          <router-link
            to="/login"
            class="hover:text-lg hover:transition-all hover:duration-500"
            >Masuk</router-link
          >
          <router-link
            to="/register"
            class="hover:text-lg hover:transition-all hover:duration-500"
            >Daftar</router-link
          >
        </template>

        <template v-else>
          <router-link
            to="/dashboard"
            class="hover:text-lg hover:transition-all hover:duration-500"
            >Dashboard</router-link
          >
          <button class="btn-ghost" @click="doLogout">Keluar</button>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { isLoggedIn, useAuthStore } from "../services/auth";
import Swal from "sweetalert2";

const router = useRouter();
const logged = ref(false);
const auth = useAuthStore();

onMounted(() => {
  logged.value = isLoggedIn();
});

function doLogout() {
  Swal.fire({
    title: "Apakah anda ingin keluar?",
    showCancelButton: true,
    confirmButtonText: "Ya!",
    confirmButtonColor: "#ffd366",
    cancelButtonText: "Batal",
    cancelButtonColor: "#1c1c1c",
    theme: "dark",
    // customClass: {
    //   confirmButton: "confirm-btn",
    // },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logout berhasil!",
        text: "Sampai jumlpa nanti!",
        icon: "success",
        theme: "dark",
        confirmButtonColor: "#ffd366",
        // customClass: {
        //   confirmButton: "confirm-btn",
        // },
      });
      auth.logout();
      router.push("/");
    }
  });
}
</script>

<style scoped>
.nav {
  width: 100%;
  background: #111;
  color: #fff;
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
}
.brand {
  color: var(--accent);
  font-weight: 900;
  font-size: 20px;
}
.links {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}
.links a {
  color: #fff;
  text-decoration: none;
}
.btn-ghost {
  background: #ffd366;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 6px 12px;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
}

.btn-ghost:hover {
  background-color: #ffb900;
  transition: all;
  transition-duration: 500ms;
}

.confirm-btn {
  color: #000;
  /* background-color: #fff; */
}
</style>
