import { computed, ref } from 'vue'
import type { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

const shoppingCart = ref<CartItem[]>([])

export const refCart = () => shoppingCart

export const count = computed(() => shoppingCart.value.length)
export const total = computed(() =>
  shoppingCart.value.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
)

export function addToCart(product: Product) {
  const item = shoppingCart.value.find((item) => item.product.id === product.id)
  if (item) {
    item.quantity++
  } else {
    shoppingCart.value.push({ product, quantity: 1 })
  }
}

export function removeFromCart(product: Product) {
  const index = shoppingCart.value.findIndex((item) => item.product.id === product.id)
  if (index != -1) {
    shoppingCart.value.splice(index, 1)
  }
}
