<template>
  <section class="about">
    <div class="container">
      <h1>Tentang TwenTears</h1>
      <p>KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA 
        KITA BISA KITA BISA KITA BISAKITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA KITA BISA
      </p>
      <div class="grid">
        <div class="card">
          <h3>VISI</h3>
          <p>Merdeka di hati</p>
        </div>
        <div class="card">
          <h3>MISI</h3>
          <p>Memberantas Chindo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { flex:1; background:#111; padding:6rem 1rem; color:white; }
.container { max-width:1100px; margin:0 auto; }
h1 { font-size:clamp(2rem,5vw,3rem); margin-bottom:1rem; }
p { color:#ccc; margin-bottom:1rem; }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem; margin-top:2rem; }
.card { background:rgba(30,30,30,0.85); padding:1rem; border-radius:10px; box-shadow:0 3px 8px rgba(0,0,0,0.4); }
.card h3 { margin-bottom:0.5rem; color:#ffd366; }
</style>
