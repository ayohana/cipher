var input = prompt("Please, enter some sentence");

console.log (input)

var modify = function(input){

  var first = input.charAt(0);
  var last = input.charAt(input.length-1);
  var cap = (first + last).toUpperCase();
  return

}


alert (modify(input))





// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });

//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });