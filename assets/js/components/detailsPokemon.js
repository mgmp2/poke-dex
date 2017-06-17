'use strict';

const createModal = () => {
    const modalN    = $('<div id="modal1" class="modal">')
    const modal   = $('<div class="modal-content">');
    // const header    = $('<h4>'+state.selectedPokemon.color.name+'</h4>');
    // modal.append(header);
    modalN.append(modal);
    console.log(state.selectedPokemon);
    return modalN;


}


const detailsPokemon = (pokemonImg, name) => {
    $('.modal-content').empty();
    const boxModal      = $('<div class="container"></div>');
    const rowTitle      = $('<div class="row"></div>');
    const colTitle      = $('<div class="col m12"></div>');
    const title         = $('<h2 class="center-align">'+name+'</h2>');
    const rowDescrip    = $('<div class="row"></div>');
    const colImg        = $('<div class="col s12 m4"></div>');
    const colDescrip    = $('<div class="col s12 m8"></div>');
    const parrDescrip   = $('<h5>'+state.selectedPokemon.flavor_text_entries[3].flavor_text+'</h5>');
    const boxVarietates = $('<div class ="boxVarietates"></div>');
    const colBase        = $('<div class="col s12 m4"></div>');
    const colType    = $('<div class="col s12 m8"></div>');
    const categoria     = $('<span>Categoría: '+state.selectedPokemon.genera[2].genus+'</span>');

    colTitle.append(title);
    rowTitle.append(colTitle);

    colImg.append(pokemonImg);
    rowDescrip.append(colImg);
    colBase.append(categoria);
    colType.append(categoria);
    boxVarietates.append(colBase);
    boxVarietates.append(colType);
    colDescrip.append(parrDescrip);
    colDescrip.append(boxVarietates);
    rowDescrip.append(colDescrip);

    boxModal.append(rowTitle);
    boxModal.append(rowDescrip);
    return boxModal;
}
