$("#homeMenu").on("click", function () {
  // alert("home");

  $("#container-page-home").removeClass("d-none"); //muncul
  $("#container-page-search").addClass("d-none"); //hidden
});

$("#movieMenu").on("click", function () {
  $("#container-page-search").removeClass("d-none"); //muncul
  $("#container-page-home").addClass("d-none"); //hidden
});

const apiKey = "faf7e5bb";

// const result = {
//   Search: 'ini ixi',
// }
$("#button-search").on("click", function () {
  // alert("lagi search");
  alert($("#input-search").val());
  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "GET",
    dataType: "JSON",
    data: {
      apiKey: apiKey,
      s: $("#input-search").val(),
    },
    success: function (result) {
      if (result.Response === "True") {
        const movies = result.Search;
        console.log(movies);
      }
    },
  });
});
