document.addEventListener('click', function (e) {

    if (e.target.classList.contains('trash') || e.target.parentElement.classList.contains('trash')) {

        let trashBtn;
        if (e.target.classList.contains('trash')) {
            trashBtn = e.target;
        } else {
            trashBtn = e.target.parentElement;
        }

        const card = trashBtn.parentElement;

        if (card && card.classList.contains('job')) {
            if (card.parentElement.id === "interview-section") {   //JOKHON INTERVIEW SECTION THEKE DELETE KORTESI

                const cardCopy = document.createElement('div');
                cardCopy.className = card.className;
                cardCopy.innerHTML = card.innerHTML;

                const statusCheck = cardCopy.querySelector('.status-check');
                if (statusCheck) {
                    cardCopy.removeChild(statusCheck);
                }

                const alljobs = document.querySelectorAll('#jobs .job');

                alljobs.forEach(function (job) {
                    const cardCopy2 = document.createElement("div");
                    cardCopy2.className = job.className;
                    cardCopy2.innerHTML = job.innerHTML;

                    const statusCheck2 = cardCopy2.querySelector('.status-check');
                    if (statusCheck2) {
                        cardCopy2.removeChild(statusCheck2);
                    }

                    if (cardCopy2.innerHTML === cardCopy.innerHTML) {
                        const jobStatus = job.querySelector('.status-check');
                        if (jobStatus) {
                            jobStatus.classList.remove("text-green-600", "bg-green-200");
                            jobStatus.classList.add("text-indigo-950", "btn-soft");
                            jobStatus.textContent = 'NOT APPLIED';   //INTERVIEW THEKE DELETE KORLE STATUS TA NOT APPLIED E HOYE JABE
                        }
                    }
                });
                card.remove();
                checkempty('interview-section');
                checkSections('interview-section');
            }
            else if (card.parentElement.id === "reject-section") {

                let num = document.querySelectorAll('#jobs .job').length;
                let num3 = document.querySelectorAll('#reject-section .job').length - 1;

                const numstatus = document.getElementById('cardnum');
                numstatus.innerHTML = `<span class="text-gray-500">${num3} of ${num} jobs</span>`;

                const cardCopy = document.createElement('div');
                cardCopy.className = card.className;
                cardCopy.innerHTML = card.innerHTML;

                const statusCheck = cardCopy.querySelector('.status-check');
                if (statusCheck) {
                    cardCopy.removeChild(statusCheck);
                }

                const alljobs = document.querySelectorAll('#jobs .job');

                alljobs.forEach(function (job) {
                    const cardCopy2 = document.createElement("div");
                    cardCopy2.className = job.className;
                    cardCopy2.innerHTML = job.innerHTML;
                    const statusCheck2 = cardCopy2.querySelector('.status-check');
                    if (statusCheck2) {
                        cardCopy2.removeChild(statusCheck2);
                    }


                    if (cardCopy2.innerHTML === cardCopy.innerHTML) {
                        const jobStatus = job.querySelector('.status-check');
                        if (jobStatus) {
                            jobStatus.classList.remove("text-red-600", "bg-red-200");
                            jobStatus.classList.add("text-indigo-950", "btn-soft");
                            jobStatus.textContent = 'NOT APPLIED';
                        }
                    }
                });
                card.remove();
                checkempty('reject-section');
                checkSections('reject-section');
            }
            else if (card.parentElement.id === "jobs") {
                const cardCopy = document.createElement('div');
                cardCopy.className = card.className;
                cardCopy.innerHTML = card.innerHTML;

                if (cardCopy.querySelector('.status-check').textContent === "INTERVIEW") {
                    const statusCheck = cardCopy.querySelector('.status-check');
                    if (statusCheck) {
                        cardCopy.removeChild(statusCheck);
                        console.log("Interview status removed from jobs card");
                    }
                    const alljobs = document.querySelectorAll('#interview-section .job');

                    alljobs.forEach(function (job) {
                        const cardCopy2 = document.createElement("div");
                        cardCopy2.className = job.className;
                        cardCopy2.innerHTML = job.innerHTML;
                        const statusCheck2 = cardCopy2.querySelector('.status-check');
                        if (statusCheck2) {
                            cardCopy2.removeChild(statusCheck2);
                            console.log("Interview status removed from interview section card")
                        }
                        if (cardCopy2.innerHTML === cardCopy.innerHTML) {
                            job.remove();
                            console.log("interview section theke card removed");
                        }

                    });
                    card.remove();
                    checkempty('jobs');
                    checkSections('jobs');
                }
                else if (cardCopy.querySelector('.status-check').textContent === "REJECTED") {
                    const statusCheck = cardCopy.querySelector('.status-check');
                    if (statusCheck) {
                        cardCopy.removeChild(statusCheck);
                        console.log("STATUS REMOVED FROM THE JOBS CARD");
                    }
                    const alljobs = document.querySelectorAll('#reject-section .job');

                    alljobs.forEach(function (job) {
                        const cardCopy2 = document.createElement("div");
                        cardCopy2.className = job.className;
                        cardCopy2.innerHTML = job.innerHTML;
                        const statusCheck2 = cardCopy2.querySelector('.status-check');
                        if (statusCheck2) {
                            cardCopy2.removeChild(statusCheck2);
                            console.log("STATUS REMOVED FROM THE REJECT-SECTION CARD");
                        }
                        if (cardCopy2.innerHTML === cardCopy.innerHTML) {
                            job.remove();
                        }
                    });
                    card.remove();
                    console.log("REJECT SECTION THEKE MATCHED CARD REMOVED")
                    checkempty('reject-section');
                    checkSections('jobs');
                }
                else if (cardCopy.querySelector('.status-check').textContent === "NOT APPLIED") {
                    card.remove();
                    checkempty('jobs');
                    checkSections('jobs');
                }
            }
            updateCounters();
        }
    }
});

function updateCounters() {
    const totalJobs = document.querySelectorAll('#jobs .job').length;
    const interviewJobs = document.querySelectorAll('#interview-section .job').length;
    const rejectedJobs = document.querySelectorAll('#reject-section .job').length;

    document.getElementById('total').textContent = totalJobs;
    document.getElementById('interview').textContent = interviewJobs;
    document.getElementById('reject').textContent = rejectedJobs;

}

function checkempty(section) {
    if (document.getElementById(section).querySelectorAll('.job').length === 0) {
        document.getElementById(section).classList.add('hidden');
        document.getElementById('nojobs').classList.remove('hidden');
    }

}

function checkSections(section) {
    if (section !== "jobs") {
        let num = document.querySelectorAll('#jobs .job').length;
        let num2 = document.querySelectorAll(`#${section} .job`).length;
        const numstatus = document.getElementById('cardnum');
        numstatus.innerHTML = `<span class="text-gray-500">${num2} of ${num} jobs</span>`;
    }
    else
    {
        let num = document.querySelectorAll('#jobs .job').length;
        const numstatus = document.getElementById('cardnum');
        numstatus.innerHTML = `<span class="text-gray-500">${num} jobs</span>`;
    }
}