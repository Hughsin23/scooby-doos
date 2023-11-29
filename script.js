// Product objects
const products = [
  {
    id: 1,
    name: "Cat Tree",
    price: 100,
    image: "images/cat_tree.webp",
  },
  {
    id: 2,
    name: "Cat Food",
    price: 1.5,
    image: "images/cat_food.webp",
  },
  {
    id: 3,
    name: "Dog Lead",
    price: 10,
    image: "images/dog_lead.webp",
  },
  {
    id: 4,
    name: "Pet Bed",
    price: 30,
    image: "images/cat_bed.webp",
  },
  {
    id: 5,
    name: "Veggiedent",
    price: 12,
    image: "images/dog_treat.webp",
  },
];

// Cart array to store selected products
const cart = [];

// Function to dynamically render product cards
function renderProducts() {
  const productContainer = document.querySelector(".product-container");

  // Check if the productContainer exists before proceeding
  if (productContainer) {
    console.log("Product cards rendered successfully.");
  } else {
    console.error("Product container not found.");
    return;
  }

  // Clear existing content in the product container
  productContainer.innerHTML = "";

  // Render product cards
  products.forEach((product) => {
    const cardItems = document.createElement("div");
    cardItems.classList.add("card");

    cardItems.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-row">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </div>
      <button class="product-button" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(cardItems);
  });
}

function addToCart(productId) {
  // Find the selected product based on productId using a for loop
  let selectedProduct;

  for (let i = 0; i < products.length; i++) {
    // Check if the current product's id matches the given productId
    if (products[i].id === productId) {
      selectedProduct = products[i];
      break;
    }
  }

  cart.push(selectedProduct);

  // Log the cart for testing purposes (you can remove this in the final version)
  console.log("Cart:", cart);

  // Update the cart UI
  updateCartUI();

  renderProducts();
}

// Function to update the cart UI
function updateCartUI() {}

document.addEventListener("DOMContentLoaded", renderProducts);
