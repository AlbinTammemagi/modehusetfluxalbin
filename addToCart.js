let cart = []; 

function addToCart(productId) {
 
    cart.push(productId);


    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    
    for (const productId of cart) {
        const product = document.createElement("li");
        product.textContent = `Produkt ${productId}`;
        cartItems.appendChild(product);
    }
}

