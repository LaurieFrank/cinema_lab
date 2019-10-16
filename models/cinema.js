const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  })
  // console.log("in cinema", result);
  return result;
};

Cinema.prototype.findFilmByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title
  })
  console.log('film by title', result);
  return result;
};

// Cinema.prototype.filmByTitle = function (title) {
//   return this.films.find((film) => {
//     return film.title === title;
//   });
// };
//
module.exports = Cinema;
