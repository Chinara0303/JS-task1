// confirm
/*
function myFunction(){
    if  (confirm("Choose the one") == true){
        x = document.getElementById('body').style.backgroundColor = "#000"
    }
    else{
        x = document.getElementById('body').style.backgroundColor = "#fff"
    }
}
*/


// prompt
/*
function myFunction(){
   var text;
   var x = prompt("Please,enter your age...")
   if (x < 18){
      text = "Please, first register";
   }
   else{
       text = "Welcome"
   }
   document.getElementById("text").innerHTML=text; 
}
*/

// class
/*
class Person{
    constructor(firstname,lastname,password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }

    FullName(){
        return (this.firstname + " " + this.lastname).toUpperCase();
    }
}
var person = new Person ("chinara","ibadova",12345);
document.getElementById("text").innerHTML = person.FullName();

*/