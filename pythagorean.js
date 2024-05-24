/**
 * explore:
 * 
 * objective: given 2 sides of triangle find 3rd side(c).
 * 
 * input: 2 nums, ouput: num
 * 
 * key:
 * 
 * formula: = a**+b** = c**
 * 
 * brainstorm:
 * 
 * space = 0(1), time = o(1)
 * 
 * Plan:
 * given 2 angles, get exponet of each angle
 * add the 2 angles
 * and then square root the sum
 * 
 */


// function pythagorean(a, b){

//     let aSquared = a * a;
//     let bSquared = b * b;

//     console.log(aSquared, bSquared);
    
//     let sum = aSquared + bSquared;

//     console.log(sum);

//     console.log(Math.sqrt(sum))
//     //let cSquared = a * a + b * b;

//     // let c = a**2 + b **2;
//     //5**2 + 5 **2;
//     //25 + 25
//     //50
    
//     // console.log(c)

//     // return Math.floor(Math.sqrt(c))

// }

// console.log(pythagorean(3,4))

/**
 * 
 * add all nums divided by amount of nums = average
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [1, 2, 3, 4]
 * 
 * array.length = the amount of items in array(number)
 * 
 * start = 0
 * end = array.length
 * 
 * 
 * brainstorm:
 * how can we keep tracj of the ongoing sum?
        need a variable to store onGoing sum. Set to 0
 * 
 */


function findAverage(nums) {

    let sum = 0;

    for(let index = 0; index < nums.length; index ++){

        sum += nums[index];
        //console.log(nums[index], sum)


    }
    return sum/nums.length;
}


console.log(findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

