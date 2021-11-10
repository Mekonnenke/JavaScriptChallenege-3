
//declaring variables for value uppercase lowercase numbers and symbols
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        //ASCHII value 65- 90
var lowercase = "abcdefghijklmnopqrstuvwxyz";       // ASCHII value 97= 122
var number = "0123456789";                       //ASCHII value 48 -57
var symbol = "!@#$%^&*()_+=-}{[]?/>.<,':;`~/\|";           //ASCHII value 33-47 , 59-64,
var value  = [uppercase] + [lowercase] + [symbol]+ [number] ;
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");

if (( !uppercaseEl.checked ) && ( !lowercaseEl.checked ) && 
( !numberEl.checked ) &&  ( !symbolEl.checked ))
{
  value = [uppercase] + [lowercase] + [symbol]+ [number] ;
}
else if ( uppercaseEl.checked)
{
  value = [lowercase]  + [number] + [symbol];
}
else if ( lowercaseEl.checked)
{
  value = [uppercase]  + [number] + [symbol];
}
else if ( numberEl.checked)
{
  value = [uppercase] + [lowercase] + [symbol];
}
else if ( symbolEl.checked)
{
  value = [uppercase] + [lowercase] + [number];
}
else
{
  value = 0 ;
}




// // Write password to the #password input
function generate () {

//   // Get references to the #generate element
var passValue = document.getElementById( "numberlength" ).value;
var checkbox = document.getElementsByClassName("checkbox");
var password = "";


 for (var i =0; i <= passValue; i++)
 {
    password = password + value.charAt( Math.floor( Math.random () * ( value.length - 1 )));
    
   
  }
 
  
 // // Add event listener to generate button
document.getElementById("display" ).value = password ; 
DocumentFragment.execCommand;

//add pasword to previously generated passwords section
document.getElementById("lastNums" ).innerHTML += password + "</br>" ;


}

// //default length to display
 document.getElementById( "length" ).innerHTML = "length: 124" ;

// //function to set length based on display position
document.getElementById( "numberlength" ).oninput = function ()
{
  
    if ( document.getElementById( "numberlength" ).value >0 )
    {
 
        document.getElementById( 'length'  ).innerHTML ="length:"  +  document.getElementById("numberlength" ).value ;  
        
    }
    else{
      document.getElementById( 'length' ).innerHTML = "1";
        }


};




