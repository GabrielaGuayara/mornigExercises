// // let num = 5;
// // while(num>0){
//     function calculateFactorial(num){
//         let sum = 1;
//         for(let i=1; i<num;i++){
//             sum += sum*i;
//         }
        
//         return(sum)
       
//     }

//     console.log(calculateFactorial(5))


//     //ARROW FUNCTIONS

//     //Difference between Arrow and regulat function syntax
//     /**
//      * Syntax
//      * Arrow function Implicity returns a value
//      * which means we don;t have to use the return keyword
//      */

//     {
//        function sayHello(){
//         console.log("Hello CLass")
//        }

//        const sayhello =() => console.log("Hello Class")
//     }


//     console.log(sayHello())


//     //CONVERT A REGULAR FUNCTION INTO A ARROW FUNCTION

//     function isItRaining(value){
//         if(value){
//             return `Value is ${value}`;
//         } else {
//             return `Its not raining`;
//         }
//     }

//     const isitRaining = (value) => 
//     value ? `Value is {value}` : `Its nor raining`;


//     // isItRaining("sunny")
//     // isitRaining("Warm")

// const addAndMultiplyBy5 = (num1, num2)=>(num1+num2)*5;

// console.log(`The result is ${addAndMultiplyBy5(10,5)}`)

// const fullName = getFullName = (x, y) => `${x} ${y}`;

// console.log(fullName("Juan", "Ramirez"))


// console.log(typeof[], typeof{});

// let arr=[1,2,3]
// let obj = {one:"charmander", two: "Squirtel", three: "Snorlax"};

// for(let i=0; i< arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr);


// let value = Object.values(obj)[0];
// //it's storaged the value "chamander"

// for( key in obj){
//     console.log("Keys: ", key, "Values", obj[key])
// }

// console.log(value)


// const students = ["ashley", "abba", "ron", "fallon", "random"]

// function attendance(students){
//     for(let i=0; i<students.length; i++){
//         if(students[i] === "ashely" ||
//             students[i] ==="abba"|| students[i]==="ron"|| students[i]==="fallon"){
//             console.log(`Welcome to class ${students[i]}`)
//         }else{
//             console.log("You do not belong here");
//         }
//     }

//     return "class in session"
// }

// console.log(attendance(students))

// let i=0;

// while(/*condition*/ i < students.length ){
//     if(students[i] === "ashely" ||
//             students[i] ==="abba"|| students[i]==="ron"|| students[i]==="fallon"){
//             console.log(`Welcome to class ${students[i]}`)
//         }else{
//             console.log("You do not belong here");
//         }

//         i++;
// }


//OBJECTS PRACTICE




// const gabby = {firstName:"Gabriela", lastName:"Guayara"};

// function getValue(obj, _k){
//     return obj.k;
// }

// console.log(gabby.firstName)

// getValue(gabby, "firstName")
// // console.log(getValue(gabby, "lastName"));

// setValue(gabby, colorHair, Black);
// getKeys(gabby)


//PALINDROMO FUNCTION

// function reverseString(string){
//     let revstring = "";
//     let len = string.length-1;

//     for(let i=len;i>=0; i--){
//       revstring+=string[i];

//     }
//     console.log(revstring)

// }

// reverseString("nevets")
// reverseString("racecar")


function fizzbuzz(number){
    for(let i=3; i <= number; i++){
        if(i%3 === 0 && i%5 ===0){
            console.log("Fizz Buzz", i)
        }else if(i%5 === 0){
            console.log("buzz", i)
        }else if(i%3 ===0){
            console.log("fizz", i);
        }else{
            console.log(i);
        }
    }
}

fizzbuzz(100)