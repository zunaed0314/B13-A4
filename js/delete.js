const trash = document.querySelectorAll(".trash");

const jobsSection = document.getElementById("jobs");
const total = jobsSection.children.length;

console.log(total);

const totalElement = document.getElementById('countjobs');

trash.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        if (e.target.matches(".trash")) {
            e.target.parentElement.remove();
        }
        else if (e.target.matches("i")) {
            e.target.parentElement.parentElement.remove();
        }

        const updatedTotal = jobsSection.children.length;
        totalElement.textContent = `${updatedTotal}`;
    });
});