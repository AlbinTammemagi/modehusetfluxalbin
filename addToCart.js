let cart = []; // En tom array för kundvagnen

function addToCart(productId) {
    // Lägg till produkten i kundvagnen baserat på produktens ID
    cart.push(productId);

    // Uppdatera kundvagnen på sidan
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    // Loopa igenom kundvagnen och visa produkterna
    for (const productId of cart) {
        const product = document.createElement("li");
        product.textContent = `Produkt ${productId}`;
        cartItems.appendChild(product);
    }
}
