// Define product data
const products = [
    {
        name: "Elegant Black Abaya",
        price: 500,
        image: "images/abaya1.jpg"
    },
    {
        name: "Modern Black Abaya",
        price: 700,
        image: "images/abaya2.jpg"
    },
    {
        name: "Elegant Blue Abaya",
        price: 600,
        image: "images/abaya3.jpg"
    },
    {
        name: "Elegant Brown Abaya",
        price: 900,
        image: "images/abaya4.jpg"
    },
    {
        name: "Dark Blue Abaya",
        price: 550,
        image: "images/abaya5.jpg"
    }        
  ];


  
  
  // Select the container where the products will be appended
  const productContainer = document.getElementById("product-container");
  
  // Loop through the products array to create product cards dynamically
  products.forEach(product => {
    // Create the product card element
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    // Create the image element
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
  
    // Create the product name element
    const productName = document.createElement("h3");
    productName.textContent = product.name;
  
    // Create the price element
    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ${product.price} MAD`;
  
    // Create the Add to Cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.setAttribute("data-name", product.name);
    addToCartButton.setAttribute("data-price", product.price);
    addToCartButton.setAttribute("data-image", product.image);
  
    // Append elements to the product card
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);
  
    // Append the product card to the container
    productContainer.appendChild(productCard);
  });
  
  