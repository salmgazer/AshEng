var check_name = /^[A-Za-z-' ]{4,50}$/;
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var check_phone =  /^[0-9+]{10,15}$/;
var check_occupation = /^[A-Za-z ]{4,50}$/;
var check_workplace = /^[A-Za-z0-9-' ]{2,50}$/;
var check_nationality = /^[A-Za-z-' ]{4,50}$/;
var errors = [];

function validate(){
var nationality = document.getElementById('nationality').value;
var name = document.getElementById('fn').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('thephone').value;
var occupation = document.getElementById('occupation').value;
var workplace = document.getElementById('workplace').value;

 if (!check_name.test(name)) {
  errors[errors.length] = "Enter valid name .";
 }
 if (!check_email.test(email)) {
  errors[errors.length] = "Enter valid email.";
 }
 if (!check_occupation.test(occupation)) {
  errors[errors.length] = "Enter your occupation";
 }
 if (!check_phone.test(phone)) {
  errors[errors.length] = "Enter valid phone number";
 }
 if (!check_workplace.test(workplace)) {
  errors[errors.length] = "Enter valid workplace ";
 }
 if (!check_nationality.test(nationality)) {
  errors[errors.length] = "Enter your country ";
 }
 if (errors.length > 0) {

  reportErrors(errors);
     errors = [];
  return false;
 }
  return true;
}
function reportErrors(errors){
 //var msg = "Please Enter Valid Data...\n";
 var msg = ""
; for (var i = 0; i<errors.length; i++) {
 var numError = i + 1;
 msg += '<div class="chip teal-text mychip">'+errors[i]+'<i class="material-icons teal-text">close</i></div>';
}
console.log(errors);
document.getElementById("myerrors").innerHTML = msg;
window.location.href = "#topper";
}
