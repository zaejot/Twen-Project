<template>
  <section class="contact">
    <div class="container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Name</label>
          <input v-model="name" placeholder="Your name" required/>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="Your email" required/>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea v-model="message" rows="5" placeholder="Your message" required></textarea>
        </div>
        <button class="btn" type="submit">Send Message</button>
      </form>
      <p v-if="done" class="done">Thanks! Your message was sent.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref(""); const email = ref(""); const message = ref(""); const done = ref(false);
function submit(){
  console.log({name:name.value,email:email.value,message:message.value});
  name.value=email.value=message.value="";
  done.value=true;
  setTimeout(()=>done.value=false,2500);
}
</script>

<style scoped>
.contact { flex:1; background:#111; color:white; padding:6rem 1rem; }
.container { max-width:600px; margin:0 auto; }
h1 { font-size:clamp(2rem,5vw,3rem); margin-bottom:1rem; text-align:center; color:#ffd366; }
.form-group { margin-bottom:1rem; }
label { display:block; margin-bottom:0.25rem; }
input, textarea { width:100%; padding:0.75rem; border-radius:8px; border:1px solid #333; background:#222; color:white; }
.btn { width:100%; padding:0.75rem; background:#ffd366; color:#111; border:none; border-radius:8px; font-weight:700; cursor:pointer; }
.btn:hover { background:#ffb900; }
.done { margin-top:1rem; color:#2ee6a6; text-align:center; }
</style>
