var link = "controller/asheng.php?cmd=";

function sendRequest(u) {
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({url: u, async: false});
    //Convert the JSON string to object
    var result = $.parseJSON(obj.responseText);
    return result;	//return object
}

$(function () {
  $('#signUpForm').submit(function(e) {
    e.preventDefault();
    signUp();
  });
});


function signUp(){
   var  email = $("#email").val();
   var thephone = $("#thephone").val();
   var fn = $("#fn").val();
   var occupation = $("#occupation").val();
   var workplace = $("#workplace").val();
   var nationality = $("#nationality").val();

    var phone = ""+thephone;

    var strUrl = link+"2&fn="+fn+"&email="+email+"&phone="+phone+"&occupation="+occupation+"&workplace="+workplace+"&nationality="+nationality;
    var objResult = sendRequest(strUrl);
    if(objResult.result == 0){
        //better alert
        alert("not added");
        return;
    }
    //better alert
    window.location.href = "schedule.html";
}



