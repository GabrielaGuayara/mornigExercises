let dishes = [
                ["Ramen", "Sushi", "Pho"],
                ["RostaPasta", "Qxtail", "StewChicken"],
                ["Pizza", "Pasta", "CurryChicken"]
]

/**
 * Objetive: Grap dishes bu letters s and o, if not threw in others
 * Input: arr of arrays with strings [[str]]
 * Ouput: arr of objects [{}]
 * 
 * 
 * cases: 
 * input = [['dumpling'], ['oxtail], ], ['pho']
 * output = [
 * {
 * p: ['pho']
 * } 
 * ]
 * 
 * Plan: 
 * 
 * Initialize a variable to store all sorted dishes
 * 
 * Iterate thorugh dishes
 *  Initialize p object, subject and theObject
 *      iterate through dishes
 *          check is letter of dish start with p
 *              add it to p object
 *          check is letter starts with s
 *              add it to s object
 *          else
 *              throw in other object
 * 
 *      add objects to results
 * 
 */


function orderDishes(dishes){

    if(!dishes.length) return [];

    const sortDishes = [];
    const dishesWithP = {
        startWithP: []
    }
    const dishesWithS = {
        startWithS: []
    }
    const otherDishes = {
        Others: []
    };

    for(let i =0; i< dishes.length; i++){ //Iterate y axis

        for (let j = 0; j < dishes[i].length; j++){ //Iterate x axis

            //get word, then get the lteer, check if it equeals letter we are looking for *
            const firstLetter = dishes[i][j][0]
            if(firstLetter === 'S'){
                dishesWithS.startWithS.push(dishes[i][j])
            }else if(firstLetter === 'P'){
                dishesWithP.startWithP.push(dishes[i][j])
            }else{
                otherDishes.Others.push(dishes[i][j])
            }
        }
    }

    sortDishes.push(dishesWithP, dishesWithS, otherDishes);
    return sortDishes;
}


const sorted = orderDishes(dishes);
console.log(sorted)


function sortDishes(dishes){
    const dishCategories = [];

    for( let row = 0; row < dishes.length; row++){
        for(let col = 0; col < dishes[row][col]; col++){
            const firstLetter = dishes[row][col][0]
            if(firstLetter in dishCategories){
                //If the first letter a KEY in my object
                    //If it is add value to key
                    dishCategories[firstLetter].push(dishes[row][col])
            }
            else{
                    dishCategories[firstLetter] = [dishes[row][col]]
            }
        }
    }

    return dishCategories;
}

console.log(sortDishes(dishes))
// function convertArray(dishes){

//     let newArr = [];
//     let arrP = [];
//     let arrS = [];
//     let arrOther = [];


// for(let i=0; i< dishes.length; i++){

//     for(let j = 0; j < dishes[i].length; j++){
//         //can also reference with dishes[i][j][0]
//         let firstLetter = dishes[i][j][0];

//         if(firstLetter === "P"){
//            arrP.push(dishes[i][j])
//         //    console.log(arrP)
//         }

//         else if(firstLetter === "S"){
//             arrS.push(dishes[i][j])
//             // console.log(arrS) 
//         }
//         else{
//             arrOther.push(dishes[i][j])
//         }


//   }
// }
// let obj1 ={}
// let obj2 ={}
// let obj3 ={}
// obj1.P = arrP
// obj2.S = arrS
// obj3.Others = arrOther

// newArr.push(obj1, obj2, obj3)
// // newArr.push(arrP, arrS, arrOther)
// return newArr;
// }

// console.log(convertArray(dishes))

// const newObject = {

// }


// for(let i = 0; i < dishes.length; i++) {
//     for(let j = 0; j < dishes[i].length; j++) {
//         if(dishes[i][j][0] in newObject) {
//             newObject[dishes[i][j][0]].push(dishes[i][j])
//         } else {
//             newObject[dishes[i][j][0]] = [dishes[i][j]]
//         }
//     }
// }

// console.log(newObject)



