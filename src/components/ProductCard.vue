<template>
  <div class="product-card card">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
    <p>Rp {{ price }}</p>
    <div style="margin-top:8px;">
      <slot name="actions">
        <router-link :to="`/product/${id}`" class="btn">Detail</router-link>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ id: number; name: string; price: number | string; image: string }>()
const { id, name, price, image } = props
</script>
