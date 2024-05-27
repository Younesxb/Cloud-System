

const products = [
    { name: 'Controller', price: 59.99 },
    { name: 'Microfoon', price: 69.99 },
    { name: 'Headset', price: 99.99 },
    { name: 'Externeschijf', price: 29.99 },
    { name: 'Muis', price: 59.99 },
    { name: 'Monitor', price: 99.99 },
    { name: 'Laptopstand', price: 39.99 },
    { name: 'Stoel', price: 69.99 },
    { name: 'Muziekbox', price: 39.99 },
    { name: 'Keyboard', price: 49.99 },
    { name: 'Oplaadfunctie', price: 19.99 },
    { name: 'Verlichting', price: 19.99 },

];

const cart = [];

const wishlist = [];


function addToCart(productName, productPrice) {

    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCartDisplayWithButtons(); 
    updateButtonBackground(productName, isInWishlist(productName), 'btn-wishlist'); 
    alert(`Product "${productName}" toegevoegd aan winkelmandje`);
}

function removeFromCart(productName, quantity) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity -= quantity;

        if (existingItem.quantity <= 0) {
            cart.splice(cart.indexOf(existingItem), 1);
        }
    }

    updateCartDisplayWithButtons(); 
    updateButtonBackground(productName, isInWishlist(productName), 'btn-wishlist');
}


function updateCartDisplayWithButtons() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        const removeButton = document.createElement('button');

        removeButton.textContent = 'Verwijder';
        removeButton.classList.add('btn-remove');
        removeButton.onclick = () => removeFromCart(item.name, 1);

        listItem.textContent = `${item.name} (€${item.price.toFixed(2)} per stuk): ${item.quantity} stuks`;
        listItem.appendChild(removeButton);

        cartItemsElement.appendChild(listItem);

    
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Totaal: €${totalPrice.toFixed(2)}`;
}



function addToWishlist(productName, productPrice) {
 
    const existingItem = wishlist.find(item => item.name === productName);

    if (existingItem) {
    
        wishlist.splice(wishlist.indexOf(existingItem), 1);

    } else {
        
        wishlist.push({ name: productName, price: productPrice });
    }

    updateWishlistDisplay();
    updateButtonBackground(productName, isInWishlist(productName), 'btn-wishlist');
  
}


function updateWishlistDisplay() {
    const wishlistItemsElement = document.getElementById('wishlist-items');
    wishlistItemsElement.innerHTML = '';

    wishlist.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: €${item.price.toFixed(2)}`;
        wishlistItemsElement.appendChild(listItem);
    });
}

function updateButtonBackground(productName, isInList, buttonClass) {
    const button = document.querySelector(`.${buttonClass}[data-product="${productName}"]`);
    if (button) {
        if (isInList) {
            button.classList.add('btn-added');
        } else {
            button.classList.remove('btn-added');
        }
    }
}

function isInWishlist(productName) {
    return wishlist.some(item => item.name === productName);
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Voorkomt dat het formulier de standaard actie uitvoert (verzenden)


        alert("Review geplaatst!");
    });
});