'use strict';

const filterByPokemon = (pokemon,query) => {
    if (pokemon) {

        return pokemon.filter( x => {
              if(x.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
                  return x;
              }
      });
  }
}
    const filterGender =(name, female, male, genderless) => {
        let genderFind;
        female.filter(x => {
            if (name == x.pokemon_species.name) { return genderFind = $('<span>Sexo: </span><i class="fa fa-venus"></i>'); }
        });
        male.filter(x => {
            if (name == x.pokemon_species.name) { return genderFind = $('<span>Sexo: </span><i class="fa fa-mars"></i>');}
        });
        genderless.filter(x => {
            if (name == x.pokemon_species.name) {return genderFind = $('<span>Sexo: </span><i class="fa fa-genderless"></i>');}
        });

         return genderFind;
    }
    const findType = () => {
        let tipo ;
         return state.detailsPokemon.types.forEach( x => {
            if (x.type.name!=undefined) {
                return tipo +=x.type.name;
            }
        });
            return $('<span>'+tipo+'</span>');
    }
