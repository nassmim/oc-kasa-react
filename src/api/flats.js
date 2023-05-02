// --------------- API associée aux appartements ---------------

const API_URL = "/data/flats.json"

/* Récupère l'ensemble des logements
    Paramètres
        - Aucun
    Retourne
        - les logements ou une erreur du serveur
*/
async function getFlats() {
  // Requête l'API
  const flats = await fetchFlatsFromApi()
  return flats
}

/* Récupère un logement 
    Paramètres
        - id: (number) correspondant à l'id du logement
    Retourne
        - le logement ou une erreur du serveur
*/
async function getFlat(id) {
  // Requête l'API
  const flats = await fetchFlatsFromApi(API_URL)
  const flat = flats.find((flat) => flat.id === id)
  return flat
}

/* Fetch l'url pour récupérer l'ensemble des logements
    Paramètres
        - Aucun
    Retourne
        - la réponse retournée par le serveur
*/
async function fetchFlatsFromApi() {
  const response = await fetch(API_URL)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`Mauvaise réponse du serveur - ${response}`)
  }
}

export { getFlats, getFlat }
