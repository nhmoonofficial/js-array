// js-array-tasks

// js-array-tasks
//** */ 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array


// var fruits = [ 'Mango', 'Jam', 'Jackfruits', 'Banana', 'Apple', 'Orange' ]
// console.log(fruits);

// console.log(fruits.indexOf('Jackfruits'));


// fruits[1] = 'jambura';
// console.log(fruits);


//** */ 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


// const tourist = ['Cox', 'Bandarban', 'SaintMartin']

// tourist.push('Sylhet')
// console.log(tourist);
// tourist.push('Mawua','Rajshahi')
// tourist.pop();
// console.log(tourist);




//** */ 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


// const Books = [
//   'Marhaba Javascript a Maro Thaba',
//   'The Hundred',
//   'Cholo Bangla Shikhi'
// ]

// if (Books.includes('JavaScript')){
//   console.log('Yes, These are the JavaScript Books');
// } else{
//   console.log('No, These are Not JavaScript Books');
// }



//** 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.


// const nums = [1,2,3,4,5];
// const nums2 = ['1', '2', '3'];
// const nums3 = "dhaka, rajshahi, khulna,";
// const nums4 = ['jerry', 'merry'];

// console.log(Array.isArray(nums))
// console.log(Array.isArray(nums2))
// console.log(Array.isArray(nums3))
// console.log(Array.isArray(nums4))


// ** 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const nums = [1,2,3,];
const nums2 = ['one','two','three','four','five'];
const moon = nums.concat (nums2);
console.log(moon);
