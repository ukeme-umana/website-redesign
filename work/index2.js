//import React from 'react';
//import thriveEmployeeData from './database';



let rawData = [3, 4, 5, 6, 12, 14, 13, 2, 7];
rawData.sort(function (a, b){return a-b});
console.log(rawData);
//Recursive method

function searchData (rdata, x, left, right) { 
    if (left > right) {
        return false;
    }
    let mid = Math.ceil (left + ((right - left) / 2));
   // console.log(mid);

    if (rdata[mid] === x) {
        console.log(rdata[mid])
        return true;
    }

    if (x > rdata[mid]) {
        return searchData (rdata, x, mid + 1, right) 
    }

    else {
        return searchData (rdata, x, left, mid - 1)
      
    }


    

}

let arc= searchData (rawData, 20, 0, rawData.length - 1);

console.log(arc);
/* 
let left = 0;
let right = rawData.length - 1;
let mid = (left + right) / 2;

let leftArr = rawData.slice(0, mid);
console.log(leftArr);
let rightArr = rawData.slice(mid+1, right);
console.log(rightArr);
let newSortedArr = [];

if (leftArr[0] < rightArr[0]) {
    newSortedArr.push(leftArr[0])


for (i = 0; i < mid; i++) {
    for (j = 0; j < rightArr.length; j++) {
    leftArr[i] < rightArr[j] 
    }
 
}
    else 
} */





