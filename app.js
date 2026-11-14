
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
