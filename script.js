$("#homeMenu").on("click", function () {
  // alert("home");

  $("#container-page-home").removeClass("d-none"); //muncul
  $("#container-page-search").addClass("d-none"); //hidden
});

$("#movieMenu").on("click", function () {
  $("#container-page-search").removeClass("d-none"); //muncul
  $("#container-page-home").addClass("d-none"); //hidden
});

$("#button-search").on("click", function () {
  // alert("lagi search");
  alert($("#input-search").val());
});
