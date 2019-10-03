$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var pet = $("select#pet").val();

    if (age > 50 && gender === "male" && pet === "dog") {
      var result = "Holly Hunter"

      $("#match").empty().append(result);
      $("#result").show();
    } else if (age ) {

    }

    event.preventDefault();
  });
});
