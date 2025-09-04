<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-2xl font-bold mb-6">Tambah Produk Baru</h1>

    <form class="bg-white p-6 rounded-xl shadow-lg max-w-md">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Nama Produk</label>
        <input type="text" class="w-full border px-3 py-2 rounded-lg" placeholder="Masukkan nama baju" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Harga</label>
        <input type="number" class="w-full border px-3 py-2 rounded-lg" placeholder="Masukkan harga" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Gambar (URL)</label>
        <input type="text" class="w-full border px-3 py-2 rounded-lg" placeholder="Masukkan link gambar" />
      </div>

      <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Simpan Produk
      </button>
    </form>
  </div>
</template>
