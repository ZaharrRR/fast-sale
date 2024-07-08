import { defineStore } from 'pinia'

import { Product } from '@/domain/Product'

interface State {
  products: Product[] | []
}

export const useProductStore = defineStore('productStore', {
  state: (): State => ({
    products: [
      {
        id: 'fdvgbdr5t4',
        name: 'Штаны y2k широкие парашюты оверсайз у2к',
        description: '',
        price: 1770,
        rating: 4.6,
        brand: 'NeoNostalgia',
        imageUrl:
          'https://basket-12.wbbasket.ru/vol1819/part181912/181912114/images/c516x688/1.webp'
      },
      {
        id: '56tgdrg4',
        name: 'Кроссовки New Balance 990',
        description: '',
        price: 2945,
        rating: 4.5,
        brand: 'New Balance',
        imageUrl:
          'https://basket-15.wbbasket.ru/vol2316/part231647/231647618/images/c516x688/1.webp'
      },
      {
        id: 'fvrt5435y',
        name: 'Track',
        description: '',
        price: 7047,
        rating: 4.8,
        brand: 'Balenciaga',
        imageUrl:
          'https://basket-14.wbbasket.ru/vol2189/part218920/218920392/images/c516x688/1.webp'
      },
      {
        id: 'kjoi87',
        name: 'Ветровка мужская олимпийка y2k ретро 90х',
        description: '',
        price: 2079,
        rating: 4.5,
        brand: 'Fase-OFF',
        imageUrl:
          'https://basket-12.wbbasket.ru/vol1818/part181859/181859108/images/c516x688/1.webp'
      },
      {
        id: '14e3rsdvr',
        name: 'Штаны y2k широкие парашюты оверсайз у2к',
        description: '',
        price: 1770,
        rating: 4.6,
        brand: 'NeoNostalgia',
        imageUrl:
          'https://basket-12.wbbasket.ru/vol1819/part181912/181912114/images/c516x688/1.webp'
      },
      {
        id: 'fgdf5',
        name: 'Кроссовки New Balance 990',
        description: '',
        price: 2945,
        rating: 4.5,
        brand: 'New Balance',
        imageUrl:
          'https://basket-15.wbbasket.ru/vol2316/part231647/231647618/images/c516x688/1.webp'
      },
      {
        id: 'fbdfgm6dr',
        name: 'Track',
        description: '',
        price: 7047,
        rating: 4.8,
        brand: 'Balenciaga',
        imageUrl:
          'https://basket-14.wbbasket.ru/vol2189/part218920/218920392/images/c516x688/1.webp'
      },
      {
        id: 'gfe435fkjl',
        name: 'Ветровка мужская олимпийка y2k ретро 90х',
        description: '',
        price: 2079,
        rating: 4.5,
        brand: 'Fase-OFF',
        imageUrl:
          'https://basket-12.wbbasket.ru/vol1818/part181859/181859108/images/c516x688/1.webp'
      }
    ]
  }),

  getters: {
    getProducts: (state) => state.products
  },

  actions: {}
})
