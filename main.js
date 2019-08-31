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
        variantColor: 'gray'
      },
      {
        variantID: 4278,
        variantColor: 'white'
      }
    ]
  }
})