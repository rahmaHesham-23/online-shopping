document.addEventListener("DOMContentLoaded", function () {
    const userData = document.getElementById('user');
    const loginLink = document.querySelector('.login-link');
    const logoutLink = document.querySelector('.logout-link');

    const username = localStorage.getItem("username");

    if (username && userData) {
        userData.textContent = `Welcome, ${username}`;
    } else {
        userData.textContent = "Welcome, Guest!";
    }

    if (username) {
        if (loginLink) loginLink.style.display = "none";
        if (logoutLink) logoutLink.style.display = "inline";
    } else {
        if (loginLink) loginLink.style.display = "inline";
        if (logoutLink) logoutLink.style.display = "none";
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            const confirmation = confirm("Are you sure you want to log out?");
            if (confirmation) {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                localStorage.removeItem("email");

                if (logoutLink) logoutLink.style.display = "none";
                if (loginLink) loginLink.style.display = "inline";
                if (userData) userData.textContent = "Welcome, Guest!";

                alert("Logged out successfully");
            }
        });
    }
});


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const cartProducts = document.querySelector(".cart-products");

    if (cartIcon) {
        cartIcon.addEventListener("click", function () {
            cartProducts.classList.toggle("active");
        });
    }

    document.addEventListener("click", function (event) {
        if (!cartIcon.contains(event.target) && !cartProducts.contains(event.target)) {
            cartProducts.classList.remove("active");
        }
    });
});


// ////////////////////////////////////////////////////////////////////////////


const allProducts = document.querySelector(".shop-content");

let products = [
    {
        id: 1,
        product_name: "product: Diaper caddy",
        price: "price: 22.5$",
        imageUrl: "images/diapercaddy.jpg",
        kind: "category: children"
    },

    {
        id: 2,
        product_name: "product: Kids Scooter",
        price: "price: 68.9$",
        imageUrl: "images/KidsScooter.jpg",
        kind: "category: games"
    },
    {
        id: 3,
        product_name: "product: Baby Walker",
        price: "price: 15$",
        imageUrl: "images/Walker.jpg",
        kind: "category: children"
    },
    {
        id: 4,
        product_name: "product: Lego",
        price: "price: 9.9$",
        imageUrl: "images/lego.jpg",
        kind: "category: games"
    },
    {
        id: 5,
        product_name: "product: Swing",
        price: "price: 38$",
        imageUrl: "images/Swing.jpg",
        kind: "category: games"
    },
    {
        id: 6,
        product_name: "product: Bathtub",
        price: "price: 25.5$",
        imageUrl: "images/bathtub.jpg",
        kind: "category: children"
    },
    {
        id: 7,
        product_name: "product: Baby Carrier",
        price: "price: 13$",
        imageUrl: "images/Carrier.jpg",
        kind: "category: children"
    },
    {
        id: 8,
        product_name: "product: Baby Crib",
        price: "price: 42.4$",
        imageUrl: "images/babycrib.jpg",
        kind: "category: children"
    },
    {
        id: 9,
        product_name: "product: Water Toys",
        price: "price: 5$",
        imageUrl: "images/WaterToys.jpg",
        kind: "category: games"
    },
    {
        id: 10,
        product_name: "product: High Chair",
        price: "price: 47.9$",
        imageUrl: "images/HighChair.jpg",
        kind: "category: children"
    },
    {
        id: 11,
        product_name: "product: Car Seat",
        price: "price: 99.5$",
        imageUrl: "images/childcar.jpg",
        kind: "category: children"
    },
    {
        id: 12,
        product_name: "product: Blocks",
        price: "price: 19.5$",
        imageUrl: "images/blocks.jpg",
        kind: "category: games"
    },
    {
        id: 13,
        product_name: "product: Drone",
        price: "price: 93.8$",
        imageUrl: "images/Drone.jpg",
        kind: "category: Electronic"
    },
    {
        id: 14,
        product_name: "product: puzzle",
        price: "price: 33.8$",
        imageUrl: "images/puzzle.jpg",
        kind: "category: games"
    },
    {
        id: 15,
        product_name: "product: Roller Skates",
        price: "price: 78.5$",
        imageUrl: "images/RollerSkates.jpg",
        kind: "category: games"
    },
    {
        id: 16,
        product_name: "product: VR",
        price: "price: 88.5$",
        imageUrl: "images/vr.jpg",
        kind: "category: Electronic"
    },
    {
        id: 17,
        product_name: "product: PlayStation 5 Pro (PS5 Pro)",
        price: "price: 700$",
        imageUrl: "images/PlayStation5Pro.jpg",
        kind: "category: Electronic"
    },
    {
        id: 18,
        product_name: "product: Chess",
        price: "price: 100$",
        imageUrl: "images/Chess.jpg",
        kind: "category: games"
    },
    {
        id: 19,
        product_name: "product: hockey Table",
        price: "price: 72$",
        imageUrl: "images/hockeyTable.jpg",
        kind: "category: games"
    },
    {
        id: 20,
        product_name: "product: Arrow Toy",
        price: "price: 42.5$",
        imageUrl: "images/ArrowToy.jpg",
        kind: "category: games"
    },
];



