function isPalindrome(word) {
  if (word === "") {
    return true;
  }

  let leftIndex = 0;
  let rightIndex = word.length - 1;

  while (leftIndex <= rightIndex) {
    if (word[leftIndex] !== word[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}


/* 
  Add your pseudocode here
//function isPalindrome(word):
  Handle edge case: an empty string is considered a palindrome
   if word is an empty string:
    return true

   initialize leftIndex to 0
   initialize rightIndex to length of word minus 1

  while leftIndex is less than or equal to rightIndex:
    if characters at leftIndex and rightIndex are not equal:
      return false
      increment leftIndex
      decrement rightIndex

    If the loop completes without returning false, the word is a palindrome
    return true

/*
  //Test Case 1: isPalindrome("racecar") => Expected Output: true
    Test Case 2: isPalindrome("level") => Expected Output: true
    Test Case 3: isPalindrome("hello") => Expected Output: false
    Test Case 4: isPalindrome("") => Expected Output: true (An empty string is considered a palindrome)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("level"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hello"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome(""));

console.log("");
}

module.exports = isPalindrome;
