const mengdeInput = document.getElementById("number");
const addForm = document.getElementById("lagVisning");

const budsjettMengde = document.getElementById("busjettMengde");
const balanseMengde = document.getElementById("mengdeBudsjett");

function getBudgetMengde(mengde) {
    if (!mengde) {
        mengdeInput.style.border = "1px solid #b80c09";
        mengdeInput.placeholder = "feltet kan ikke være tomt";
        mengdeInput.style.color = "b80x09";
        setTimeout(() => {
            mengdeInput.style.color = "#495057";
            mengdeInput.style.border = "1px solid gray";
        }, 3000);
    }else {
        budsjettMengde.innerText = mengde;
        balanseMengde.innerText = mengde;
        utgiftVisning.style.display = "block";
        budsjettVisning.style.display = "none";
        endreVisning.style.display = "none";
        mengdeInput.value = "";
    }
} 

lagVisning.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetMengde(mengdeInput.value);
});