

const searchItem = (pokemon, update)  => {
    const item      = $('<div class="item"></div>');
    const boxImg    = $('<div class=box-img></div>')
    const anc       = $('<img src="http://serebii.net/art/th/'+pokemon.entry_number+'.png" class="responsive-img"></a>');
    const div       = $('<div class="trapecio"></div>');
    const boxIcon   = $('<div class="box-icon"></div>');
    const pokebola  = $('<a class="waves-effect waves-light" href="#modal1"><img src="assets/icon/pokeball_gray.png" alt="pokeball"></a>');
    const heart     = $('<img src="assets/icon/valentines-heart.png" alt="valentines heart">');
    const data      = $('<img src="assets/icon/data.png" alt="data">');
    const namePok       = $('<p class="center-align">'+pokemon.pokemon_species.name+'</p>');
    boxImg.append(anc);
    item.append(boxImg);
    boxIcon.append(pokebola);
    boxIcon.append(heart);
    boxIcon.append(data);
    div.append(boxIcon);

    pokebola.on('click', (e) => {
        e.preventDefault();
        console.log("touch");
        $.get(pokemon.pokemon_species.url,(rs)=>{
            if(!rs) { return alert("NO EXISTE DETALLES DEL POKEMON");}
            state.selectedPokemon = rs;
            // update();

        });
        if(state.selectedPokemon) {
            item.append(detailsPokemon());
            if($('.modal').attr("class") == "modal"){
                alert();
                $('.modal').modal();
            }

        }
        // console.log(state.selectedPokemon);
        // update();


    })
    item.append(div);
    item.append(namePok);
    return item;
}

const reRender = (getValue, result, update) => {
    result.empty();
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

    const search    = $('<section id="search"></section>');
    const box       = $('<div class="row"</div>');
    const div       = $('<div class="input-field col s9 m8"</div>');
    const input     = $('<input type="search" id="search" placeholder="Ingresa tu pokemon a buscar">');
    const icon      = $('<label class="label-icon" for="search"><i class="material-icons">search</i></label>');
    const col4      = $('<div class = "col s3 m4"></div>')
    const az        = $('<div class = "az"> A-Z </div>')
    const result    = $('<section id="result" class="row"></section>');
    div.append(icon);
    div.append(input);
    col4.append(az);
    box.append(div);
    box.append(col4);
    search.append(box);
    search.append(result);

    reRender(state.pokemones.pokemon_entries, result, update);
    input.on('keyup', (e) => {
        if (input.val()) {
            const filterObt = filterByPokemon(state.pokemones.pokemon_entries, input.val());
            reRender( filterObt, result, update);
        }
    })
    return search;
}
