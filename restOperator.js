// Rest Operator = I don't know how many vars you are sending, so
// I'll put whatever else you are sending in an array
function sum(...numberList){
  return numberList.reduce(
      function(total, num){
        return total + num;
      }
    )
}

const restWay = sum(1,2,3,4,5);
console.log(restWay);