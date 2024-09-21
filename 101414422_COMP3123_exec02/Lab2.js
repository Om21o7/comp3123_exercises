// Student Name : Om Makwana
// Student Id : 101414422


//Exercise 1:
//• Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of

const greeter = (myArray, counter) => {
    const greet = 'Hello ';
    for (const name of myArray) {
      console.log(`${greet}${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  


// Exercise 2:
// Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

const capitalize = ([first, ...last]) => `${first.toUpperCase()}${last.join('')}`;

console.log(capitalize('fooBar'));  // Output: Foobar
console.log(capitalize('nodejs'));  // Output: Nodejs

// Exercise 3:
// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..


const colors = ['red', 'green', 'blue'];

const capitalized_Colors = colors.map(color => capitalize(color));

console.log(capitalized_Colors);
// Output: ['Red', 'Green', 'Blue']


// Exercise 4:
// Using array.proto.filter create a function that will filter out all the values of the array that are less

const values =  [1, 60, 34, 30, 20, 5];
const filterlessthan20 = values.filter(values => values <20);
console.log(filterlessthan20);


// Exercise 5:
// Using array.proto.reduce create calculate the sum and product of a given array.

const array = [1,2,3,4];
const calculate_Sum = array.reduce((acc, current) => acc + current, 0); 
const calculate_Product = array.reduce((acc, current) => acc * current, 1);  
console.log(calculate_Sum);
console.log(calculate_Product);


// Exercise 6:

// Base Car class
class Car 
{
    constructor(model, year) 
    {
      this.model = model;
      this.year = year;
    }
    details() 
    {
      return `Model: ${this.model} Engine ${this.year}`;
    }
}

  class Sedan extends Car 
  {
    constructor(model, year, balance) {
      super(model, year); 
      this.balance = balance;
    }
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }

  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());  
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());   
