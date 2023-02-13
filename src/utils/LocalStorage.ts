// Generar token
export function addToken(token: any) {
	localStorage.setItem("token", token);
}


// Enviar Token
export const lastToken = localStorage.getItem("token");
// Enviar User
export const userId = localStorage.getItem("user_id");
// Enviar Rol
export const userRole = localStorage.getItem("role");



// Eliminar Tokens
export function removeTokens() {
	localStorage.removeItem("token");
	localStorage.removeItem("user_id");
	localStorage.removeItem("role");
}


// Eliminar Local Storage
export function removeLocalStorage() {
	localStorage.clear();
}