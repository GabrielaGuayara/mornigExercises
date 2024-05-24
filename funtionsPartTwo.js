const getAvegOfThreeNums = (n1,n2,n3) => (n1+n2+n3)/3;

const avg = getAvegOfThreeNums(2,3,4);

const getRightTriangleH = (n1, n2)=> Math.sqrt((n1**2)+(n2**2));


const hypotenuse = getRightTriangleH(3,4)



console.log(`The average of the three numbers is ${avg}`)
console.log(`The area of the triangle is ${hypotenuse}`)