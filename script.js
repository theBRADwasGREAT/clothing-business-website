// script.js

// Sample product data
const products = [
    {
        id: 1,
        name: "Cool T-Shirt",
        description: "A stylish t-shirt to show your support.",
        image: "path/to/image1.jpg",
        creatorLink: "https://creator-link1.com"
    },
    {
        id: 2,
        name: "Awesome Hoodie",
        description: "Stay warm while representing your favorite creator.",
        image: "path/to/image2.jpg",
        creatorLink: "https://creator-link2.com"
    },
    // Add more products as needed
];

// Function to load products dynamically
function loadProducts() {
    const shopSection = document.getElementById('shop');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.creatorLink}" class="btn">View Creator's Content</a>
        `;

        shopSection.appendChild(productDiv);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', loadProducts);
