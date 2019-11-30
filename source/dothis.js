/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon btomich@csu.fullerton.edu
   File Description: This javascript file contains all functions
*/

//Bubble Sort Varibales
var BSortHolder = [];
var BCounter = 0;

//Merge Sort Variables
var MSortHolder = [];
var MCounter = 0;

//Quick Sort Variables
var QSortHolder = [];

					
/*
Bubble sort the array of chacters. After each swap a function will be called to 
reformat the array value into a string. They will then re
*/
function bubbleSort(values) {
	//Format and store starting 
	Bformat(values);
	var length = values.length;
		for (var i = 0; i < length; i++) { 
			for (var j = 0; j < (length - i - 1); j++) { 
				//Compare current and next position
				if (values[j] > values[j + 1]) {
					var tmp = values[j]; 
					values[j] = values[j + 1];
					values[j + 1] = tmp;
					Bformat(values);
				}
			}
		}
}	

//Formats array value into string
//String is then stored in BSortHolder Array
function Bformat(values){
	var converter = values.toString();
	converter = "[" +converter +"]"
	BSortHolder[BCounter]=converter;
	BCounter++;
}


		
		
		

// mergesort -- in progress
// Merge Sort Implentation (Recursion)
function mergeSort (values) {
  // No need to sort the array if the array only has one element or empty
  if (values.length <= 1) {
    return values;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(values.length / 2);

  // This is where we will be dividing the array into left and right
  const left = values.slice(0, middle);
  const right = values.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//Formats array value into string
//String is then stored in BSortHolder Array
function Mformat(resultArray){
	var converter = resultArray.toString();
	converter = "[" +converter +"]"
	MSortHolder[MCounter]=converter;
	MCounter++;
}
