let cart = [];

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

    cart.push({ name: productName, price: productPrice });
    updateCartCount();
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

  cart.forEach((item, index) => {
    cartContent += `${index + 1}. ${item.name} - ${item.price} MAD\n`;
    totalPrice += item.price;  // Add the item price to total
  });

  cartContent += `\nTotal Price: ${totalPrice} MAD`;  // Display total price in cart alert

  alert(cartContent);
});

// Language Switcher
document.getElementById('language-switcher').addEventListener('change', function(event) {
  const lang = event.target.value;
  
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
    document.getElementById('about-text').innerText = 'نحن نقدم أفضل العبايات والحجابات المصنوعة يدويًا، والتي تجمع بين الحرفية المغربية التقليدية والتصميم العصري للمرأة الأنيقة.';
    document.getElementById('contact-title').innerText = 'اتصل بنا';
    document.getElementById('contact-text').innerText = 'البريد الإلكتروني: contact@waqar.com';
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
  }
});


