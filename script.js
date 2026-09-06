// Cart array
let cart = [];


// Add food to cart
function addToCart(name, price) {

    const item = {
        name: name,
        price: price
    };

    cart.push(item);

    displayCart();

    alert(name + " added to cart!");
}


// Display cart
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    let total = 0;


    // Check if cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        totalElement.textContent = "0";

        return;
    }


    // Display each item
    cart.forEach(function(item, index) {

        total = total + item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });


    // Display total
    totalElement.textContent = total;
}


// Remove item from cart
function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}


// Place order
function placeOrder() {

    const message = document.getElementById("message");

    if (cart.length === 0) {

        alert("Please add food to your cart first.");

        return;
    }


    message.textContent =
        "🎉 Order placed successfully! Your food is on the way.";

    cart = [];

    displayCart();
}
