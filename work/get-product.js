
let input = [2, 3, 1, 4, 5];

//function to get product of an array
function productOfArray(anArray1) {
    let product = 1;
    
    for (let k = 0; k < anArray1.length; k++){
        product *= anArray1[k] 
    }
      
    return product;
}
productOfArray(input); 

//Division Method
function getProduct1(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        output[i] = productOfArray(arr) / arr[i]
    }
    
    return console.log(output);

}
getProduct1(input)

//Longer method
function getProduct2(array) {
    let L = array.length
    let leftProduct = []
    let rightProduct = []
    let outputProduct = []

   leftProduct[0] = 1
   rightProduct[L-1] = 1

   for (let y = 1; y < L; y++){
       leftProduct[y] = array[y - 1] * leftProduct[y - 1]
   }
    
   for ( let y = L - 2; y >= 0; y--) {
       rightProduct[y] = array[y + 1] * rightProduct[y + 1]
   }

   for ( let y = 0; y < L; y++) {
       outputProduct[y] = rightProduct[y] *  leftProduct[y]
   }
   return console.log(outputProduct);
}

getProduct2(input)