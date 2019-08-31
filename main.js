let app = new Vue({
  el: '#app',
  data: {
    product: 'T-shirt',
    image: 'img/black-tshirt.jpg',
    altText: 'A black T-shirt',
    inventory: 50,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'For men']
  }
})