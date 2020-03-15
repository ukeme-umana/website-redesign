

let testData = [
    {firstname: 'Samirah', lastname: 'Bello',
     age: 23, gender: 'female', stateoforigin: 'Kogi',
      Department: 'commercial', systemtype: 'mac' },

      {firstname: 'Ayodeji', lastname: 'Arikawe',
     age: 26, gender: 'male', stateoforigin: 'Ondo',
      Department: 'Co-Founder & CTO', systemtype: 'mac' },
       
      {firstname: 'Obaka', lastname: 'Ikani',
      age: 27, gender: 'male', stateoforigin: 'Kogi',
       Department: 'Operations', systemtype: 'mac' },

       {firstname: 'David', lastname: 'Azemoh',
       age: 26, gender: 'male', stateoforigin: 'Edo',
        Department: 'Engineering', systemtype: 'mac' },

        {firstname: 'Charles', lastname: 'Isidi',
        age: 26, gender: 'male', stateoforigin: 'Delta',
         Department: 'Growth', systemtype: 'mac' },

         {firstname: 'Uka', lastname: 'Eje',
         age: 26, gender: 'male', stateoforigin: 'Benue',
          Department: 'Co-Founder & CEO', systemtype: 'mac' },

          {firstname: 'Faith', lastname: 'Ogarabe',
       age: 26, gender: 'female', stateoforigin: 'Rivers',
        Department: 'tech team', systemtype: 'mac' },

        {firstname: 'Precious', lastname: 'Darby',
       age: 26, gender: 'female', stateoforigin: 'Kano',
        Department: 'Growth', systemtype: 'mac' },

        {firstname: 'Seun', lastname: 'Ojeikhodion',
       age: 26, gender: 'female', stateoforigin: 'Kano',
        Department: 'Finance', systemtype: 'mac' },

        {firstname: 'Adeyemi', lastname: 'Odunola',
       age: 26, gender: 'female', stateoforigin: 'Kwara',
        Department: 'Operations', systemtype: 'windows' },

        {firstname: 'Gideon', lastname: 'Idowu',
       age: 26, gender: 'male', stateoforigin: 'Oyo',
        Department: 'Engineering', systemtype: 'mac' },

        {firstname: 'Imo', lastname: 'Nnadozie',
       age: 26, gender: 'male', stateoforigin: 'Kano',
        Department: 'Engineering', systemtype: 'mac' },

        {firstname: 'Ayoade', lastname: 'Adeyemo',
        age: 26, gender: 'male', stateoforigin: 'Oyo',
         Department: 'Engineering', systemtype: 'mac' },

        {firstname: 'Dora', lastname: 'Nolaptop',
       age: 26, gender: 'female', stateoforigin: 'Kano',
        Department: 'Engineering', systemtype: 'windows' },

        {firstname: 'Ukeme', lastname: 'Umana',
       age: 26, gender: 'female', stateoforigin: 'Akwa Ibom',
        Department: 'Engineering', systemtype: 'tv' },

        {firstname: 'Sula', lastname: 'Money',
       age: 26, gender: 'male', stateoforigin: 'Kano',
        Department: 'tmoni', systemtype: 'mac' },
      
        {firstname: 'Muslee', lastname: 'Munir',
       age: 26, gender: 'female', stateoforigin: 'Kwara',
        Department: 'tmoni', systemtype: 'windows' },

        {firstname: 'Kingsley', lastname: 'Odion',
       age: 26, gender: 'male', stateoforigin: 'Kano',
        Department: 'tmoni', systemtype: 'windows' },

        {firstname: 'Moyosoreoluwa', lastname: 'Oluwatuyi',
       age: 26, gender: 'male', stateoforigin: 'Ekiti',
        Department: 'Growth', systemtype: 'windows' },

        {firstname: 'Demilade', lastname: 'speak',
       age: 26, gender: 'male', stateoforigin: 'Osun',
        Department: 'Data analyst', systemtype: 'mac' },

        {firstname: 'Joyce', lastname: 'Dishon',
       age: 26, gender: 'female', stateoforigin: 'Adamawa',
        Department: 'Finance', systemtype: 'windows' },
        
        {firstname: 'Favour', lastname: 'Eze',
       age: 26, gender: 'female', stateoforigin: 'Imo',
        Department: 'People and culture', systemtype: 'mac' }
    
    ];

//console.log(testData.length);

let anArr = [1, 2, 3, 3, 5, 7, 6, 5, 7, 3, 1];
let yup = ['uk', 'chris', 'ay', 'uk', 'chris', 'moyo']
/*anArr.sort(function (a, b){return a-b});

function duplicateInteger (int) {

    let duplicateIntArr = []
    let sample =true;
    for (let h = 0; h < int.length - 1; h++){
        if (int[h] == int[h + 1]){
            sample = true;
            duplicateIntArr.push(int[h]); 
        }
        else {
            sample = false;
        }
        
    }

    //console.log(int);
    
    return console.log(duplicateIntArr); 
}

duplicateInteger (anArr) */

//Function that will remove duplicate data and display array unduplicated.
/*
@return String
*/
function removeDuplicateData (rawArr) {
    let duplicateArr = [];
    let add = 0;
    let begin = true;
   
    for (let i = 0; i < rawArr.length; i++) {
        for (let j = 0; j < duplicateArr.length; j++) {
           
          if ( rawArr[i] === duplicateArr[j]) {
            begin = true;
            
          }
        }
     add++;
     
     if (add++ && begin === false) {
            duplicateArr.push(rawArr[i]);
     }
        begin = false;
        add = 0;
    }
    
    return console.log(duplicateArr);


} 

removeDuplicateData(yup);

 let dummyArr = [
     {name: 'uk', age: 19, strong: true}, 
    {name: 'uk', age: 20, strong: true}, 
    {name: 'FP', age: 29, strong: true},
    {name: 'Us', age: 19, strong: true}
 ]
console.log(dummyArr.length)

 function toRemoveDuplicateObject (objArr) {
    let duplicateObj = {};
    let emptyArr = [];
    let objName;
    //let collectDuplicate = [];
    for (let y in objArr) {
        objName = objArr[y]['name']
        for (let b in duplicateObj){
            if(duplicateObj[b].name === objName)  {
               console.log (objArr[y])
            }
        }
        duplicateObj[objName] = objArr[y]
        console.log(`the duplicate`, objArr[y])

    }
    for (let y in duplicateObj ) {
        emptyArr.push(duplicateObj[y])
        } 
        return console.log(`The new array object is`, emptyArr);
         
    }
    
    toRemoveDuplicateObject (dummyArr) 

    let arrTest = ["Saturday", "Tuesday", "Monday", "Tuesday", "Saturday" ];
    let intTest = [1, 3, 6, 7, 3, 5, 7, 9, 2, 4, 1,  8, 10, 5]
// Funtction that will return all duplicate values in an array, either an integer or string
    function dualDuplicateIdentifier(anyArray) {
        for ( let p = 0; p < anyArray.length; p++){

            for (let u = p+1; u< anyArray.length; u++){
        
                if (anyArray[p] === anyArray[u]){
        
                console.log(anyArray[p]);
                }
            }
        
        }
    }
    dualDuplicateIdentifier(arrTest)