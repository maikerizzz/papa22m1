// ppopupSale.js

function closePpopupSale() {
    document.getElementById('ppopupSale').style.display = 'none';
}

function shopNow() {
    window.location.href = '#';
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById('ppopupSale').style.display = 'block';
    }, 3000); // Show new popup after 3 seconds
}

function showProductDetails(productId) {
    const productData = {
        product1: {
            name: 'The Sasubags Story',
            price: '$79.80',
            description: 'This stylish silk bag is perfect for both casual and formal occasions. Made from high-quality genuine silk, it features a spacious interior with multiple compartments for all your essentials. The sleek design is complemented by durable hardware and a comfortable shoulder strap',
            image: './img/p1.webp'
        }
    };

    const product = productData[productId];

    document.getElementById('productName').innerText = product.name;
    document.getElementById('productPrice').innerText = product.price;
    document.getElementById('productDescription').innerText = product.description;
    document.querySelector('.product-details img').src = product.image;

    document.getElementById('productDetails').style.display = 'block';
}

function closeProductDetails() {
    document.getElementById('productDetails').style.display = 'none';
}

function addToCart() {
    alert('Product added to cart!');
}
