'use strict';

const detailsPokemon = () => {
    const modalN    = $('<div id="modal1" class="modal">')
    const modal   = $('<div class="modal-content">');
    const header    = $('<h4>'+state.selectedPokemon.color.name+'</h4>');
    modal.append(header);
    modalN.append(modal);
    
    return modalN;


}
