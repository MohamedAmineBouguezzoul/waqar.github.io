let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or initialize as empty

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
  if (lang === 'fr') {
    document.getElementById('site-title').innerText = 'Waqar';
    document.getElementById('nav-collection').innerText = 'Collection';
    document.getElementById('nav-about').innerText = 'À propos';
    document.getElementById('nav-contact').innerText = 'Contact';
    document.getElementById('hero-title').innerText = 'Découvrez la beauté intemporelle';
    document.getElementById('hero-subtitle').innerText = 'Abayas et Hijabs élégants fabriqués au Maroc 🇲🇦';
    document.getElementById('shop-now-btn').innerText = 'Acheter maintenant';
    document.getElementById('collection-title').innerText = 'Notre Collection';
    document.getElementById('about-title').innerText = 'À propos de Waqar';
    document.getElementById('about-text').innerText = 'Nous offrons les plus belles abayas et hijabs faits main, combinant l\'artisanat marocain traditionnel avec un design moderne pour la femme élégante.';
    document.getElementById('contact-title').innerText = 'Contactez-nous';
    document.getElementById('contact-text').innerText = 'Email: contact@waqar.com';
    document.getElementById('phone-text').innerText = 'tél: +212 6 00 00 00 00';

    document.body.style.direction = 'ltr'; // Left to right for French
  } else if (lang === 'ar') {
    document.getElementById('site-title').innerText = 'وقار';
    document.getElementById('nav-collection').innerText = 'المجموعة';
    document.getElementById('nav-about').innerText = 'معلومات عنا';
    document.getElementById('nav-contact').innerText = 'اتصل بنا';
    document.getElementById('hero-title').innerText = 'اكتشف الجمال الخالد';
    document.getElementById('hero-subtitle').innerText = 'عبايات وحجابات أنيقة مصنوعة في المغرب 🇲🇦';
    document.getElementById('shop-now-btn').innerText = 'تسوق الآن';
    document.getElementById('collection-title').innerText = 'مجموعتنا';
    document.getElementById('about-title').innerText = 'حول وقار';
    document.getElementById('about-text').innerText = 'نحن نقدم أفضل العبايات والحجابات المصنوعة يدويًا، التي تجمع بين الحرفية المغربية التقليدية والتصميم العصري للمرأة الأنيقة.';
    document.getElementById('contact-title').innerText = 'اتصل بنا';
    document.getElementById('contact-text').innerText = 'البريد الإلكتروني: contact@waqar.com';
    document.getElementById('phone-text').innerText = 'رقم الهاتف: +212 6 00 00 00 00';
    document.body.style.direction = 'rtl'; // Right to left for Arabic
  } else {
    document.getElementById('site-title').innerText = 'Waqar';
    document.getElementById('nav-collection').innerText = 'Collection';
    document.getElementById('nav-about').innerText = 'About Us';
    document.getElementById('nav-contact').innerText = 'Contact Us';
    document.getElementById('hero-title').innerText = 'Discover Timeless Beauty';
    document.getElementById('hero-subtitle').innerText = 'Elegant Abayas and Hijabs Handcrafted in Morocco 🇲🇦';
    document.getElementById('shop-now-btn').innerText = 'Shop Now';
    document.getElementById('collection-title').innerText = 'Our Collection';
    document.getElementById('about-title').innerText = 'About Waqar';
    document.getElementById('about-text').innerText = 'We offer the finest handcrafted abayas and hijabs, blending traditional Moroccan craftsmanship with modern design for the elegant woman.';
    document.getElementById('contact-title').innerText = 'Contact Us';
    document.getElementById('contact-text').innerText = 'Email: contact@waqar.com';
    document.getElementById('phone-text').innerText = 'Phone: +212 6 00 00 00 00';
    document.body.style.direction = 'ltr'; // Left to right for English
  }
}

// Ensure the cart count is updated on page load
updateCartCount();

// Scroll to Collection Section
document.getElementById('shop-now-btn').addEventListener('click', function() {
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav-contact').addEventListener('click', function() {
  document.getElementById('contact-title').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav-about').addEventListener('click', function() {
  document.getElementById('about-title').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav-collection').addEventListener('click', function() {
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
});

// Add To Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-name');
    const productPrice = parseInt(this.getAttribute('data-price'));
    const productImage = this.getAttribute('data-image'); // Get the image URL from the button's data attribute
    // Add item to cart array
    cart.push({ name: productName, price: productPrice, image: productImage });
    updateCartCount();
    saveCartToLocalStorage(); // Save cart to localStorage
    alert(`${productName} added to cart!`);
  });
});

// Update Cart Counter
function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
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

// Redirect to cart page when cart button is clicked
document.getElementById('cart-btn').addEventListener('click', function() {
  window.location.href = 'cart.html'; // Redirect to the cart page (cart.html)
});
