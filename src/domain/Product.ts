interface Product {
  id: string
  name: string
  description: string
  price: number
  amount: number
  rating: number
  brand: string
  imageUrl: string

  isAdded?: Boolean
}

export { Product }
