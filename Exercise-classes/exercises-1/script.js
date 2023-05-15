class Product {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  sell() {
    if (this.quantity > 0) {
      this.quantity -= 1
    }
  }

  store(count) {
    this.quantity += count
  }
}

const products = [
  new Product('iphone 1', 100, 10),
  new Product('iphone 2', 200, 20),
  new Product('iphone 3', 300, 30),
  new Product('iphone 4', 400, 40),
  new Product('iphone 5', 500, 50),
  new Product('iphone 6', 600, 60),
  new Product('iphone 7', 700, 70),
]

const productsList = document.querySelector('.product-list')

products.forEach((product) => {
  const productElm = document.createElement('div')
  productElm.className = 'product'
  productElm.innerHTML = `
    <div class="product__name">${product.name}</div>
    <div class="product__price">${product.price} CZK</div>
    <div class="product__quantity">${product.quantity} in stock</div>
    <button class="btn-buy">Buy</button>
  `
  const btn = productElm.querySelector('.btn-buy')
  const quantity = productElm.querySelector('.product__quantity')

  btn.addEventListener('click', () => {
    product.sell()
    quantity.textContent = `${product.quantity} in stock`
  })

  productsList.appendChild(productElm)
})
