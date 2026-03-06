document.addEventListener('click', function (e) {

    if (e.target.classList.contains('success')) {

        let card = e.target.parentElement.parentElement; //job card


        //this is updating available number of jobs in reject section 'jodi reject section tab theke interview select kora hoy'
        if (card.parentElement.id === "reject-section") {
            const totaljobs = document.querySelectorAll('#jobs .job').length;
            const rejectjobs = document.querySelectorAll('#reject-section .job').length - 1;
            const numstatus = document.getElementById('cardnum');

            numstatus.innerHTML = `<span class="text-gray-500">${rejectjobs} of ${totaljobs} jobs</span>`;
        }

        //CHANGING THE STATUS OF THE CARD IN THE JOBS SECTION
        const alljobs = document.querySelectorAll('#jobs .job'); //gets all jobs in the jobs section
        alljobs.forEach(function (job) {
            if (job.innerHTML === card.innerHTML) {
                const statusbtn = job.querySelector('.status-check');
                statusbtn.textContent = "INTERVIEW";
                statusbtn.classList.remove("text-indigo-950", "text-red-600", "bg-red-200");
                statusbtn.classList.add("text-green-600", "bg-green-200"); //changing the status of the job in the jobs section
            }
        });


        //CHANGING THE STATUS OF THE CURRENT CARD
        const statusBtn = card.querySelector('.status-check');
        if (statusBtn) {
            statusBtn.textContent = "INTERVIEW";
            statusBtn.classList.remove("text-indigo-950", "text-red-600", "bg-red-200");
            statusBtn.classList.add("text-green-600", "bg-green-200");
        }


        /*Jodi Interview button e click kori jobs section theke,
        taile check korbe je same card reject Section e ache kina.
        jodi thake tahole reject section theke sheta remove hoye jabe
        (46-67)*/

        //ekhane current card er ekta clone banano hoitese (46-48)
        const cardCopy = document.createElement("div");
        cardCopy.className = card.className;
        cardCopy.innerHTML = card.innerHTML;

        if (card.parentElement.id === "jobs") {
            const status = document.querySelectorAll('#reject-section .job');
            status.forEach(function (job) {
                const cardCopy2 = document.createElement("div");
                cardCopy2.className = job.className;
                cardCopy2.innerHTML = job.innerHTML;
                cardCopy2.removeChild(cardCopy2.querySelector('.status-check'));

                const cardCopy3 = document.createElement("div");
                cardCopy3.className = cardCopy.className;
                cardCopy3.innerHTML = cardCopy.innerHTML;
                cardCopy3.removeChild(cardCopy3.querySelector('.status-check'));

                if (cardCopy3.innerHTML === cardCopy2.innerHTML) {
                    job.remove();
                }
            });
        }


        //ekhane check kortese je same card already exist kore kina interview tab e. Korle break korbe ar na korle interview tab e APPEND korbe(71-100)
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
                    if (document.getElementById('reject-section').querySelectorAll('.job').length === 0) {
                        document.getElementById('reject-section').classList.add('hidden');
                        document.getElementById('nojobs').classList.remove('hidden');
                    }
                    break;
                }
            }
            if (!duplicate) {

                intSection.appendChild(cardCopy);
                card.remove();
                if (document.getElementById('reject-section').querySelectorAll('.job').length === 0) {
                    document.getElementById('reject-section').classList.add('hidden');
                    document.getElementById('nojobs').classList.remove('hidden');
                }
            }
        }
        updateCounters();
    }



    if (e.target.classList.contains('rejected')) {

        let card = e.target.parentElement.parentElement;   //job card
        const alljobs = document.querySelectorAll('#jobs .job');  //all job cards from jobs section

        //this is updating available number of jobs in interview section 'jodi interview section tab theke reject select kora hoy' (112-118)
        if (card.parentElement.id === "interview-section") {
            const totaljobs = document.querySelectorAll('#jobs .job').length;
            const intjobs = document.querySelectorAll('#interview-section .job').length - 1;
            const numstatus = document.getElementById('cardnum');

            numstatus.innerHTML = `<span class="text-gray-500">${intjobs} of ${totaljobs} jobs</span>`;
        }

        //CHANGING THE STATUS OF THE CARD IN THE JOB SECTION
        alljobs.forEach(function (job) {
            if (job.innerHTML === card.innerHTML) {
                const statusbtn = job.querySelector('.status-check');
                statusbtn.textContent = "REJECTED";
                statusbtn.classList.remove("text-indigo-950", "text-green-600", "bg-green-200");
                statusbtn.classList.add("text-red-600", "bg-red-200");
            }
        });

        //CURRENT CARD TAR STATUS CHANGE KORTESE
        const statusBtn = card.querySelector('.status-check');
        if (statusBtn) {
            statusBtn.textContent = "REJECTED";
            statusBtn.classList.remove("text-indigo-950", "text-green-600", "bg-green-200");
            statusBtn.classList.add("text-red-600", "bg-red-200");
        }


        /*Jodi reject button e click kori jobs section theke,
        taile check korbe je same card interview Section e ache kina.
        jodi thake tahole interview section theke sheta remove hoye jabe
        */
        const cardCopy = document.createElement("div");
        cardCopy.className = card.className;
        cardCopy.innerHTML = card.innerHTML;

        if (card.parentElement.id === "jobs") {
            const status = document.querySelectorAll('#interview-section .job');
            status.forEach(function (job) {
                const cardCopy2 = document.createElement("div");
                cardCopy2.className = job.className;
                cardCopy2.innerHTML = job.innerHTML;
                cardCopy2.removeChild(cardCopy2.querySelector('.status-check'));

                const cardCopy3 = document.createElement("div");
                cardCopy3.className = cardCopy.className;
                cardCopy3.innerHTML = cardCopy.innerHTML;
                cardCopy3.removeChild(cardCopy3.querySelector('.status-check'));

                if (cardCopy3.innerHTML === cardCopy2.innerHTML) {
                    job.remove();
                }
            });
        }


        //ekhane check kortese je same card eixist kore kina reject tab e, korle break ar nahole reject tab e append
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
                    if (document.getElementById('interview-section').querySelectorAll('.job').length === 0) {
                        document.getElementById('interview-section').classList.add('hidden');
                        document.getElementById('nojobs').classList.remove('hidden');
                    }
                    break;
                }
            }
            if (!duplicate) {
                rejectSection.appendChild(cardCopy);
                card.remove();
                if (document.getElementById('interview-section').querySelectorAll('.job').length === 0) {
                    document.getElementById('interview-section').classList.add('hidden');
                    document.getElementById('nojobs').classList.remove('hidden');
                }
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

    // if (interviewJobs === 0) {
    //     document.getElementById('interview-section').classList.add('hidden');
    //     document.getElementById('nojobs').classList.remove('hidden');
    // }

    // if (rejectedJobs === 0) {
    //     document.getElementById('reject-section').classList.add('hidden');
    //     document.getElementById('nojobs').classList.remove('hidden');
    // }

}
