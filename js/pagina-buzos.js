/*--------menu hamburguesa------*/
const toggleMenu = () => document.body.classList.toggle("open");
/*----------fin de hamburguesa----------*/

/*-------------productos---------------*/
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addToCart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            const selectedSize = button.parentElement.querySelector('input[name="size"]:checked');

            if (!selectedSize) {
                alert('Por favor, selecciona un talle.');
                return;
            }

            const product = {
                product: productName,
                price: parseFloat(price),
                size: selectedSize.value,
                image: image
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Producto agregado al carrito');
        });
    });
});

/*------------fin de productos---------*/