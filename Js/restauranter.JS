//Restaurant class
class Restaurant {
	constructor(navn, adresse) {
		this.navn = navn;
		this.adresse = adresse;
	}
};

//UI class
class UI {
	static displayRestaurants() {
		const StoreRestaurants = [
			{
				navn: 'Gyldne Pizza avd. Grünerløkka',
				adresse: 'Olaf Ryes plass 8, 0552 Oslo'
			},
			{
				navn: 'Gyldne Pizza avd. Karl Johan',
				adresse: 'Karl Johans Gate 37, 0162 Oslo'
			},
			{
				navn: 'Gyldne Pizza avd. Storgata',
				adresse: 'Storgata 15, 0155 Oslo'
			},
			{
				navn: 'Gyldne Pizza avd. Pilestredet',
				adresse: 'Pilestredet 55, 0350 Oslo'
			}
		];
		
		const restaurants = StoreRestaurants;
		
		restaurants.forEach((restaurant) => UI.addRestaurantToList(restaurant));
	}
	
	static addRestaurantToList(restaurant) {
		const list = document.querySelector('#restaurant-list');
		
		const row = document.createElement('tr');
		
		row.innerHTML = `
		  <td>${restaurant.navn}</td>
		  <td>${restaurant.adresse}</td>
		  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
   		 `;
		
		list.appendChild(row);
	}

	static deleteRestaurant(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}

	static clearFields(){
		document.querySelector('#navn').value = '';
		document.querySelector('#adresse').value = '';
	}
}



//EVENTER

//Event for å vise restauranter
document.addEventListener('DOMContentLoaded', UI.displayRestaurants);

//Event for å legge til restauranter
document.querySelector('#restaurant-form').addEventListener('submit', (e) => {

	e.preventDefault();

	const navn = document.querySelector('#navn').value;
	const adresse = document.querySelector('#adresse').value;

	if(navn === '' || adresse === ''){
		alert("Vennligst fyll inn alle feltene");
	}else{
		const restaurant = new Restaurant(navn, adresse);

		UI.addRestaurantToList(restaurant);
	
		UI.clearFields();
	}

});

//Event for å fjerne restauranter fra liste
document.querySelector('#restaurant-list').addEventListener('click', (e) => {
	UI.deleteRestaurant(e.target)
});
