function LastCharToUpperCase() {
  var input = "today is friday";
  input = input.toLowerCase().split("").join("").split(" ");

  for(var i = 1 ; i < input.length ; i++){
  var words = input[i].length - 1;
  input[i] = input[i].substring(0, words) + input[i].substr(words).toUpperCase();
  }
  return input.reverse().join(" ");
}

console.log(LastCharToUpperCase());