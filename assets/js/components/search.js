
const searchItem = (pokemon, update)  => {
    const item = $('<div class="item"></div>');
    const nam = $('<h3>'+pokemon.pokemon_species.name+'</h3>');
    const img       = $('<img src="http://serebii.net/art/th/'+pokemon.entry_number+'.png">');
    const div = $('<div class="trapecio"></div>');

    item.append(nam);
    item.append(img);
    item.append(div);

    img.on('click', (e) => {
        e.preventDefault();
        state.selectedPokemon = pokemon.pokemon_species.url;
        alert("Hola Mundo");
        update();

    })
    return item;
}

const reRender = (getValue, result, update) => {
    result.empty();
    console.log(getValue);
    if(getValue.length > 0) {
        getValue.forEach( findPokemon => {
            result.append(searchItem(findPokemon,update));
        })
    } else {
        const output = $('<p> No se encontró el pokemon a buscar...<p>');
        result.append(output);
    }
};


const Search = (update) => {

    const search = $('<section id="search"></section>');
    const box = $('<div class="box-input"</div>');
    const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
    const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
    const result = $('<section id="result"></section>');
    box.append(input);
    box.append(icon);
    search.append(box);
    search.append(result);
    input.on('keyup', (e) => {
        if (input.val()) {
            const filterObt = filterByPokemon(state.pokemones.pokemon_entries, input.val());
            reRender( filterObt, result, update);
        }
    })
    return search;
}
