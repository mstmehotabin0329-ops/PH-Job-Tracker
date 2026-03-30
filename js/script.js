let activeTab = "all"
let activebtn = ['btn-info', 'text-white']
let inactivebtn = ['btn-active', 'text-[#444a52]']


let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');
let availableCount = document.getElementById("availableCount");


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-conainer");
const emptyState = document.getElementById('no-data');





// main botton 
function toggleStyle(toggle) {

    const btns = ["all", "interview", "rejected"];
    activeTab = toggle;
    for (const btn of btns) {
        const btnNane = document.getElementById("tab-" + btn);


        if (btn === toggle) {
            btnNane.classList.remove(...inactivebtn);
            btnNane.classList.add(...activebtn);
        } else {
            btnNane.classList.add(...inactivebtn);
            btnNane.classList.remove(...activebtn);
        }
    }

   const views = [allContainer, interviewContainer, rejectedContainer];

    for (let section of views) {
        section.classList.add('hidden');
        emptyState.classList.add('hidden');
    }
    if (toggle === 'all') {
        allContainer.classList.remove('hidden');
        if (allContainer.children.length === 0) {
            emptyState.classList.remove('hidden');
        }
    }
    else if (toggle === 'interview') {
        interviewContainer.classList.remove('hidden');
        if (interviewContainer.children.length === 0) {
            emptyState.classList.remove('hidden');
        }
    }
    else {
        rejectedContainer.classList.remove('hidden');
        if (rejectedContainer.children.length === 0) {
            emptyState.classList.remove('hidden');
        }
    }
    calculateCount();
}

toggleStyle(activeTab);

document.getElementById('allJobsContainer').addEventListener("click", function (event) {
    // console.log(event.target);
    const targetCard = event.target;
    const card = targetCard.closest('.jobChild');
    const status = card.querySelector('.type');
    const parent = card.parentNode;

    if (targetCard.classList.contains('inverviw-btn')) {
        status.innerText = "Interview"
        interviewContainer.appendChild(card);
    }
    if (targetCard.classList.contains('rejected-btn')) {
        status.innerText = "Rejected"
        rejectedContainer.appendChild(card);

    }
    // added delete card functionality
    if (targetCard.classList.contains('deleted')) {
        parent.removeChild(card);


    }
    calculateCount();
})

// all calculation
function calculateCount() {
    
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };
    totalCount.innerText = counts.all;
    interviewCount.innerText = counts.interview;
    rejectedCount.innerText = counts.rejected;
    availableCount.innerText = counts[activeTab];

    if(counts[activeTab] === 0){
        emptyState.classList.remove('hidden');
    }
    else{
        emptyState.classList.add('hidden');
    }


}
calculateCount();

