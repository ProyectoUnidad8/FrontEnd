const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplbHNpbkBnbWFpbCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjc1NTc4ODI4LCJleHAiOjE2NzU1ODI0Mjh9.6saXahy2Mk6n7U32aTwBeXOmtxEMN7Ljp0jCTrcBfKg"
const url = "http://localhost:9003/api/v1/pet-adoption"

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": 'Bearer ' + token
};

const allPetsToAdopt = async (state:any) => {
	const response = await fetch(url, { headers: headers })
	const data = await response.json()
	state(data.data)
}

export default allPetsToAdopt;