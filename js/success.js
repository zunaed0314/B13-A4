document.addEventListener('click', function (e) {

    if (e.target.classList.contains('success')) {
        console.log("Interview button clicked");

        let card = e.target.parentElement.parentElement;

        const cardCopy = document.createElement("div");
        cardCopy.className = card.className;
        cardCopy.innerHTML = card.innerHTML;

        const intSection = document.getElementById("interview-section");

        const childs = intSection.children;

        let duplicate = false;

        if (card.parentElement.id === "jobs") {
            for (let i = 0; i < childs.length; i++) {
                if (cardCopy.innerHTML === childs[i].innerHTML) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) {
                // const status = card.querySelector('.status-check');
                // status.textContent = "INTERVIEW";
                // status.classList.remove("text-indigo-950","text-red-600", "bg-red-200");
                // status.classList.add("text-green-600", "bg-green-200");
            

                intSection.appendChild(cardCopy);
            }
        }
        else if (card.parentElement.id === "reject-section") {

            for (let i = 0; i < childs.length; i++) {
                if (cardCopy.innerHTML === childs[i].innerHTML) {
                    duplicate = true;
                    card.remove();
                    break;
                }
            }
            if (!duplicate) {
                // const status = card.querySelector('.status-check');
                // status.textContent = "INTERVIEW";
                // status.classList.remove("text-indigo-950");
                // status.classList.add("text-green-600", "bg-green-200");

                intSection.appendChild(cardCopy);
                card.remove();
            }

        }

        updateCounters();
    }

    if (e.target.classList.contains('rejected')) {
        console.log("Rejected button clicked");

        let card = e.target.parentElement.parentElement;

        const cardCopy = document.createElement("div");
        cardCopy.className = card.className;
        cardCopy.innerHTML = card.innerHTML;

        const rejectSection = document.getElementById("reject-section");

        const childs = rejectSection.children;
        console.log(childs);

        let duplicate = false;

        if (card.parentElement.id === "jobs") {
            for (let i = 0; i < childs.length; i++) {
                if (cardCopy.innerHTML === childs[i].innerHTML) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) {
                // const status = card.querySelector('.status-check');
                // status.textContent = "REJECTED";
                // status.classList.remove("text-indigo-950");
                // status.classList.add("text-red-600", "bg-red-200");

                rejectSection.appendChild(cardCopy);
            }
        }
        else if (card.parentElement.id === "interview-section") {

            for (let i = 0; i < childs.length; i++) {
                if (cardCopy.innerHTML === childs[i].innerHTML) {
                    duplicate = true;
                    card.remove();
                    break;
                }
            }
            if (!duplicate) {
                // const status = card.querySelector('.status-check');
                // status.textContent = "REJECTED";
                // status.classList.remove("text-indigo-950");
                // status.classList.add("text-red-600", "bg-red-200");
                
                rejectSection.appendChild(cardCopy);
                card.remove();
            }
        }

        updateCounters();
    }
});

function updateCounters() {
    const totalJobs = document.querySelectorAll('#jobs .job').length;
    const interviewJobs = document.querySelectorAll('#interview-section .job').length;
    const rejectedJobs = document.querySelectorAll('#reject-section .job').length;
    
    document.getElementById('total').textContent = totalJobs;
    document.getElementById('interview').textContent = interviewJobs;
    document.getElementById('reject').textContent = rejectedJobs;
    document.getElementById('countjobs').textContent = totalJobs;
    
    console.log(`Counters updated - Total: ${totalJobs}, Interview: ${interviewJobs}, Rejected: ${rejectedJobs}`);
}