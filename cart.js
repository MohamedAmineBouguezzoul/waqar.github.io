let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Retrieve cart from localStorage


// Set the language based on localStorage value when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const storedLanguage = localStorage.getItem('language');
  
  if (storedLanguage) {
    // Set the language dropdown to the stored language
    document.getElementById('language-switcher').value = storedLanguage;
    updateTextBasedOnLanguage(storedLanguage);  // Update text based on stored language
  }
});

// Function to update text based on the selected language
function updateTextBasedOnLanguage(lang) {
const removeButtons = document.getElementsByClassName('remove-btn');

  if (lang === 'fr') {
    document.getElementById('site-title').innerText = 'Waqar';
    document.getElementById('nav-collection').innerText = 'Collection';
    document.getElementById('nav-about').innerText = 'À propos';
    document.getElementById('nav-contact').innerText = 'Contact';
    document.getElementById('cart-title').innerText = 'Votre Panier';
    document.getElementById('checkout-btn').innerText = 'Passer à la caisse';
    document.getElementById('back-btn').innerText = 'Retour au magasin';

    // Loop through each button and change its text
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].innerText = 'Retirer';
    }
    
    document.body.style.direction = 'ltr'; 
  } else if (lang === 'ar') {
    document.getElementById('site-title').innerText = 'وقار';
    document.getElementById('nav-collection').innerText = 'المجموعة';
    document.getElementById('nav-about').innerText = 'معلومات عنا';
    document.getElementById('nav-contact').innerText = 'اتصل بنا';
    document.getElementById('cart-title').innerText = 'سلة مشترياتك';
    document.getElementById('checkout-btn').innerText = 'الدفع';
    document.getElementById('back-btn').innerText = 'العودة إلى المتجر';
    // Loop through each button and change its text
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].innerText = 'إزالة';
    }
    document.body.style.direction = 'rtl'; 
  } else {
    document.getElementById('site-title').innerText = 'Waqar';
    document.getElementById('nav-collection').innerText = 'Collection';
    document.getElementById('nav-about').innerText = 'About Us';
    document.getElementById('nav-contact').innerText = 'Contact Us';
    document.getElementById('cart-title').innerText = 'Your Cart';
    document.getElementById('checkout-btn').innerText = 'Checkout';
    document.getElementById('back-btn').innerText = 'Back to Shop';
    // Loop through each button and change its text
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].innerText = 'Remove';
    }
    document.body.style.direction = 'ltr'; 
  }
}

// Back button to return to the shop page
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'index.html';  // Redirect back to the main shopping page
});

// Checkout button action
document.getElementById('checkout-btn').addEventListener('click', function() {
  const lang = localStorage.getItem('language');

  if (lang === 'fr') {
    alert('Passer à la caisse !');  // Alert in French
  }
  else if (lang === 'ar') {
    alert('الدفع!');  // Alert in Arabic
  }
  else if (lang === 'en') {
  alert("Proceeding to checkout!");
}  // Alert in English
  // Redirect to checkout page or add logic for checkout process
});


// Update Cart Counter
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
  }


// Display Cart Items
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';  // Clear the container before inserting new content
  let totalPrice = 0;  // Initialize total price
  updateCartCount();

  // Check if cart is empty
  if (cart.length === 0) {
    totalPrice = 0;  // Set total price to 0 if cart is empty
    cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
    document.getElementById('total-price').innerText = totalPrice;  // Update the total price display
    return;
  }

  // Loop through the cart and display each item
  cart.forEach((item, index) => {
    totalPrice += item.price;

    // Create cart item element
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <div class="cart-item-content">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <p>${item.name} - ${item.price} MAD</p>
          <button class="remove-btn" onclick="removeItemFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Display total price
  document.getElementById('total-price').innerText = totalPrice;
}

// Remove item from cart
function removeItemFromCart(index) {
  cart.splice(index, 1);  // Remove item from the cart array
  localStorage.setItem('cart', JSON.stringify(cart));  // Save the updated cart to localStorage
  displayCartItems();  // Re-render the cart and update total price
}


// View Cart
document.getElementById('view-cart').addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
  
    let cartContent = '🛒 Your Cart:\n\n';
    let totalPrice = 0;  // Initialize total price
  
    // Generate cart content
    cart.forEach((item, index) => {
      cartContent += `${index + 1}. ${item.name} - ${item.price} MAD\n`;
      totalPrice += item.price;  // Add the item price to total
    });
  
    cartContent += `\nTotal Price: ${totalPrice} MAD`;  // Display total price in cart alert
  
    alert(cartContent);
  });
  
  // Save Cart to localStorage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));  // Convert cart array to a string and save it
  }


  
// Language Switcher
document.getElementById('language-switcher').addEventListener('change', function(event) {
  const lang = event.target.value;
  localStorage.setItem('language', lang);  // Save the selected language in localStorage
  updateTextBasedOnLanguage(lang);  // Update text when language changes
});


// Initialize the cart display when the page loads
displayCartItems();
