/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {

  if (numbers.length%2 != 0 ) //odd
  {
    return true;
  }
  else //even
  {
    return false;
  }
}

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {

  if (numbers.length %2 == 0 )  //even
  {
    return true;
  }
  else //odd
  {
    return false;
  }
}

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {

  instructors.push("Laila");
    return instructors;
}

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {

  const lastOne = teams.pop(); //teams.pop removes last element in arrays but it also assigns it in lastOne  
      return lastOne; //returns lastOne duh!!
             // return(teams.pop()); another way to do this

}


/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  
  const half = (fruits.length / 2); 

  if  (fruits.length%2===0)
  {
  return (fruits.splice(half)); //splice = change the content of your array by removing or replacing existing elements with new ones.
  //splice (half) starts printing from the 2nd half of the array
  }
  else return ([]);
}

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 * 
 */
function youGottaCalmDown(shout) {
  
  while(shout.endsWith("!!"))
  {
      shout=shout.slice(0,shout.length-1);
  }
  //var n = shout.endsWith("!");
return shout;
 

}

console.log(youGottaCalmDown("heloo!!!!!!!!!"));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
