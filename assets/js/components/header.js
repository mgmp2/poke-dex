'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<h1> Pokédex</h1>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);

  return header;
}
