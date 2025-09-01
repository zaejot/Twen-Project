<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 class="title">Login</h2>
      <!-- <form @submit.prevent="handleLogin"> -->
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
      <!-- <router-link to="/dashboard" class="btn">Login</router-link> -->
      <button class="btn" @click="handleLogin">Login</button>
      <!-- </form> -->
      <p class="switch">
        Belum punya akun? <router-link to="/register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const message = ref("");

const handleLogin = async () => {
  try {
    const res = await api.post("/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.token);
    router.push("/dashboard");
  } catch (error) {
    message.value = error.response?.data?.message || "Login gagal!";
    alert(message);
  }
  // alert(`Login dengan email: ${email.value}`);
  // email.value = password.value = "";
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
  padding: 9px;
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
