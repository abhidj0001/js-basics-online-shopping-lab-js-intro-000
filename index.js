var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  // key names are assigned in this statement and not declared variables
  var newItem = { itemName: itemName,  itemPrice: itemPrice }
  getCart().push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartItems = new Array()
  for (var item in cart ) {
    cartItems.push(`${cart[item].itemName} at $${cart[item].itemPrice}`)
  }
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1) {
    return `In your cart, you have ${cartItems}.`
  }
  if (cart.length > 1) {
    var lastItem = cartItems.splice(cart.length - 1, 1)
    var midItems = cartItems.join(', ')
    return `In your cart, you have ${midItems}, and ${lastItem}.`
  }
}


function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
