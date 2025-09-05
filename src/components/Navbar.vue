<template>
  <header class="nav">
    <div class="container nav-inner">
      <nav class="links">
        <!-- Jika belum login -->
        <template v-if="!auth.isLoggedIn">
          <!-- <div class="flex flex-col"> -->
          <div class="w-full flex">
            <a class="brand" href="/">TwenTears</a>
            <div class="w-full flex justify-end gap-4">
              <router-link
                to="/about"
                class="hover:scale-105 transition-all duration-200"
                >Tentang</router-link
              >
              <router-link
                to="/contact"
                class="hover:scale-105 transition-all duration-200"
                >Kontak</router-link
              >
              <router-link
                to="/login"
                class="hover:scale-105 transition-all duration-200"
                >Masuk</router-link
              >
              <router-link
                to="/register"
                class="hover:scale-105 transition-all duration-200"
                >Daftar</router-link
              >
            </div>
          </div>
          <!-- </div> -->
        </template>

        <!-- Jika sudah login -->
        <template v-else>
          <div class="w-full flex">
            <a class="brand" href="/dashboard">TwenTears</a>
            <div class="w-full flex justify-end gap-4">
              <router-link
                to="/shop"
                class="hover:scale-105 transition-all duration-200"
              ></router-link>
              <router-link
                to="/shop"
                class="hover:scale-105 transition-all duration-200"
                >Belanja</router-link
              >
              <div
                class="dropdown"
                @mouseenter="open = true"
                @mouseleave="open = false"
              >
                <button class="btn-profile">Profile ▾</button>
                <div v-if="open" class="dropdown-menu">
                  <router-link to="/cart" class="btn-ghost"
                    >Keranjang</router-link
                  >
                  <button class="btn-ghost" @click="doLogout">Keluar</button>
                </div>
              </div>
            </div>
          </div>
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
const open = ref(false);

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
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logout berhasil!",
        text: "Sampai jumpa nanti!",
        icon: "success",
        theme: "dark",
        confirmButtonColor: "#ffd366",
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
  width: 100%;
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
  color: #000;
  transition: all 0.3s ease;
}
.btn-profile {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #222;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 150px;
  z-index: 1000;
}
.dropdown-menu a,
.dropdown-menu button {
  color: #fff;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}
.dropdown-menu a:hover,
.dropdown-menu button:hover {
  color: #ffd366;
}
</style>
