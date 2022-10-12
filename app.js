/*Q1*/
function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2 
}
    console.log(falsyOrTruthy(0, 5))


/*Q2*/
function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1,2,3,4]));

/*Q3*/
/* function arrSum(arr) {
    for (let i = 0; i < arr.length; ++i) {
        // This is how you loop through every element in an array //
        sum = sum + arr[i];
    }
    return sum;
}
    


console.log(arrSum([1,2,3,4,5,6])); */

/*Q5*/
function progressivSum(num) {
    let sum = 0
    for (let i = 0; i < num; ++i) {
       sum = sum + i;
    }
    return sum;
}

console.log(progressivSum(3));

/*Q6*/
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(5000))

/*Q7
function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
       if (arr[i] > max) {
        max = arr[i];
       }
    }
    return max
}

console.log (getMax([-100, -200, -300]));*/

/*Q8
function reverseString(str) {
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}*/

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('reber')); 

/*Q9*/
function convertToZeros(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0
    }
    return newArr;
}

console.log(convertToZeros([5, 100, 0]))

/*Fill*/
function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1]));

/*Map*/
function convertToZeros(arr) {
   return arr.map(elem => 0);
}

console.log(convertToZeros([3, 4, 5, 6, 7, 8]));

/*Q10*/
/*For loop method*/
function removeApples(arr){
    let noApples = []
    for(let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
        noApples.push(arr[i])
        } 
    }
    return noApples
}

console.log(removeApples(['Banana','Apple','Orange','Apple']))

/*Filter method*/
function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApples(['Banana','Apple','Orange','Apple']))

/*Q11*/
/*for loop*/
function filterOutFalsy(arr) {
    let truthyArr = [];
    for(let i = 0; i < arr.length; ++i) {
        if (!!arr[i === true]) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}
console.log(filterOutFalsy(["",[],0,null,undefined,"0"]));

/*filter method*/
function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(["",[],0,null,undefined,"0"]));

/*Q12*/
function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500,0,"Kevin","",[]]))