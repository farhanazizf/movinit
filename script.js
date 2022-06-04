$("#homeMenu").on("click", function () {
  $("#container-page-home").removeClass("d-none"); //muncul
  $("#container-page-search").addClass("d-none"); //hidden
});

$("#movieMenu").on("click", function () {
  $("#container-page-search").removeClass("d-none"); //muncul
  $("#container-page-home").addClass("d-none"); //hidden
});

const apiKey = "faf7e5bb";

const result = {
  Search: "ini ixi",
  apiKey: "ini ixi",
  nama: "ini ixi",
  nama: "ini ixi",
};

$("#button-search").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "GET",
    dataType: "JSON",
    data: {
      apiKey: apiKey,
      s: $("#input-search").val(),
    },
    beforeSend: function () {
      $("#container-card-movies").html(
        `<i class="fas fa-circle-notch fa-spin fa-5x"></i>`
      );
    },
    success: function (result) {
      if (result.Response === "True") {
        const movies = result.Search;
        console.log(movies);

        const listMovies = [];

        for (var i = 0; i < movies.length; i++) {
          listMovies.push(`
            <div class="card mb-2 mr-2" style="width: 18rem">
              <img src="${movies[i].Poster}" class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${movies[i].Title}</h5>
                <p class="card-text">
                ${movies[i].Year}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          `);
        }

        setTimeout(() => {
          $("#container-card-movies").html(listMovies);
        }, 1000);

        // const listFilm = movies.map()
      }
    },
  });
});
