<script setup lang="ts">
import { refCart, count, total } from '@/models/shoppingCart'

const cart = refCart()
</script>

<template>
  <div>
    <h1 class="title has-text-black">Shopping Cart</h1>
    <div v-if="cart.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div class="box" v-for="item in cart" :key="item.id">
        <div class="box-image">
          <img :src="item.thumbnail" alt="item.name" />
        </div>
        <div class="box-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p class="price">{{ item.price }}</p>
          <button class="button is-danger">Remove</button>
        </div>
      </div>
      <div class="box">
        <div class="box-content">
          <p>Total: {{ total }}</p>
          <p>Number of items: {{ count }}</p>
          <button class="button is-success">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 1rem;
}
</style>
