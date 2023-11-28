// Define an array to hold the cart items
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);



// Define the addToCart function
function addToCart(itemId) {
  // Retrieve item details from the DOM
  const card = document.querySelector(`.card[data-id='${itemId}']`);
  const itemName = card.querySelector('h3').textContent;
  const itemPrice = parseFloat(card.querySelector('p').textContent.slice(1)); // Assuming price is in format "$XX.XX"

  // Find if item exists in cart
  const existingItemIndex = cart.findIndex(item => item.id === itemId);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
  }

  // Save to localStorage and update display
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartTotal();
  updateCartDisplay();
}

// Update Cart Total
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelectorAll('#total-price').forEach(elem => {
    elem.textContent = `$${total.toFixed(2)}`;
  });
}

// Update Cart Display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <h3>${item.name}</h3>
      <p>Price: $${item.price.toFixed(2)}</p>
      <p>Quantity: ${item.quantity}</p>
    </div>
  `).join('');
}

// Initialize cart display and total on page load
updateCartDisplay();
updateCartTotal();

