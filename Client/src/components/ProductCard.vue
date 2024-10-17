<script setup lang="ts">
import type { Product } from '@/models/products'

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="box">
    <div class="box-imag">
      <img :src="product.images" alt="product.name" />
    </div>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
