'use strict';

const detailsPokemon = (update) => {

    const modal     = $('<div id="modal1" class="modal">');
    const content   = $('<div class="modal-content">');
    const header    = $('<h4>Modal Header</h4>');
    content.append(header);
    modal.append(content);
    detailsPokemon();
    return modal;
}
