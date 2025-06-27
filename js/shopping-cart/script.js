let cart = {};

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    },
    {
        id: 2,
        name: "Smartphone",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    },
    {
        id: 3,
        name: "Laptop",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    },
    {
        id: 4,
        name: "Coffee Mug",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=200&fit=crop",
    },
    {
        id: 5,
        name: "Backpack",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
    },
    {
        id: 6,
        name: "Watch",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    },
];

const showProducts = () => {
    const productsContainer = document.getElementById("products-list");
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        productsContainer.appendChild(productCard);
    });
};

const addToCart = (id) => {
    cart[id] = (cart[id] || 0) + 1;
    updateCartDisplay();
};

const removeFromCart = (id) => {
    delete cart[id];
    updateCartDisplay();
};

const increment = (id) => {
    cart[id] = (cart[id] || 0) + 1;
    updateCartDisplay();
};

const decrement = (id) => {
    if (cart[id] > 1) {
        cart[id]--;
    } else {
        removeFromCart(id);
    }
    updateCartDisplay();
};

const updateCartDisplay = () => {
    const cartContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartContainer.innerHTML = "";

    const cartItems = Object.keys(cart).filter((id) => cart[id] > 0);

    if (cartItems.length === 0) {
        cartContainer.innerHTML =
            '<div class="empty-cart">Your cart is empty</div>';
        cartTotalElement.textContent = "0.00";
        return;
    }

    cartItems.forEach((id) => {
        const product = products.find((p) => p.id == id);
        const quantity = cart[id];
        const itemTotal = product.price * quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-price">$${product.price.toFixed(
                    2
                )} each</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="decrement(${id})">-</button>
                <span>${quantity}</span>
                <button class="quantity-btn" onclick="increment(${id})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    const total = calculateTotal();
    cartTotalElement.textContent = total.toFixed(2);
};

const calculateTotal = () => {
    return products.reduce((sum, product) => {
        return sum + product.price * (cart[product.id] || 0);
    }, 0);
};

const checkout = () => {
    const total = calculateTotal();
    if (total > 0) {
        alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
        cart = {};
        updateCartDisplay();
    } else {
        alert("Your cart is empty!");
    }
};

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    showProducts();
    updateCartDisplay();

    document.getElementById("checkout-btn").addEventListener("click", checkout);
});
