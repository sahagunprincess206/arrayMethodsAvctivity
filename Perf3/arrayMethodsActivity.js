// Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

// contact() to join two arrays
let join_arr = arr1.concat(arr2)
console.log(join_arr)

// Use push() to add an element 
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// push() to add an element in to fruits array.
fruits.push("Kiwi")
console.log(fruits);

// Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
let array1 = [1, 2, 3];

// unshift() to add number 4 and 5 to the beggining of the array.
array1.unshift(4, 5)
console.log(array1)

// Use pop() to remove the last element from the fruits array.
fruits.pop()
console.log(fruits)

// Use shift() to remove the first element from the array array2 = [1, 2, 3].
let array2 = [1, 2, 3];

// shift() to remove the first element from the array.
array2.shift()
console.log(array2);

// Use sort() to sort the fruits array alphabetically.
let sorted_array = [...fruits].sort()
console.log(sorted_array);

// Use slice() to create a new array 
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

// Use splice() to insert and remove elements in the months array.
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Insert "February" at index 1
console.log(months);

months.splice(4, 1, "May"); // Replace "June" with "May"
console.log(months);