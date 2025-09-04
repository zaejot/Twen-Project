<template>
  <div class="p-2">
    <div class="mb-2">
      <label for="name" class="mr-2">Nama Barang</label>
      <input type="text" placeholder="Nama Barang" v-model="name" />
    </div>
    <div class="mb-2">
      <label for="price" class="mr-2">Harga Barang</label>
      <input type="text" placeholder="Harga Barang" v-model="price" />
    </div>
    <div class="mb-2">
      <label for="desc" class="mr-2">Deskripsi Barang</label>
      <textarea
        name=""
        id=""
        placeholder="Deskripsi Barang"
        v-model="desc"
      ></textarea>
    </div>
    <div class="mb-2">
      <label for="stock" class="mr-2">Stok Barang</label>
      <input type="text" placeholder="Stok Barang" v-model="stock" />
    </div>
    <button
      @click="addItem"
      class="bg-white rounded-xl text-black p-3 hover:bg-slate-200"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../services/api";

// interface product {
//   name: string;
//   price: number;
//   desc: string;
//   stock: number;
// }

const name = ref("");
const price = ref(0);
const desc = ref("");
const stock = ref(0);
const mess = ref("");

const addItem = async () => {
  try {
    const res = await api.post("/product", {
      name: name.value,
      price: price.value,
      desc: desc.value,
      stock: stock.value,
    });

    mess.value = res.data.mess;
    alert("masuk");
  } catch (err: any) {
    mess.value = err.response?.data?.message || "Tambah item gagal!";
    alert("eyoy");
  }
};
</script>
