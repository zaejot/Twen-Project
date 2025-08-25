<template>
  <div class="container">
    <h2 style="margin-bottom:16px;">Checkout</h2>
    <div class="card checkout-card">
      <form @submit.prevent="submit">
        <label>Nama</label>
        <input v-model="name" required />
        <label>Email</label>
        <input type="email" v-model="email" required />
        <label>Alamat</label>
        <textarea v-model="address" rows="4" required></textarea>
        <button class="btn" style="margin-top:12px;">Place Order</button>
      </form>
      <p v-if="done" style="color:#2ee6a6;margin-top:8px;">Pesanan berhasil (mock)</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name=ref(''), email=ref(''), address=ref(''), done=ref(false)
function submit(){ console.log({name:name.value,email:email.value,address:address.value}); name.value=email.value=address.value=''; done.value=true; setTimeout(()=>done.value=false,2500) }
</script>

<style scoped>
.checkout-card { max-width:500px; margin:auto; padding:32px; border-radius:14px; }
label { display:block; margin-top:12px; margin-bottom:6px; color:var(--fg); }
input, textarea { width:100%; padding:10px; border-radius:10px; border:1px solid var(--edge); background:#111; color:var(--fg); }
input:focus,textarea:focus { outline:none; box-shadow:0 0 0 4px rgba(255,255,255,0.03); border-color:#fff; }
</style>
