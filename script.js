function fetchPokemon() {
    const pokemonId = document.getElementById('pokemonId').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').value = data.name;
            document.getElementById('height').value = data.height;
            document.getElementById('weight').value = data.weight;
            document.getElementById('type').value = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        })
        .catch(error => console.error('Error:', error));
}