function drawItems() {
    let productHTML = products.map((item) => {
        return `<div class="product-box" style="width: 20rem;">
                <div class="product-img">
                    <img src="${item.imageUrl}" alt="">
                </div>
                <div class="poduct--box-desc">
                    <h2 class="product-name">${item.product_name}</h2>
                    <span class="price">${item.price}</span>
                    <div class="kind">${item.kind}</div>
                </div>
                <div class="card-btns">
                    <li class="add-btn">Add To Cart</li>
                    <ul class="like-btn">
                        <li class="like-heart"><i class="fa-solid fa-heart" style="color: #acacac;"></i></li>
                        <li href="" class="liked-heart" style="display: none;"><i class="fa-solid fa-heart"
                                style="color: #d32222;"></i></li>
                    </ul>
                </div>
            </div>
                `;
    }).join("");
    allProducts.innerHTML = productHTML;
}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let cart = JSON.parse(localStorage.getItem("cart")) || [];
let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];


function drawItems() {
    let productHTML = products.map((item) => {

        const isLiked = likedProducts.includes(item.id);

        return `<div class="product-box" style="width: 20rem;">
                <div class="product-img">
                    <img src="${item.imageUrl}" alt="">
                </div>
                <div class="poduct--box-desc">
                    <h2 class="product-name">${item.product_name}</h2>
                    <span class="price">${item.price}</span>
                    <div class="kind">${item.kind}</div>
                </div>
                <div class="card-btns">
                    <li class="add-btn" onclick="addToCart(${item.id})">Add To Cart</li>
                    <ul class="like-btn">
                        <!-- إذا كان المنتج مضافًا إلى المفضلة، عرض الأيقونة الحمراء -->
                        <li class="like-heart" onclick="toggleLike(${item.id})" style="${isLiked ? 'display: none;' : 'display: inline-block;'}">
                            <i class="fa-solid fa-heart" style="color: #acacac;"></i>
                        </li>
                        <li class="liked-heart" onclick="toggleLike(${item.id})" style="${isLiked ? 'display: inline-block;' : 'display: none;'}">
                            <i class="fa-solid fa-heart" style="color: #d32222;"></i>
                        </li>
                    </ul>
                </div>
            </div>`;
    }).join("");
    allProducts.innerHTML = productHTML;
}



function isUserLoggedIn() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    return username !== null && email !== null;
}


function redirectToLogin() {
    alert("You must log in to add items to the cart!");
    window.location.href = 'login.html';
}


function addToCart(productId) {
    if (!isUserLoggedIn()) {
        redirectToLogin();
        return;
    }

    let product = products.find(item => item.id === productId);


    const isProductInCart = cart.some(item => item.id === productId);

    if (isProductInCart) {
        alert("This product is already in your cart!");
    } else {
        if (product) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    }
}

window.onload = () => {
    updateCartUI();
};


function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;

    const cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItemHTML = `
            <div class="cart-box">
                <img src="${item.imageUrl}" alt="" class="cart-img">
                <div class="details-cart">
                    <div class="cart-product-title">${item.product_name}</div>
                    <div class="cart-price">${item.price}</div>
                    <input type="number"  value="1" min="1" class="cart-quantity">
                </div>
                <i class="fa-solid fa-trash-can remove-item" style="color: #f91f1f;" onclick="removeFromCart(${index})"></i>
            </div>
        `;
        cartContent.innerHTML += cartItemHTML;
    });
}


function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}


function toggleCart() {
    const cartProducts = document.getElementById("cart-products");
    cartProducts.style.display = cartProducts.style.display === 'none' ? 'block' : 'none';
}



function isUserLoggedIn() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    return username !== null && email !== null;
}


function redirectToLogin() {
    alert("You must log in to use this feature!");
    window.location.href = 'login.html';
}


function toggleLike(productId) {
    if (!isUserLoggedIn()) {
        redirectToLogin();
        return;
    }

    const index = likedProducts.indexOf(productId);

    if (index === -1) {

        likedProducts.push(productId);
    } else {

        likedProducts.splice(index, 1);
    }


    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    drawItems();
}

window.onload = () => {
    updateCartUI();
    drawItems();
};


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// When the user types in the search input
document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const searchKind = document.getElementById('search-kind').value;

    const products = document.querySelectorAll('.product-box');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        const productKind = product.querySelector('.kind').textContent.toLowerCase();

        if (searchKind === 'product-name') {
            if (productName.includes(searchTerm)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        } else if (searchKind === 'kind') {
            if (productKind.includes(searchTerm)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        }
    });
});


// ////////////////////////////////////////////////////////////////

function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    const cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const productPrice = parseFloat(item.price.replace(/[^\d.-]/g, ''));
        const quantity = item.quantity || 1;
        totalPrice += productPrice * quantity;

        const cartItemHTML = `
            <div class="cart-box">
                <img src="${item.imageUrl}" alt="" class="cart-img">
                <div class="details-cart">
                    <div class="cart-product-title">${item.product_name}</div>
                    <div class="cart-price">${(productPrice * quantity).toFixed(2)}$</div>
                    <input type="number" value="${quantity}" min="1" class="cart-quantity" data-index="${index}">
                </div>
                <i class="fa-solid fa-trash-can remove-item" style="color: #f91f1f;" onclick="removeFromCart(${index})"></i>
            </div>
        `;
        cartContent.innerHTML += cartItemHTML;
    });

    const totalPriceElement = document.querySelector(".cart-content + li span");
    if (totalPriceElement) {
        totalPriceElement.textContent = `${totalPrice.toFixed(2)}$`;
    }

    const quantityInputs = document.querySelectorAll('.cart-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function () {
            const index = this.getAttribute('data-index');
            const newQuantity = parseInt(this.value) || 1;
            cart[index].quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        });
    });
}
