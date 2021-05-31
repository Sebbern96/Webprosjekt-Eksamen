//Ansatt Class
class Meny {
    constructor(matrett, navn, pris, allergener, vegetar, restaurant) {
        this.matrett = matrett;
        this.navn = navn;
        this.pris = pris;
        this.allergener = allergener;
        this.vegetar = vegetar;
        this.restaurant = restaurant;
    }
}

//UI Class
class UI {
    static displayMeny() {
        const menyen = Store.getMeny();
        
        menyen.forEach((meny) => UI.addMenyToList(meny));
    }
        static addMenyToList(meny) {
            const list = document.querySelector('#meny-list');
            
            const row = document.createElement('tr');
            
            row.innerHTML = `
            <td>${meny.matrett}</td>
            <td>${meny.navn}</td>
            <td>${meny.pris}</td>
            <td>${meny.allergener}</td>
            <td>${meny.vegetar}</td>
            <td>${meny.restaurant}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`;
        list.appendChild(row);        
}
    
        static deleteMeny(el) {
            if(el.classList.contains('delete')) {
                el.parentElement.parentElement.remove();
            }
        } 
    
        static showAlert(message, className){
            const div = document.createElement('div');
            div.className =`alert-${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const form = document.querySelector('#meny-form');
            container.insertBefore(div, form);
            
//Timer
setTimeout(() => document.querySelector('.alert').remove(),2000);
        }
    
        static clearFields() {
            document.querySelector('#matrett').value = '';
            document.querySelector('#navn').value = '';
            document.querySelector('#pris').value = '';
            document.querySelector('#allergener').value = '';
            document.querySelector('#vegetar').value = '';
            document.querySelector('#restaurant').value = '';
        }
}

//Event: Storage
class Store {
    static getMeny() {
       let menyen;
        if(localStorage.getItem('menyen') === null) {
            menyen = [];
        } else {
            menyen = JSON.parse(localStorage.getItem('menyen'));
        }
        
    return meny;
    }
    
    static addMeny(meny) {
        const menyen = Store.getMeny();
        menyen.push(meny);
        localStorage.setItem('menyen', JSON.stringify(menyen));
    }
    
    static removeMeny(restaurant) {
        const menyen = Store.getMeny();
        
        meny.forEach((meny, index) => {
            if(meny.restaurant === restaurant) {
            meny.splice(index, 1);
            }
        });
        
    localStorage.setItem('menyen', JSON.stringify(menyen)); 
    }
}

//Event: Vis Meny
document.addEventListener('DOMContentLoaded', UI.displayMeny);

//Event: Legg til Meny
document.querySelector('#meny-form').addEventListener('submit', (e) => {
    
//Prevent submit
e.preventDefault();
    
//Get Values
const matrett = document.querySelector('#matrett').value;
const navn = document.querySelector('#navn').value;
const pris = document.querySelector('#pris').value;
const allergener = document.querySelector('#allergener').value;
const vegetar = document.querySelector('#vegetar').value;
const restaurant = document.querySelector('#restaurant').value;
    
//Validate
if(matrett === '' || navn === '' || pris === '' || allergener === '' || vegetar === ''|| restaurant === '') {
    UI.showAlert('Fyll inn alle felt!', 'info');
} else {
    
//Instatiate meny
const meny = new Meny(matrett, navn, pris, allergener, vegetar, restaurant);

//Add Meny to UI
UI.addMenyToList(meny);
    
//Add Meny to Store
Store.addMeny(meny);
    
//Clear 
UI.clearFields();   
   
}     
});

//Event: Fjern Meny
document.querySelector('#meny-list').addEventListener('click', (e) => {
    
//Fjern Meny UI
UI.deleteMeny(e.target);
    
//Fjern Meny Storage
Store.removeMeny(e.target.parentElement.previousElementSibling.textContent);
   
});











