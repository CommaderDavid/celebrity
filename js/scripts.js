$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var pet = $("select#pet").val();

    if (age > 50 && gender === "male" && pet === "dog") {
      var result = "Holly Hunter"

      $("#match").empty().append(result);
      $("#result").show();
    } else if (age >= 40 && gender === "male" && pet === "dog") {
      var result = "kelly Rowan"

      $("#match").empty().append(result);
      $("#result").show();
    } else if (age < 30 && pet === "dragon") {
      var result = "Hermione Granger"

      $("#match").empty().append(result);
      $("#result").show();
    } else if (age >= 20 && gender === "female" && pet === "dragon") {
      var result = "Eragon Bromsson"

      $("#match").empty().append(result);
      $("#result").show();
    } else if (age >= 18 && gender === "female" && pet === "cat") {
      var result = "Shawn Mendes"

      $("#match").empty().append(result);
      $("#result").show();
    } else {
      var result = "Nobody. Sorry you are just not matchable with any Celebrity"

      $("#match").empty().append(result);
      $("#result").show();
    }

    event.preventDefault();
  });
});
