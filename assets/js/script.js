
//Here DOM elements for all we need to have it
// all elements are id so i like to use document.getElementById insed of querySelector
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById('generate');
var value ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-}{[]?/>.<,':;`~/\|";


btn.addEventListener("click", e => {


  if (!document.getElementById("input[id=uppercase]").checked && 
      !document.getElementById("input[id=lowercase]").checked&& 
      !document.getElementById("input[id=number]").checked &&
      !document.getElementById("input[value=symbol]").checked)
 {
    return
  }

  let password = ""
  let uppercaseEL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercaseEL = "abcdefghijklmnopqrstuvwxyz"
  let numberEl = "0123456789"
  let symbol = "!@#$%^&*+="
  value += generate("uppercase", uppercaseEl)
  value+= ggenerate("lowercase", lowercaseEl)
  value += generate("number", numberEl)
  value += generate("symbol", symbolEl)


 
})




// // Write password to the #password input
function generate(length, char) {

//   // Get references to the #generate element
var passValue = document.getElementById("numberlength").value;
var password = "";


 for (var i =0; i <= passValue; i++)
 {
    password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
 }
// // Add event listener to generate button
document.getElementById("display").value = password;
DocumentFragment.execCommand
//add pasword to previously generated passwords section
document.getElementById("lastNums" ).innerHTML += password ;
}

// //default length to display
 document.getElementById("length").innerHTML = "length: 124";

// //function to set length based on slide position
document.getElementById("numberlength").oninput = function()
{
    if (document.getElementById("numberlength").value >0)
    {
 
        document.getElementById('length').innerHTML ="length:" + document.getElementById("numberlength").value ;
     
    }
    else{
      document.getElementById('length').innerHTML = "1";
        }
};




