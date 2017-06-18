'use strict';

const createModal = () => {
    const modalN    = $('<div id="modal1" class="modal">')
    const modal   = $('<div class="modal-content">');

    modalN.append(modal);
    return modalN;
}


const informationPokemon = (pokemonImg, name, numId) => {
    $('.modal-content').empty();
    const boxModal      = $('<div class="container"></div>');
    const rowTitle      = $('<div class="row"></div>');
    const colTitle      = $('<div class="col m12"></div>');
    const title         = $('<h2 class="center-align">'+name+'</h2>');
    const rowDescrip    = $('<div class="row"></div>');
    const colImg        = $('<div class="col s12 m5"></div>');
    const colDescrip    = $('<div class="col s12 m7"></div>');
    const parrDescrip   = $('<h6>'+state.selectedPokemon.flavor_text_entries[3].flavor_text+'</h6>');
    const boxDescripcion= $('<div class ="box-varietates"></div>');
    const boxType       = $('<div class="box-type-deb"></div>');
    const tipoP         = $('<p>Tipo: </p>');
    const debility         = $('<p>Debilidad: </p>');
    colTitle.append(title);
    rowTitle.append(colTitle);

    colImg.append(pokemonImg);
    rowDescrip.append(colImg);

    colDescrip.append(parrDescrip);
    colDescrip.append(boxDescripcion);
    rowDescrip.append(colDescrip);
    boxType.append(tipoP);

    boxModal.append(rowTitle);
    boxModal.append(rowDescrip);


    let detailBase = 'http://pokeapi.co/api/v2/pokemon/'+numId+"/";
    let tipoPok = "";
    $.get(detailBase,(rs)=>{
        if(!rs) { return alert("NO EXISTE DETALLES DEL POKEMON");}
        state.detailsPokemon = rs;
        if (state.detailsPokemon) {
            colDescrip.append(detailsPokemon(name, boxDescripcion, state.selectedPokemon.genera[2].genus))
            state.detailsPokemon.types.forEach( x => {
                    const tipoPok = $('<span class="bg-'+x.type.name+'">'+x.type.name+'</span>');
                    boxType.append(tipoPok);
          });
            boxType.append(debility);
            colDescrip.append(boxType);

        }
    });
    return boxModal;
}

const detailsPokemon = (name, box, categoria) => {
    let height      = state.detailsPokemon.height;
    let weight      = (state.detailsPokemon.weight)/10;
    const colLeft   = $('<div class="col s12 m4"></div>');
    const colRight  = $('<div class="col s12 m8"></div>');
    const category  = $('<span>Categoría: </span><span>'+categoria+'</span><br>');
    const altura    = $('<span>Altura: </span><span>'+height.toString().split("").join(",")+' m</span><br>');
    const peso      = $('<span>Peso: </span><span>'+weight.toString().replace(".",",")+' kg</span><br>');
    const habil     = $('<span>Habilidad: </span><span>'+state.detailsPokemon.abilities[0].ability.name+'</span><br>');


    colLeft.append(altura);
    colLeft.append(peso);
    colRight.append(category);
    colRight.append(habil);
    box.append(colLeft);
    box.append(colRight);

    //Define the gender
    let define;
    if(name) {
        define = filterGender (name,state.genders.female, state.genders.male, state.genders.genderless);
    }


    colLeft.append(define);
    return box;
}
