function active(btn) {

    var buttons = btn.parentElement.querySelectorAll(".btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-primary");
        buttons[i].classList.add("bg-base-300");
    }

    // Make the clicked button primary
    btn.classList.add("btn-primary");
    btn.classList.remove("bg-base-300");
}