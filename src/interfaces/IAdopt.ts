export interface IPetAdopt {
	id: Number;
	name: String;
	breed: String;
	isAdopted: Boolean;
	category?: String; 
	description: String;
	gender: String;
	urlImage: String;
}

export interface IAdminPetAdopt {
	id: Number;
	name: String;
	breed: String;
	age?: Number;
	isAdopted: Boolean;
	category?: String; 
	description: String;
	gender: String;
	urlImage: String;
}