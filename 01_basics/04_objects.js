//object literals
const details ={
    fname : "prasanna",
    lname: "Banstola",
    age : 19,
    "full name" : "Prasanna Banstola"
}
 //console.log(details["full name"]);
 //onsole.log(details["age"]);// details.age garna ni milcha , tara object lai "age" = 19 vanera define gareko cha vane  details.age garda error aaucha 
details.age = 22 // age lai change garda = sign use gareko 
//console.log(details["age"]);
//Object.freeze(details) // aba age lai change garna mildaina freeze use garya vayera
// symbol lai refer farda [ ] use garne
 details.greeting = function(){
    //console.log(`hi , ${this.fname}`);
    
 }
  //console.log(details.greeting());
  
 
 //*******************************************************//
//object vitra pani multiple objects banauna milcha
 const object1 = {
    fullname :{
        userfullname: {
            firstname: "prasanna" ,
            lastname : "Banstola"

        }
        }
    }
    //console.log(object1.fullname);
    


    //object ko array lai combine garne
     
    const obj1 = {1:"a", 2:"b"}
    const obj2 = {3:"c",4:"d"}
    
    //const obj3 = Object.assign({}obj1, obj2) // obj1 ra obj2 lai combine gareko {}lai chai target maneko ani obj1 ra obj 2 lai source manera target ma rakheko tara narakhda ni huncha
     const obj3  = {...obj1, ...obj2} //spread gareko

    //console.log(obj3);
 
 
    //console.log(object1)
    //console.log(Object.keys(object1.fullname.userfullname));
    //console.log(Object.values(object1.fullname.userfullname));
    //console.log(Object.entries(object1.fullname.userfullname));


    //****************** Destructuring of objects *********************************/
    
    const course ={
        course_name : "javascript",
        course_ID : "csc-921",
        course_cost : 900,
        course_instructor : "prasanna"
    }
    //console.log(`hello this is course description, ${course.course_ID}`);

    const {course_name: Cname} = course // destructuring gareko time t otime call garna sajilo hoss vanera , yesto garda hareko choti  course.coursename garera call garirakhnu pardaina
    console.log(Cname);
     const {course_ID : id} = course
     console.log(id);
     
    
    
    
 