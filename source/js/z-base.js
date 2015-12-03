// main function
// executed on document ready
var main = function () {
  // set my current age
  $('.my-age').text(getAge(25, 9, 1985));
};

$(document).ready(main);
