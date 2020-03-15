const thriveEmployeeData = [
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
    
    ]
 
   // console.log(thriveEmployeeData.length)

    //Function to get total number of people using each laptop type

     function totalNumberOfPeopleUsingEachLaptop (value, compare) {
        let show = 0;

        for (let i=0; i < value.length;  i++) {
         //   console.log (`${i} number || total length ${value.length}`)

         
            if ( value[i].systemtype === compare) {
                console.log(`${value[i].firstname} ${value[i].lastname} uses a ${value[i].systemtype}`)
            show++

            }
        }

        console.log(`${show} people use ${compare} laptop`)
        return show;

    }

    
    totalNumberOfPeopleUsingEachLaptop (thriveEmployeeData, 'mac') 
 
  // Function to get the number of people from specific states  
 
function totalNoOfPeopleFromSpecificStates (dataval, which) {

    let such = 0;

    for (let f=0; f < dataval.length; f++) {
     //   console.log(`${dataval[f].firstname} ${dataval[f].lastname}  is  from ${dataval[f].stateoforigin}`)

        if (dataval[f].stateoforigin === which) {
            console.log(`${dataval[f].firstname} ${dataval[f].lastname}  is  from ${dataval[f].stateoforigin}`)
            such++
        }
    }
    console.log(`${such} people are from ${which}`)
    return such;
}

totalNoOfPeopleFromSpecificStates (thriveEmployeeData, 'Kwara')

// Function to get the number of people in each department
function noOfPeopleInEachDepartment (people, dept) {
    let search= 0;
    for (let u=0; u < people.length; u++) {

        // console.log(`${people[u].firstname} ${people[u].lastname} is in ${people[u].Department} department`)
       
        if(people[u].Department === dept) {
            console.log(`${people[u].firstname} ${people[u].lastname} is in ${people[u].Department} department`)
            search++
        }
    }

    console.log(`${search} people are in ${dept} department`)
    return search;
}


noOfPeopleInEachDepartment(thriveEmployeeData, 'Growth') 

var a = totalNumberOfPeopleUsingEachLaptop (thriveEmployeeData, 'mac') ; 
console.log(`${a} people for laptop type`)

var  b = noOfPeopleInEachDepartment(thriveEmployeeData, 'Growth')
console.log (`${b} people for a certain department`)

var c = totalNoOfPeopleFromSpecificStates (thriveEmployeeData, 'Kwara')
console.log(`${c} people for states`)  


/* var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  document.getElementById("demo").innerHTML = sum;
} */
