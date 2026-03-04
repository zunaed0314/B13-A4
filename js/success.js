const succ = document.querySelectorAll(".success");

succ.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        let card = e.target.parentElement.parentElement;

        const newCard = document.createElement("div");
        newCard.className = card.className;
        newCard.innerHTML = card.innerHTML;

        console.log(newCard);

        const intSection = document.getElementById("inter");
        intSection.appendChild(newCard);
    });
});