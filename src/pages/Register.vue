<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 class="title">Register</h2>
      <!-- <form @submit.prevent="handleRegister"> -->
      <div class="form-group">
        <label>Full Name</label>
        <input
          type="text"
          v-model="fullName"
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="Masukkan email"
          required
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Masukkan password"
          required
        />
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Konfirmasi password"
          required
        />
      </div>
      <button type="submit" class="btn" @click="handleRegister">
        Register
      </button>
      <!-- </form> -->
      <p class="switch">
        Sudah punya akun? <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../services/api";

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const message = ref("");

// const handleRegister = () => {
//   if(password.value !== confirmPassword.value){
//     alert("Password dan konfirmasi tidak sama!");
//     return;
//   }
//   alert(`Register berhasil untuk: ${name.value} (${email.value})`);
//   name.value = email.value = password.value = confirmPassword.value = "";
// };
const handleRegister = async () => {
  try {
    const res = await api.post("/register", {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    });
    message.value = res.data.message;
    alert("ada");
  } catch (error: any) {
    message.value = error.response?.data?.message || "Register failed";
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83.2vh;
  background: #111;
}
.auth-box {
  background: #1c1c1c;
  color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 380px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #ffd366;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 8px;
  background: #222;
  color: #fff;
}
.btn {
  width: 100%;
  padding: 12px;
  background: #ffd366;
  color: #111;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: #ffb900;
}
.switch {
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}
.switch a {
  color: #ffd366;
  text-decoration: underline;
}
</style>
