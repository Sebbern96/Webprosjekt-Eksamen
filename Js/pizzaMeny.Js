//Ansatt Class
class Ansatt {
    constructor(navn, stilling, restaurant, kontakt) {
        this.navn = navn;
        this.stilling = stilling;
        this.restaurant = restaurant;
        this.kontakt = kontakt;
    }
}

//UI Class
class UI {
    static displayAnsatte() {
        const ansatte = Store.getAnsatte();
        
        ansatte.forEach((ansatt) => UI.addAnsattToList(ansatt));
    }
        static addAnsattToList(ansatt) {
            const list = document.querySelector('#ansatt-list');
            
            const row = document.createElement('tr');
            
            row.innerHTML = `
            <td>${ansatt.navn}</td>
            <td>${ansatt.stilling}</td>
            <td>${ansatt.restaurant}</td>
            <td>${ansatt.kontakt}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`;
        list.appendChild(row);        
}
    
        static deleteAnsatt(el) {
            if(el.classList.contains('delete')) {
                el.parentElement.parentElement.remove();
            }
        } 
    
        static showAlert(message, className){
            const div = document.createElement('div');
            div.className =`alert-${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const form = document.querySelector('#ansatt-form');
            container.insertBefore(div, form);
            
//Timer
setTimeout(() => document.querySelector('.alert').remove(),2000);
        }
    
        static clearFields() {
            document.querySelector('#navn').value = '';
            document.querySelector('#stilling').value = '';
            document.querySelector('#restaurant').value = '';
            document.querySelector('#kontakt').value = '';
        }
}

//Event: Storage
class Store {
    static getAnsatte() {
       let ansatte;
        if(localStorage.getItem('ansatte') === null) {
            ansatte = [];
        } else {
            ansatte = JSON.parse(localStorage.getItem('ansatte'));
        }
        
    return ansatte;
    }
    
    static addAnsatt(ansatt) {
        const ansatte = Store.getAnsatte();
        ansatte.push(ansatt);
        localStorage.setItem('ansatte', JSON.stringify(ansatte));
    }
    
    static removeAnsatt(kontakt) {
        const ansatte = Store.getAnsatte();
        
        ansatte.forEach((ansatt, index) => {
            if(ansatt.kontakt === kontakt) {
            ansatte.splice(index, 1);
            }
        });
        
    localStorage.setItem('ansatte', JSON.stringify(ansatte)); 
    }
}

//Event: Vis Ansatte
document.addEventListener('DOMContentLoaded', UI.displayAnsatte);

//Event: Legg til Ansatt
document.querySelector('#ansatt-form').addEventListener('submit', (e) => {
    
//Prevent submit
e.preventDefault();
    
//Get Values
const navn = document.querySelector('#navn').value;
const stilling = document.querySelector('#stilling').value;
const restaurant = document.querySelector('#restaurant').value;
const kontakt = document.querySelector('#kontakt').value;
    
//Validate
if(navn === '' || stilling === '' || restaurant === '' || kontakt === '') {
    UI.showAlert('Fyll inn alle felt!', 'info');
} else {
    
//Instatiate ansatt
const ansatt = new Ansatt(navn, stilling, restaurant, kontakt);

//Add Ansatt to UI
UI.addAnsattToList(ansatt);
    
//Add Ansatt to Store
Store.addAnsatt(ansatt);
    
//Clear 
UI.clearFields();   
   
}     
});

//Event: Fjern Ansatt
document.querySelector('#ansatt-list').addEventListener('click', (e) => {
    
//Fjern Ansatt UI
UI.deleteAnsatt(e.target);
    
//Fjern Ansatt Storage
Store.removeAnsatt(e.target.parentElement.previousElementSibling.textContent);
   
});











