fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        updateCards(characters);
    })
 
function updateCards(characters) {
    const cards = document.querySelectorAll('.card');
 
    characters.forEach((character, index) => {
        const card = cards[index];
        card.querySelector('.project-title').textContent = character.name;
        card.querySelector('.type').textContent = `Espécie: ${character.species}`;
        card.querySelector('.dash').textContent = `Status: ${character.status}`;
        const cardsContainer = document.getElementById('cards-container');
        const img = document.createElement('img');
          img.src = character.image;
        cardsContainer.innerHTML = img.src;
    });
}