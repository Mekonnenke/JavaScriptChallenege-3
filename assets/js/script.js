
//declaring variables for value uppercase lowercase numbers and symbols
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+=-}{[]?/>.<,':;`~/\|";

var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("uppercase");


var value = [uppercase] +[lowercase] + [symbol] + [number];


 function checkBox ()
 {
    
   if  (uppercaseEl.checked == false)
  
   {
      value != uppercase;
   }
  
  
 }




// // Write password to the #password input
function generate () {

//   // Get references to the #generate element
var passValue = document.getElementById( "numberlength" ).value;
var password = "";


 for (var i =0; i <= passValue; i++)
 {
    password = password + value.charAt( Math.floor( Math.random () * Math.floor( value.length - 1 )));
    
  }

 // // Add event listener to generate button
document.getElementById("display").value = password;
DocumentFragment.execCommand

//add pasword to previously generated passwords section
document.getElementById("lastNums" ).innerHTML += password ;
}

// //default length to display
 document.getElementById( "length" ).innerHTML = "length: 124";

// //function to set length based on slide position
document.getElementById( "numberlength" ).oninput = function ()
{
     value.checkBox ()
    if ( document.getElementById( "numberlength" ).value >0 )
    {
 
        document.getElementById( 'length' ).innerHTML ="length:" +  document.getElementById("numberlength" ).value  + "\n";  
        
    }
    else{
      document.getElementById( 'length' ).innerHTML = "1";
        }


};




