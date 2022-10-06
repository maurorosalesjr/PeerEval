# Notes to be read with the voice of Werner Herzog

10 am- created PeerEval folder for White boarding independent project

10:10- opening up question Prompts
### Question 1 - turning strings into URLs 
  -DO NOT USE replace() or any regular expression.
  -according to mdn web docs regular expressions are used with these methods 
    -exec()
    -test()
    -match()
    -matchAll()
    -search()
    -replace()
    -replaceAll()
    -split()
  
  -plan is to create string array from the input, then use join to insert "20%" in the spaces

  The Plan:
  output = input.join('20%');

  -More question 1 notes to come later

11:02- realized that i the input is a string and i need to create a way to split the input string at the space and push that into an input array

12:02 lunch

### Question 2 - Array Deduping
  -removes duplicates in an array
  -first solution should not use filter(), second solution use filter()



### Question 3 - Compressing Strings
    -takes a string o repeated characters and compresses them using a number to show how many times the cahracter has been compressed. ex aaa would be 3a








### Question 4- checking for uniqueness
  -determines whether all the elements in a string are unigue
  -no array
  -no array methods
  -should return a boolean

  first thought- use for loop to iterate through string
    if(i !== (i-1)){
      return true
    } else {
      return false
    }


### Question 5 - array sorting
  -sort array without using sort()