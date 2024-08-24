<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <main>
    <button @click="() => router.push('/exploring')">Fetch</button>
    <button disabled="true"><del>History</del></button>
  </main>
</template>

<style scoped>
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>