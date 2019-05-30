/*
   function names can NOT have:
   - spaces
   - any special characters except _
   function names CAN have:
   - letters
   - numbers
   function naming convention is: firstSecondThirdFourth (called Camel Case)
*/
function showAlert() {
   console.log('Alert # 1');
   console.log('Alert # 2');
   console.log('Alert # 3');
   console.log('Alert # 4');
}

function secondFunc() {
   alert('Sarah Ahmed');
}

// Single line comments

/*

This
is a
multi-line comment

*/

// An English paragraph has many SENTENCES. Each sentence ends with a FULL-STOP
// A Javascript code has many STATEMENTS. Each statement ends with a SEMI-COLON.

// Each JS statement is written on a separate line.

// seudo code
 
/*
problem staement:show user input  inside heading

1. get input element on which user typed something
2.get value of input 
3.get heading element
4.change heading content 

1.how to get an html element
2.how to get an attribute of an html
3.how to get content of an html element

*/ 
function changeName() {

   // get input element
   // get value of input
   // get heading
   // change heading content

   
   // console.log(document.querySelector('input').value);
  
}
function changeName() {

   document.querySelector('h1 >span').innerHTML=document.querySelector('input').value;
  
  
}

// get input Element
// get value of input
// get body Element
// change inline style background to input
// document.queryselector('body').style="background-color:"function changeName() {

   function changeColor() {
      document.querySelector('h1').style="color:red";
   }

   function clearColor() {
      document.querySelector('h1').style="color:black";
   }

   function bodyColor() {
      document.querySelector('h1').style="color:black";
   }