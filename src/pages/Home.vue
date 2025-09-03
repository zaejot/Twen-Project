<template>
  <section class="hero">
    <div class="hero-content">
      <h1>TwenTears Clothing</h1>
      <p>Streetwear premium, minimalis & gelap</p>
      <router-link to="/shop" class="btn">Mulai Belanja</router-link>
    </div>
    <div class="featured-products">
      <h2>Featured Collection</h2>
      <div class="grid">
        <div v-for="product in products" :key="product._id" class="card">
          <div class="placeholder-img">
            <img src="" :alt="product.name" />
          </div>
          <h3>{{ product.name }}</h3>
          <p class="price">Rp {{ product.price.toLocaleString() }}</p>
          <button class="btn" @click="addToCart(product)">
            Masukan Ke keranjang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import type { NumericLiteral } from "typescript";
import { onMounted, ref } from "vue";
// import api from "../services/api";
const featured = ref([
  { id: 1, name: "Hoodie Black", price: 250000 },
  { id: 2, name: "T-shirt White", price: 120000 },
  { id: 3, name: "Cap", price: 80000 },
  { id: 4, name: "Sweatshirt Grey", price: 200000 },
]);

interface Product {
  _id: string;
  name: string;
  desc: string;
  price: number;
  stock: number;
}

const products = ref<Product[]>([]);

const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    products.value = res.data;
  } catch (err) {
    console.log("Gagal muat data", err);
  }
};

function addToCart(product: any) {
  const cart = JSON.parse(localStorage.getItem("tt_cart") || "[]");
  const exist = cart.find((p: any) => p.id === product.id);
  if (exist) exist.qty++;
  else cart.push({ ...product, qty: 1 });
  localStorage.setItem("tt_cart", JSON.stringify(cart));
  alert(`${product.name} Masuk ke keranjang\\`);
}

onMounted(fetchData);
</script>

<style scoped>
.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #111;
  padding-top: 2rem;
}
.hero-content {
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
}
.hero-content h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: white;
}
.hero-content p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: 1.5rem;
  color: #ccc;
}
.hero-content .btn {
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  background: #ffd366;
  color: #111;
  text-decoration: none;
}

.featured-products {
  width: 100%;
  max-width: 1100px;
  padding: 0 1rem 2.5rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.card {
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(30, 30, 30, 0.85);
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}
.placeholder-img {
  width: 100%;
  height: 150px;
  background: linear-gradient(135deg, #333, #555);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.card h3 {
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
}
.price {
  color: #aaa;
  margin-bottom: 0.5rem;
}
.btn {
  width: 100%;
  padding: 0.5rem;
  background: #ffd366;
  color: #111;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: clamp(0.8rem, 1vw, 1rem);
  cursor: pointer;
}
.btn:hover {
  background: #ffb900;
}
</style>
