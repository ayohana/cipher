var input = prompt("Please, enter some sentence");

console.log (input)

var modify = function(input){

  var first = input.charAt(0);
  var last = input.charAt(input.length-1);
  var cap = (first + last).toUpperCase();
  return cap;

}

var reverse = function(a){

  return (a.charAt(a.length-1) + a.charAt(0)).toUpperCase();

}

var call = function(input) {
  alert(modify(input));
  alert(reverse(input));
  alert(input + " " + modify(input));
  
};

call(input);




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