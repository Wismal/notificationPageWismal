let button = document.querySelector("h2");
let dots = document.querySelectorAll(".dot");
let notificationNumber = document.getElementById("notificationNumber");

button.addEventListener("click", () => {
    dots.forEach(element => {
        element.classList.add("remove");
    });

    notificationNumber.innerHTML = "0";
});

