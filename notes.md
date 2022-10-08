# Notes to be read with the voice of Werner Herzog

10 am- created PeerEval folder for White boarding independent project

10:10- opening up question Prompts
### Question 1 - turning strings into URLs 
  * DO NOT USE replace() or any regular expression.
  * according to mdn web docs regular expressions are used with these methods 
    * exec()
    * test()
    * match()
    * matchAll()
    * search()
    * replace()
    * replaceAll()
    * split()
  
  * plan is to create string array from the input, then use join to insert "20%" in the spaces

  The Plan:
  output = input.join('20%');

  * More question 1 notes to come later

11:02- realized that i the input is a string and i need to create a way to split the input string at the space and push that into an input array

12:02 lunch
1:47 came up with solution i like

Sat 2:30, cant figure out why my original solution only works when i use 
let inputArr = [""];

instead of:
let inputArr = [];

refactored solution

function urlMaker(inputString){
  let inputArr = [];
  // const output = inputArr.join('');

  for(var i = 0; i < inputString.length; i++)
  if(inputString[i] === " ") {
    inputArr.push("20%");
  } else {
    inputArr.push(inputString[i]);
  } return inputArr.join('');
}

### Question 2 - Array Deduping
Input: [7, 9, "hi", 12, "hi", 7, 53]
Output: [7, 9, "hi", 12, 53]


  * removes duplicates in an array
  * first solution should not use filter(), second solution use filter()

saturday 3:16 researching Set

can set be used like a spread opperator?
from the mdn docs, probably. but set works with filter

solution i like:

function deduper(arr) {
  let dedupingArr = [...new Set(arr)];
  return dedupingArr;
}

websites used for reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


filter can copy, but a shallow copy
filter can search array

### Question 3 - Compressing Strings
    * takes a string o repeated characters and compresses them using a number to show how many times the cahracter has been compressed. ex aaa would be 3a








### Question 4- checking for uniqueness
  * determines whether all the elements in a string are unigue
  * no array
  * no array methods
  * should return a boolean

  first thought- use for loop to iterate through string
    if(i !== (i-1)){
      return true
    } else {
      return false
    }

2pm working on this solution but i have to go pick up the kids from school

have been researching indexOf()
this website helped me figure out how to find the index of a string 
* https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html 

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

solution i like so far:

function unique(str){
  for(i=0; i < str.length; i++){
    if(str.replace(/\s+/g, '').indexOf(str[i]) !== str.replace(/\s+/g, '').lastIndexOf(str[i])){
      return false
    } else {
      return true
    }
  }
  }

needs to be DRY'd up 

### Question 5 - array sorting
  * sort array without using sort()

Sat 4p researching sorts