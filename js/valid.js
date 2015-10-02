var check_name = /^[A-Za-z-' ]{4,50}$/;
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var check_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var check_occupation = /^[A-Za-z ]{4,50}$/;
var check_workplace = /^[A-Za-z0-9-' ]{4,50}$/;
var check_nationality = /^[A-Za-z-' ]{4,50}$/;

function validate(){
var name = document.getElementById('fn').value;
var email = document.getElementById('email').value;
var password = document.getElementById('Password').value;
var occupation = document.getElementById('occupation').value;
var nationality = document.getElementById('nationality').value;
var workplace = document.getElementById('workplace').value;
var errors = [];

 if (!check_name.test(name)) {
  errors[errors.length] = "You valid Name .";
 }
 if (!check_email.test(email)) {
  errors[errors.length] = "You must enter a valid email address.";
 }
 if (!check_occupation.test(occupation)) {
  errors[errors.length] = "You valid UserName no special char .";
 }
 if (!ck_password.test(password)) {
  errors[errors.length] = "You must enter a valid Password ";
 }
 if (!check_workplace.test(workplace)) {
  errors[errors.length] = "You must enter a valid Password ";
 }
 if (!check_nationality.test(nationality)) {
  errors[errors.length] = "You must enter a valid Password ";
 }
 if (errors.length > 0) {

  reportErrors(errors);
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
