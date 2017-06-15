'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $('<h1 class="center-align red-text"> Pokédex</h1>');
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);

  return header;
}
