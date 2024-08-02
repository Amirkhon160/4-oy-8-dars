// for (let index = 0; index <= 100; index++) {
//     console.log(index);
// }

// for (let index2 = 100; index2 >= 0; index2--) {
//     console.log(index2);
// }



// const numbers = [2, 4, 9, 10, 45, 67, 8, 90];
// console.log(numbers) ("Boshlanishdagi Array") ;
// for (let index = 0; index < numbers.length; index++) {

//     if (numbers[index] % 2 == 0) {

//         console.log(numbers[index]) `Juft sonlarga ajratilgan array`;

//     }
// }





// Define the initial array
let initialArray = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(initialArray, 'boshlanishdagi array');

// Filter the array to only include even numbers
let evenNumbersArray = initialArray.filter(num => num % 2 === 0);
console.log(evenNumbersArray, 'juft sonlarga ajratilgan array');