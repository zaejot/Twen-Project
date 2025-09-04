<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-2xl font-bold mb-6">Admin Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card Statistik Tren -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-lg font-semibold mb-2">📊 Tren Penjualan per Kategori</h2>
        <h2 class="text-xl font-bold mb-4">Tren Penjualan Baju per Kategori</h2>
    <canvas id="salesChart"></canvas>
        <div class="mt-4 space-y-2">
          
        </div>
      </div>

      <!-- Card Tambah Produk -->
      <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-lg font-semibold mb-2">➕ Tambah Produk</h2>
          <p class="text-gray-600 text-sm">Tambah produk baju baru ke katalog</p>
        </div>
        <button
          @click="$router.push('/add-product')"
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 btn"
        >
          Tambah Produk
        </button>
      </div>

      <!-- Card Total Penjualan -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-lg font-semibold mb-2">💰 Total Penjualan</h2>
        <p class="text-gray-600 text-sm">Keseluruhan transaksi berhasil</p>
        <p class="mt-4 text-3xl font-bold text-green-600">Rp 12.500.000</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { Chart } from "chart.js";
import "chart.js/auto";

export default {
  name: "Dashboard",
  setup() {
    onMounted(() => {
      const ctx = document.getElementById("salesChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar","Apr", "Mei", "Jun", "Jul", "Aug"],
          datasets: [
            { label: "Kaos", data: [10, 20, 30, 23,29,31,9,22], borderColor: "blue" }
            ,{ label : "Kemaja", data: [20, 10, 24,32,12,43,65,22], borderColor: "green"}
          ]
        }
      });
    });
  }
};
</script>

<style>
.btn { font-weight:700; padding:0.75rem 2rem; border-radius:10px; background:#ffd366; color:#111; text-decoration:none; }
.btn { width:100%; padding:0.5rem; background:#ffd366; color:#111; border:none; border-radius:6px; font-weight:700; font-size:clamp(0.8rem,1vw,1rem); cursor:pointer; }
.btn:hover { background:#ffb900; }

</style>
