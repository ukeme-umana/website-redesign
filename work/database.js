/* let input = [2, 3, 1, 4, 5]
function getProduct (arr) {
    let output = []
    let empty = [];
    let p;
    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr.length; j++){
            if (j !== i) {
                empty.push(arr[j])
            }
            for (let k=0; k < empty.length; k++){
                 p = empty[k] * empty[k+1]  
            }
             output.push(p)
            
        }
    }
    return console.log(output)
}

getProduct(input) */