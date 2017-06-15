'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');
  wrapper.append(Header(_ => render(root)));

  if(state.selectedPokemon == null ) {
      wrapper.append(Search( _ => {
          render(root);
      }));
  }
  root.append(wrapper);
}
const state = {
  pokemones: null,
  selectedPokemon: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemones = json;
    const root = $('.root');
    render(root);
  });


});
