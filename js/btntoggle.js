function active(btn) {
    var buttons = btn.parentElement.querySelectorAll(".btn-1");

    console.log(buttons);
    console.log(btn.id);

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-primary");
        buttons[i].classList.add("bg-base-300");
    }

    btn.classList.add("btn-primary");
    btn.classList.remove("bg-base-300");

    document.getElementById('jobs').classList.add("hidden");
    document.getElementById('interview-section').classList.add("hidden");
    document.getElementById('reject-section').classList.add("hidden");

    if (btn.id === "all") {
        document.getElementById('jobs').classList.remove("hidden");
    }
    else if (btn.id === "int") {
        document.getElementById('interview-section').classList.remove("hidden");
    }
    else if (btn.id === "reject") {
        document.getElementById('reject-section').classList.remove("hidden");
    }
}