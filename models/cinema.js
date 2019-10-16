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

  // const filmTitles = getTitle(films);
  // console.log(filmTitles);

module.exports = Cinema;
