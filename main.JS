//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let parseObject = (obj) => {
    let entries = Object.entries(obj)

    entries.forEach(([key, value]) => {
    if (typeof(value) == "object" && value.some(entry => entry.oberwise == 'Chocolate')){
        console.log(`Favorite ${key} are: `)
        Object.entries(value[0]).forEach(([key, value]) => {
            console.log(`Favorite ${key}: ${value}`)
        })
    } else{
        console.log(`Favorite ${key}: ${value}`)
    }
    
});
}

parseObject(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

    // Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`This is ${this.name} they are ${this.age} years old.`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {
        this.age++
    }
}

let person1 = new Person('McKenzie', 28)
person1.printInfo()


// Adding to the age 


person1.addAge()
person1.addAge()
person1.addAge()
person1.printInfo()


let person2 = new Person('Samantha', 21)
person2.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
largerThanTen = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

largerThanTen("McKenzieMalo")

.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small Number")
})


// Code Wars Questionn 1
//Remove exclamation marks
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
  }


// Code Wars Question 2 // 

//Leap Years

/*In this kata you should simply determine, 
whether a given year is a leap year or not. 
In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, 
so you don't have to validate them
Examples can be found in the test fixture.
*/

function isLeapYear(year) {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
  }
  