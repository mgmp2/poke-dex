'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');
  wrapper.append(Header(_ => render(root)));

  wrapper.append(Search( _ => { render(root); }));

  wrapper.append(createModal());
  root.append(wrapper);
}
const state = {
  pokemones: null,
  selectedPokemon: null,
  detailsPokemon: null,
  genders: {female:null,male:null, genderless: null},

};

$( _ => {


  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemones = json;
    const root = $('.root');
    render(root);
  });
  getJSON('http://pokeapi.co/api/v2/gender/1/', (err, json) => {
      if (err) { return alert(err.message);}
      state.genders.female = json.pokemon_species_details;
  });
  getJSON('http://pokeapi.co/api/v2/gender/2/', (err, json) => {
      if (err) { return alert(err.message);}
      state.genders.male = json.pokemon_species_details;
  });
  getJSON('http://pokeapi.co/api/v2/gender/3/', (err, json) => {
      if (err) { return alert(err.message);}
      state.genders.genderless = json.pokemon_species_details;
  });


});
