document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <div class="cart-item-product">
                        <img src="img/${item.image}" alt="${item.product}" class="cart-item-image">
                        <span>${item.product}</span>
                    </div>
                    <span>$${item.price.toFixed(2)}</span>
                    <span>${item.size}</span>
                    <button class="removeFromCart" data-index="${index}">Eliminar</button>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });

            const removeButtons = document.querySelectorAll('.removeFromCart');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCart();
                });
            });
        }
        updateTotal();
    }

    function updateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmountElement.textContent = total.toFixed(2);
    }

    updateCart();
});
const toggleMenu = () => document.body.classList.toggle("open");