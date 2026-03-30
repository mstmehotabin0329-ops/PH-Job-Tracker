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

}
