var check_name = /^[A-Za-z-' ]{4,50}$/;
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var check_phone =  /^[0-9+]{10,15}$/;
var check_occupation = /^[A-Za-z ]{4,50}$/;
var check_workplace = /^[A-Za-z0-9-' ]{4,50}$/;
//var check_nationality = /^[A-Za-z-' ]{4,50}$/;
var errors = [];

function validate(){
var nationality = document.getElementById('nationality').options[document.getElementById('nationality').selectedIndex].text;
if(nationality == "Select your country"){
    alert("Please select your country");
    return;
}
var name = document.getElementById('fn').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('thephone').value;
var occupation = document.getElementById('occupation').value;
var workplace = document.getElementById('workplace').value;

 if (!check_name.test(name)) {
  errors[errors.length] = "You valid Name .";
 }
 if (!check_email.test(email)) {
  errors[errors.length] = "You must enter a valid email address.";
 }
 if (!check_occupation.test(occupation)) {
  errors[errors.length] = "You must enter your occupation";
 }
 if (!check_phone.test(phone)) {
  errors[errors.length] = "You must enter a valid phone ";
 }
 if (!check_workplace.test(workplace)) {
  errors[errors.length] = "You must enter a valid workplace ";
 }
 /*if (!check_nationality.test(nationality)) {
  errors[errors.length] = "You must enter a valid country ";
 }*/
 if (errors.length > 0) {

  reportErrors(errors);
     errors = [];
  return false;
 }
  return true;
}
function reportErrors(errors){
 var msg = "Please Enter Valid Data...\n";
 for (var i = 0; i<errors.length; i++) {
 var numError = i + 1;
  msg += "\n" + numError + ". " + errors[i];
}
console.log(errors);
 alert(msg);
}
