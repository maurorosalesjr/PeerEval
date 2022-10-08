// Question 1
function urlMaker(inputString){
  let inputArr = [];

  for(var i = 0; i < inputString.length; i++)
  if(inputString[i] === " ") {
    inputArr.push("20%");
  } else {
    inputArr.push(inputString[i]);
  } return inputArr.join('');
}


//Question 2
//arr = [7, 9, "hi", 12, "hi", 7, 53];
function deduper(arr) {
  let dedupingArr = [...new Set(arr)];
  return dedupingArr;
}

// with filter()
function filterDeduper(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
}

//Question 3

function strComp(str) {
  let output = '';
  let count = 0;
  
  for(i = 0; i < str.length; i++) {
    count++;
    if(str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;// resets count to 0 
    }
  }
  return output;
}

//Question 4
function unique(str){
  for(i=0; i < str.length; i++){
    if(str.replace(/\s+/g, '').indexOf(str[i]) !== str.replace(/\s+/g, '').lastIndexOf(str[i])){ //removes spaces and looks for duplicates. visual representation index of goes i=> <=i last index of goes backwards
      return false
    } else {
      return true
    }
  }
  }
//Question 5
//Input: [9, 2, 7, 12]
function insSort(unsortedArray){
for ( i = 1; i < unsortedArray.length; i++) {
  let j = i - 1;
  let temp = unsortedArray[i];
  while(j >= 0 && unsortedArray[j] > temp){
    unsortedArray[j + 1] = unsortedArray[j];
    j--;
  }
  unsortedArray[j+1] = temp;
}
return unsortedArray
}