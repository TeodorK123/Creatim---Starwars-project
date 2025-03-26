export async function fetchCharacters() {
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    return data.results; // Returns an array of characters
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}