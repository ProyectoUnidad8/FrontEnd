// Generar token
let setTokenStorage: any[] = [];
const storedTokens = localStorage.getItem("tokens");

if (storedTokens) {
	setTokenStorage = JSON.parse(storedTokens);
}

export function addToken(token: any) {
	setTokenStorage.push(token);
	localStorage.setItem("tokens", JSON.stringify(setTokenStorage));
}


// Enviar Token
let getTokenStorage: any[] = [];
const getToken = localStorage.getItem("tokens");

if (getToken) {
	getTokenStorage = JSON.parse(getToken)
}

export const lastToken = getTokenStorage[getTokenStorage.length - 1];



// Eliminar Tokens
export function removeTokens() {
	localStorage.removeItem("tokens");
}


// Eliminar Local Storage
export function removeLocalStorage() {
	localStorage.clear();
}