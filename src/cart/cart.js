
export default class Cart{
  constructor() {
    this.products = []
  }

  updateObj() {
    this.products = JSON.parse(JSON.stringify(this.products))
  }

  findProd(product_id, presentation_id) {
    const response = this.products.find(
      p => p.product_id === product_id && p.presentation_id === presentation_id
    );

    return response;
  }

  // Updating this.products method
  plusProd(product) {
    const current = this.findProd(product.product_id, product.presentation_id)
    if (current) current.q += 1;
    this.updateObj()
  };

  // Updating this.products method
  minusProd(product) {
    var new_cart = [];
    this.products.forEach((p, indxIt) => {
      if (!(p.product_id === product.product_id && p.presentation_id === product.presentation_id)) {
        new_cart.push(p)
        return
      }
      p.q -= 1;
      if (p.q == 0) return;
      new_cart.push(p)
    });

    this.products = new_cart;
  };

  addProd(product) {
    const current = this.findProd(product.product_id, product.presentation_id)
    if (current) current.q += 1;
    else this.products.push({...product, q: 1})
    this.updateObj()
  }

  deleteProd(product) {
    this.products.filter((el) => {
      if (el.product_id == product.product_id && el.presentation_id == product.presentation_id) return false;
      return true;
    })
    this.updateObj() 
  }
  
  getTotal() {
    var total = 0;
    this.products.forEach( (el) => {
      total += el.q * el.presentation_cost
    })
    return total.toFixed(2);
  }
}