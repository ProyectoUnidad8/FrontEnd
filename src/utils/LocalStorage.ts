// Generar token
export function addToken(token: any) {
	localStorage.setItem("token", token);
}


// Enviar Token
export const lastToken = localStorage.getItem("token");
export const userId = localStorage.getItem("user_id");



// Eliminar Tokens
export function removeTokens() {
	localStorage.removeItem("token");
}


// Eliminar Local Storage
export function removeLocalStorage() {
	localStorage.clear();
}