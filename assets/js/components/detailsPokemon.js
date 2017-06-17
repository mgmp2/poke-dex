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
    const colImg        = $('<div class="col m4"></div>');
    const colDescrip    = $('<div class="col m8"></div>');
    colTitle.append(title);
    rowTitle.append(colTitle);

    colImg.append(pokemonImg);
    rowDescrip.append(colImg);
    rowDescrip.append(colDescrip);

    boxModal.append(rowTitle);
    boxModal.append(rowDescrip);
    return boxModal;
}
