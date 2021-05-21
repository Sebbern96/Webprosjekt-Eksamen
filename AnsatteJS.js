//Ansatt Class: Viser ansatte
class Ansatt {
    constructor(Navn, Stilling, Restaurant, Kontaktinformasjon) {
        this.Navn = Navn;
        this.Stilling = Stilling;
        this.Restaurant = Restaurant;
        this.Kontaktinformasjon = Kontaktinformasjon;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayAnsatte() {
        const StoredAnsatte = [
            {Navn: 'Olav Hansen',
            Stilling: 'Direktør',
            Restaurant: 'Alle',
            Kontaktinformasjon: '931 76 843'}
        ];
        const Ansatte = Store.getAnsatte();
        
        Ansatte.forEach((Ansatt) => UI.addAnsattToList(Ansatt));
    }
    static addAnsattToList(Ansatt) {
        const list = document.querySelector('#Ansatte-Gyldne-Pizza');
        
        const row = document.createElement('tr');
        
        row.innerHTML =`
        <td>${Ansatt.Navn}</td>
        <td>${Ansatt.Stilling}</td>
        <td>${Ansatt.Restaurant}</td>
        <td>${Ansatt.Kontaktinformasjon}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        
        list.appendChild(row);  
    }

    static deleteAnsatt(el){
       if(el.classList.contains('delete')){
           el.parentElement.parentElement.remove();
       } 
    }
    
    static clearBar() {
        document.querySelector('#Navn').value = '';
        document.querySelector('#Stilling').value = '';
        document.querySelector('#Restaurant').value = '';
        document.querySelector('#Kontaktinformasjon').value = '';
    }
}

//Event: Vis Ansatt
document.addEventListener('DomContentLoaded', UI.displayAnsatte);

//Event: Legg til Ansatt
document.querySelector('#Ansatt-form').addEventListener('submit', (e)
=> {
    
//Prevent actual submit
e.preventDefault();
    
//Get form values
    const Navn = document.querySelector('#Navn').value;
    const Stilling = document.querySelector('#Stilling').value;
    const Restaurant = document.querySelector('#Restaurant').value;
    const Kontaktinformasjon = document.querySelector('#Kontaktinformasjon').value;
    
//Instatiate Ansatt
const Ansatt = new Ansatt(Navn, Stilling, Restaurant, Kontaktinformasjon);

//Legg til Ansatt UI
UI.addAnsattToList(Ansatt);
    
//Clear Bar
UI.clearBar();
    
});

//Remove Ansatt
document.querySelector('#Ansatte-Gyldne-Pizza').addEventListener('click', (e)
=> {

//Remove Ansatt from UI
UI.deleteAnsatt(e.target)
    
});









