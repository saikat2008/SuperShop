let cart = 0;


/* ================= CART ================= */

function addToCart(productName) {

    cart++;

    document.getElementById("cartCount").textContent = cart;

    alert(productName + " added to your cart!");
}


function showCart() {

    if (cart === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You have " +
            cart +
            " item(s) in your cart."
        );
    }
}


/* ================= SEARCH ================= */

function openSearch() {

    document
        .getElementById("searchPanel")
        .classList.add("active");

    document
        .getElementById("searchInput")
        .focus();
}


function closeSearch() {

    document
        .getElementById("searchPanel")
        .classList.remove("active");
}


function searchProducts() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const name =
            product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });
}


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav =
        document.querySelector(".nav");

    nav.classList.toggle("mobile-active");

}


/* ================= SCROLL HEADER ================= */

window.addEventListener("scroll", function() {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.07)";

    } else {

        header.style.boxShadow = "none";

    }

});
