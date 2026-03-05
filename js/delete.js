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


            // if (card.parentElement.id === "interview-section") {
            //     console.log(card.parentElement.id);
            //     let num = document.querySelectorAll('#jobs .job').length;
            //     let num2 = document.querySelectorAll('#interview-section .job').length - 1;

            //     const numstatus = document.getElementById('cardnum');
            //     numstatus.innerHTML = `<span class="text-gray-500">${num2} of ${num} jobs</span>`;

            // }
            // else if (card.parentElement.id === "reject-section") {
            //     console.log(card.parentElement.id);

            //     let num = document.querySelectorAll('#jobs .job').length;
            //     let num3 = document.querySelectorAll('#reject-section .job').length - 1;

            //     const numstatus = document.getElementById('cardnum');
            //     numstatus.innerHTML = `<span class="text-gray-500">${num3} of ${num} jobs</span>`;
            // }

            card.remove();
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
    document.getElementById('countjobs').textContent = totalJobs;

    console.log(`Counters updated - Total: ${totalJobs}, Interview: ${interviewJobs}, Rejected: ${rejectedJobs}`);
}