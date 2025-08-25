<template>
  <div class="container">
    <div class="card" style="padding:24px;">
      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <img :src="product.image" style="width:360px;border-radius:10px" />
        <div style="flex:1">
          <h2>{{ product.name }}</h2>
          <p style="color:var(--muted)">Rp {{ product.price.toLocaleString('id-ID') }}</p>
          <p style="margin-top:12px;color:var(--muted)">Deskripsi singkat produk — material premium.</p>
          <div style="margin-top:16px">
            <button class="btn" @click="addToCart(product)">Add to Cart</button>
            <router-link to="/shop" class="btn-ghost" style="margin-left:8px">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const all = [
  { id:1, name:'Boxy Tee Black', price:249000, image:'/img/tee-black.jpg' },
  { id:2, name:'Hoodie Oversize Grey', price:399000, image:'/img/hoodie-grey.jpg' },
  { id:3, name:'Twill Pants', price:329000, image:'/img/pants.jpg' },
  { id:4, name:'Cap Classic', price:89000, image:'/img/cap.jpg' }
]
const product = ref(all.find(p => p.id === Number(route.params.id)) || all[0])

function addToCart(p:any){
  const raw = localStorage.getItem('tt_cart') || '[]'
  const items = JSON.parse(raw)
  const found = items.find((i:any)=>i.id===p.id)
  if(found) found.qty +=1; else items.push({...p, qty:1})
  localStorage.setItem('tt_cart', JSON.stringify(items))
  localStorage.setItem('tt_cart_signal', Date.now().toString())
  alert('Added to cart (mock)')
}
</script>
