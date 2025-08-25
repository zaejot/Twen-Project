<template>
  <div class="container">
    <h2 style="margin-bottom:16px;">Shopping Cart</h2>
    <div v-if="items.length" class="grid">
      <div v-for="item in items" :key="item.id" class="card product-card">
        <img :src="item.image" alt="" />
        <h3>{{ item.name }}</h3>
        <p style="color:var(--muted)">Rp {{ item.price.toLocaleString() }}</p>
        <p style="color:var(--muted)">Qty: {{ item.qty }}</p>
        <button class="btn-ghost" @click="remove(item.id)">Remove</button>
      </div>
    </div>
    <p v-else style="color:var(--muted)">Cart kosong.</p>
    <div v-if="items.length" class="cart-actions">
      <router-link to="/checkout" class="btn">Checkout</router-link>
      <button class="btn-ghost" @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const items = ref<any[]>([])
function loadCart(){ items.value = JSON.parse(localStorage.getItem('tt_cart')||'[]') }
function remove(id:number){ items.value = items.value.filter(i=>i.id!==id); localStorage.setItem('tt_cart', JSON.stringify(items.value)) }
function clearCart(){ items.value=[]; localStorage.removeItem('tt_cart') }
onMounted(()=>loadCart())
</script>

<style scoped>
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; }
.product-card { padding:16px; border-radius:12px; overflow:hidden; text-align:center; }
.product-card img { width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:12px; }
.cart-actions { display:flex; justify-content:flex-end; gap:12px; margin-top:16px; }
</style>
