
/**
 * PLAN:
 * Iterate through the list of nums
 *      iterate through list again but up to list -i-1
 *      check if the current number is greater than next number
 *      swap nums
 * return arr
 */

let arr = [1, -1, 0]

function bubleSort(arr){

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }

        return arr;
    }

}

console.log(bubleSort(arr))







// const arr = [34,7,23,32,5,62]

// function bubleSort(arr){

//     let newArr = []; 

//     for(let i=0; i< arr.length-1; i++){
       
//         let temp = arr[i+1];

//         if(arr[i] > temp){
//             arr[i]= temp;
//             temp = arr[i+1]
           
//         }

//         newArr.push(temp)


//     }
//     return newArr;
// }

// console.log(bubleSort(arr))