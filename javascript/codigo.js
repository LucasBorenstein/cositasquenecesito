let cart = [];

// Función para agregar un producto al carrito
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartPopup();
}

// Función para actualizar la ventana emergente del carrito
function updateCartPopup() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Limpiar los elementos existentes en el carrito
    cartItemsContainer.innerHTML = '';

    // Mostrar los productos en el carrito
    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    // Actualizar el total
    cartTotal.textContent = total;

    // Mostrar la ventana emergente
    document.getElementById('cart-popup').style.display = 'flex';
}

// Cerrar la ventana emergente del carrito
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-popup').style.display = 'none';
});

// Mostrar ventana emergente al hacer clic en el carrito
document.getElementById('cart-icon').addEventListener('click', () => {
    updateCartPopup();
});
