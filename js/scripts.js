$(document).ready(function() {
  $("form#name").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var dateOfBirth = $("dateOfBirth").val();
    var neighborhood = $("neighborhood").val();
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    event.preventDefault();
  });
});
