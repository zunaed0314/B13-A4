document.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('trash') || e.target.closest('.trash')) {
        
        const trashBtn = e.target.closest('.trash');
        
        const card = trashBtn.closest('.job');
        
        if (card) {
            card.remove();
            
            updateCounters();
            
            console.log("Card removed from:", card.parentElement.id);
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