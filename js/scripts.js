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
  var result = input + " " + modify(input);
  return result; 
};

var fourth = function(b) {
  var length = b.length;
  var half = length / 2;
  var round = Math.round(half);
  var letter = b.charAt(round - 1);
  var result = letter + " " + b;
  return result;
}

var response = fourth(call(input));
alert (response)

function reverseString(str){
  var newString = "";
  for (var i = str.length-1; i>=0; i--){
  newString+=str[i];
  }
  return newString  
}

alert (reverseString(response));

$(document).ready(function() {
  $("h1").click(function() {
    alert(input);
  });
  $("h2").click(function() {
    alert(reverseString(response));
  });
});


// var sentence = "The Finnish markka was the currency of Finland from 1860 to 2002. The currency was divided into 100 pennies and was first introduced by the Bank of Finland to replace the Russian ruble at a rate of four markkaa to one ruble. The markka was replaced by the euro on 1 January 2002 and ceased to be legal tender on 28 February later that year."

// var pos = sentence.indexOf("the")

// alert(pos);

// var pos2 = sentence.lastIndexOf("the")

// alert(pos2)

// var pos3 = sentence.search(/Finland+/gi);

// var pos4 = 

// sentence = sentence.replace(new RegExp("Finland", 'gi'), "Sweden");

// alert(sentence)

 
//  var sentenceArray = sentence.Split(' ');
//  var reg = (new RegExp("Finland", "gi"), "Sweden");
//  for(var i = 0; i < sentenceArray.length; i++) {
//  	if (sentenceArray[i].includes("Finland")) {
//   	sentenceArray[i].replace(reg);
//   }
//  }
 
//  alert(sentenceArray)