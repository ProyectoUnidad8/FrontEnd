export interface IPetAdopt {
	id: Number;
	name: String;
	breed: String;
	isAdopted: Boolean;
	category?: String; 
	description: String;
	gender: String;
	urlImage: string;
}