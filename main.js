let app = new Vue({
  el: '#app',
  data: {
    product: 'T-shirt',
    image: 'img/black-tshirt.jpg',
    altText: 'A black T-shirt',
    inventory: 50,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'For men'],
    variants: [
      {
        variantID: 2324,
        variantColor: 'Gray'
      },
      {
        variantID: 4278,
        variantColor: 'White'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    }
  }
})