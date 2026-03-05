function active(btn) {
    var buttons = btn.parentElement.querySelectorAll(".btn-1");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-primary");
        buttons[i].classList.add("bg-base-300");
    }

    btn.classList.add("btn-primary");
    btn.classList.remove("bg-base-300");

    document.getElementById('jobs').classList.add("hidden");
    document.getElementById('interview-section').classList.add("hidden");
    document.getElementById('reject-section').classList.add("hidden");
    document.getElementById('nojobs').classList.add('hidden');

    if (btn.id === "all") {
        document.getElementById('jobs').classList.remove("hidden");

        const totaljobs = document.querySelectorAll('#jobs .job').length;
        const numstatus = document.getElementById('cardnum');


        numstatus.innerHTML = `<span class="text-gray-500">${totaljobs} jobs</span>`;


        if(totaljobs=== 0) {
            document.getElementById('jobs').classList.add('hidden');
            document.getElementById('nojobs').classList.remove('hidden');
        }

    }
    else if (btn.id === "int") {
        document.getElementById('interview-section').classList.remove("hidden");

        const status = document.querySelectorAll('#interview-section .status-check');
        status.forEach(function (btn) {
            btn.textContent = "INTERVIEW";
            btn.classList.remove("text-indigo-950", "text-red-600", "bg-red-200");
            btn.classList.add("text-green-600", "bg-green-200");
        });


        const totaljobs = document.querySelectorAll('#jobs .job').length;
        const intjobs = document.querySelectorAll('#interview-section .job').length;
        const numstatus = document.getElementById('cardnum');

        numstatus.innerHTML = `<span class="text-gray-500">${intjobs} of ${totaljobs} jobs</span>`;

        if(intjobs===0) {
            document.getElementById('interview-section').classList.add('hidden');
            document.getElementById('nojobs').classList.remove('hidden');
        }

    }
    else if (btn.id === "reject") {
        document.getElementById('reject-section').classList.remove("hidden");

        const status = document.querySelectorAll('#reject-section .status-check');
        status.forEach(function (btn) {
            btn.textContent = "REJECTED";
            btn.classList.remove("text-indigo-950", "text-green-600", "bg-green-200");
            btn.classList.add("text-red-600", "bg-red-200");
        });

        const totaljobs = document.querySelectorAll('#jobs .job').length;
        const rejectjobs = document.querySelectorAll('#reject-section .job').length;
        const numstatus = document.getElementById('cardnum');

        numstatus.innerHTML = `<span class="text-gray-500">${rejectjobs} of ${totaljobs} jobs</span>`;

        if(rejectjobs===0) {
            document.getElementById('reject-section').classList.add('hidden');
            document.getElementById('nojobs').classList.remove('hidden');
        }
    }
}