const mengdeInput = document.getElementById("number");
const lagForm = document.getElementById("budsjettMottaker");

const budsjettMengde = document.getElementById("budsjettMengde");
const balanseMengde = document.getElementById("balanseMengde");

const utgForm = document.getElementById("utgForm");
let utgNavn = document.getElementById("utgNavn");
let utgMengde = document.getElementById("utgMengde");

let id = 0;
let details = [];

console.log(utgForm);


function getBudsjettMengde(mengde) {
    if (!mengde) {
        mengdeInput.style.border = "1px solid #b80c09";
        mengdeInput.placeholder = "Input kan ikke være tom";
        mengdeInput.style.color = "#b80c09";
        setTimeout(() => {
            mengdeInput.style.color = "#495057";
            mengdeInput.style.border = "1px solid gray";
        }, 3000);
    } else {
        budsjettMengde.innerText = mengde;
        balanseMengde.innerText = mengde;
        utgiftMottaker.style.display = "block";
        budsjettMottaker.style.display = "none";
        endreMottaker.style.display = "none";
        mengdeInput.value = "";
    }
}

lagForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudsjettMengde(mengdeInput.value);
});


function addUtgifter(utgNavn, utgMengde) {
    if (!utgNavn.length || !utgMengde.length) {
        utgNavn.style.border = "1px solid #b80c09";
        utgNavn.placeholder = "Input kan ikke være tom";
        utgNavn.style.color = "b80x90";

        setTimeout(() => {
            utgNavn.style.color = "495057";
            utgNavn.style.border = "1px solid gray";
            utgNavn.placeholder = "Input kan ikke være tom";

            utgMengde.placeholder = "Inout kan ikke være tom";
            utgMengde.style.border = "1px solid gray";
            utgMengde.style.color = "495057";
        }, 3000);
    } else {
        const brukerUtg = {
            id: id,
            utgNavn: utgNavn,
            utgMengde: parseInt(utgMengde),
        };
        details.push(brukerUtg);
        displayUtg(details);
        id++;
        utgNavn.value = "";
        utgMengde.value = "";
    }
}

utgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addUtgifter(utgNavn.value, utgMengde.value);
});
