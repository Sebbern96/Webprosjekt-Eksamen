const mengdeInput = document.getElementById("number");
const lagForm = document.getElementById("budsjettMottaker");

const budsjettMengde = document.getElementById("budsjettMengde");
const balanseMengde = document.getElementById("balanseMengde");

const utgForm = document.getElementById("utgForm");
let utgNavn = document.getElementById("utgNavn");
let utgMengde = document.getElementById("utgNumber");

let id = 0;
let details = [];

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
        utgNavn.style.display = "block";
        budsjettMottaker.style.display = "none";
        endreMottaker.style.display = "none";
        mengdeInput.value = "";
    }
}

lagForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudsjettMengde(mengdeInput.value);
});

function addUtgifter(utgNavn, utgNumber) {
    if (!utgNavn.length || !utgNumber.length) {
        utgNavn.style.border = "1px solid #b80c09";
        utgNavn.placeholder = "Input kan ikke være tom";
        utgNavn.style.color = "b80x90";

        utgNumber.style.border = "1px solid#b80c09";
        utgNumber.placeholder = "input can not be empty";
        utgNumber.style.color = "#b80c09";

        setTimeout(() => {
            utgNavn.style.color = "495057";
            utgNavn.style.border = "1px solid gray";
            utgNavn.placeholder = "Input kan ikke være tom";
            
            utgNumber.placeholder = "Input kan ikke være tom";
            utgNumber.style.border = "1px solid gray";
            utgNumber.style.color = "#495057";
        }, 3000);
    } else {
        const brukerUtg = {
            id: id,
            utgNavn: utgNavn,
            utgNumber: parseInt(utgNumber),
        };
        details.push(brukerUtg);
        displayUtg(details);
        id++;
        utgNavn.value = "";
        utgNumber.value = "";
    }
}

utgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addUtgifter(utgNavn.value, utgNumber.value);
});

function visUtg(details) {
    utgNumber.innerHTML = null;
    for (i = 0; i < details.length; i++) {
        utgNumber.innerHTML += `
        <div class="utgMengde" id="kr.{details[i].id}">
            <div id= "utgNavn" class="utg"<p>kr.{detailst[i].name}</p></div>
            <div id= "utgMengde" class "utg"><p> <span>kr. </span>kr.{details[i].number}</p></div>
            <div id= "endreOgSlette">
                <p>
                    <button id="kr.{details[i].id}" onclick="endreUtg(kr.{details[i].id})">
                    <button id="kr.{details[i].id}" onclick="slettUtg(kr.{details[i].id})">
                </p>
            </div>
        </div>
        `;
    }
    regnUtg();
    visUtg.style.display = "block";
}

function regnUtg() {
    let totalUtg = 0;
    for (i = 0; i < details.length; i++) {
        totalUtg = details[i].number + totalUtg;
    }
    utgMengde.innerText = totalUtg;
    nyBalanse();
}

function nyBalanse() {
    balanseMengde.innerText =
    parseInt(budsjettMengde.innerText) - parseInt(utgMengde.innerText);
}