const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function printEvenNum(array){

    for(let i=0; i<= array.length; i++){
        const num = array[i]
        if(array[i]%2===0){
            console.log(`${num};`);
        }
    }
}

printEvenNum(array)


const users = [
    {name:"Alice", age: 25},
    {name:"Bob", age: 30},
    {name:"Charlie", age: 35},
];

users[1];
function extractName(arr){
    userNames = [];

    for(let i = 0; i<arr.length; i++){
        
        userNames.push(arr[i].name)
    }

    return userNames;
}

console.log(extractName(users))