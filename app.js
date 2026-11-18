
// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.right = "30px";
        toast.style.backgroundColor = "#d4af37";
        toast.style.color = "#07152f";
        toast.style.padding = "15px 25px";
        toast.style.borderRadius = "8px";
        toast.style.fontWeight = "bold";
        toast.style.zIndex = "9999";
        toast.style.transition = "opacity 0.3s ease";

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.style.opacity = "0";
    }, 3000);
}


// Smooth Scrolling for Match Book Buttons
document.querySelectorAll('a[href="#booking"]').forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const bookingSection = document.getElementById("booking");

        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            showToast("Redirecting to the booking form!");
        }

    });

});

console.log("JavaScript loaded successfully!");


// Activity 7: Selector Forms and Live Booking Summary

// Selecting form controls
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Selecting Booking Summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

// Ticket prices
const ticketPrices = {
    "RCB vs CSK": {
        General: 800,
        Premium: 1500,
        VIP: 3000
    },

    "MI vs KKR": {
        General: 1000,
        Premium: 2000,
        VIP: 4000
    },

    "SRH vs RR": {
        General: 700,
        Premium: 1400,
        VIP: 2800
    },

    "DC vs PBKS": {
        General: 900,
        Premium: 1800,
        VIP: 3500
    },

    "GT vs LSG": {
        General: 800,
        Premium: 1600,
        VIP: 3200
    }
};

// Function to update Booking Summary
function updateBookingSummary() {

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value);

    // Check if all selections are valid
    if (!match || !stand || quantity < 1 || quantity > 10) {
        return;
    }

    // Get ticket price
    const price = ticketPrices[match][stand];

    // Calculate total amount
    const total = price * quantity;

    // Update Booking Summary Card
    summaryMatch.textContent = match;
    summaryStand.textContent = stand;
    summaryPrice.textContent = "₹" + price;
    summaryQuantity.textContent = quantity;
    summaryTotal.textContent = "₹" + total;

    // Display toast notification
    showToast("Booking summary updated successfully!");
}

// Add change event listeners
matchSelect.addEventListener("change", updateBookingSummary);

standSelect.addEventListener("change", updateBookingSummary);

quantityInput.addEventListener("change", updateBookingSummary);


// =====================================
// ACTIVITY 8 - RESPONSIVE INTERACTIVITY
// =====================================


// 1. Team Filter

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function (card) {

        const teams = card.dataset.teams.split(" ");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


// 2. Grid and List View Toggle

const matchContainer = document.getElementById("matchContainer");
const gridButton = document.getElementById("gridView");
const listButton = document.getElementById("listView");

gridButton.addEventListener("click", function () {

    matchContainer.classList.remove("match-list");
    matchContainer.classList.add("match-grid");

    gridButton.classList.add("active-view");
    listButton.classList.remove("active-view");

});

listButton.addEventListener("click", function () {

    matchContainer.classList.remove("match-grid");
    matchContainer.classList.add("match-list");

    listButton.classList.add("active-view");
    gridButton.classList.remove("active-view");

});


// 3. Mobile Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show-menu");

    const isExpanded = navLinks.classList.contains("show-menu");

    menuToggle.setAttribute("aria-expanded", isExpanded);

});

// Close mobile menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show-menu");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

console.log("Activity 8 JavaScript loaded successfully!");
