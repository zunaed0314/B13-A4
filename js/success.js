document.addEventListener('click', function (e) {

    if (e.target.classList.contains('success')) {

        let card = e.target.parentElement.parentElement; //job card
        const alljobs = document.querySelectorAll('#jobs .job'); //gets all jobs in the jobs section

        alljobs.forEach(function (job) {
            if (job.innerHTML === card.innerHTML) {
                const statusbtn = job.querySelector('.status-check');
                statusbtn.textContent = "INTERVIEW";
                statusbtn.classList.remove("text-indigo-950", "text-red-600", "bg-red-200");
                statusbtn.classList.add("text-green-600", "bg-green-200");
            }
        });

        const statusBtn = card.querySelector('.status-check');
        if (statusBtn) {
            statusBtn.textContent = "INTERVIEW";
            statusBtn.classList.remove("text-indigo-950", "text-red-600", "bg-red-200");
            statusBtn.classList.add("text-green-600", "bg-green-200");
        }


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

                intSection.appendChild(cardCopy);
                card.remove();
            }
        }

        updateCounters();
    }

    if (e.target.classList.contains('rejected')) {
        console.log("Rejected button clicked");

        let card = e.target.parentElement.parentElement;
        const alljobs = document.querySelectorAll('#jobs .job');


        alljobs.forEach(function (job) {
            if (job.innerHTML === card.innerHTML) {
                const statusbtn = job.querySelector('.status-check');
                statusbtn.textContent = "REJECTED";
                statusbtn.classList.remove("text-indigo-950", "text-green-600", "bg-green-200");
                statusbtn.classList.add("text-red-600", "bg-red-200");
            }
        });

        const statusBtn = card.querySelector('.status-check');
        if (statusBtn) {
            statusBtn.textContent = "REJECTED";
            statusBtn.classList.remove("text-indigo-950", "text-green-600", "bg-green-200");
            statusBtn.classList.add("text-red-600", "bg-red-200");
        }


        const cardCopy = document.createElement("div");
        cardCopy.className = card.className;
        cardCopy.innerHTML = card.innerHTML;

        const rejectSection = document.getElementById("reject-section");
        const childs = rejectSection.children;
        let duplicate = false;

        if (card.parentElement.id === "jobs") {
            for (let i = 0; i < childs.length; i++) {
                if (cardCopy.innerHTML === childs[i].innerHTML) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) {
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