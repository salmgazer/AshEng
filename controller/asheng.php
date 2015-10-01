<?php session_start();
if(!isset($_REQUEST['cmd'])){
    echo '{"result": 0, "message": "Unknown command"}';
    return;
}

include_once "adb.php";

$cmd = $_REQUEST['cmd'];

switch($cmd){
    case 1:
        addFeedback();
        break;
    case 2:
        signUp();
        break;
    default:
        echo '{"result": 0, "message": "Unknown command"}';
    return;
}


function addFeedback(){
    $well = $_REQUEST['well'];
    $notwell = $_REQUEST['notwell'];
    $better = $_REQUEST['better'];

    if(!isset($_SESSION['email'])){
        echo '{"result": 0, "message": "You need to first sign up"}';
        return;
    }
    $email = $_SESSION['email'];

    $myadb = new adb();

    $str_sql = "INSERT INTO feedback (email, well, notwell, better) values ('$email', '$well', '$notwell', '$better')";

    if(!$myadb->query($str_sql)){
        echo '{"result": 0, "message": "Could add your feedback."}';
        return;
    }
    echo '{"result": 1, "message": "Thanks for the feedback"}';
        return;
}

function signUp(){
    $fn = $_REQUEST['fn'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $occupation = $_REQUEST['occupation'];
    $workplace = $_REQUEST['workplace'];
    $nationality = $_REQUEST['nationality'];

    $_SESSION['email'] = $email;

    $myadb = new adb();

    $str_sql = "INSERT INTO attendance (email, fn, phone, occupation, workplace, nationality) values ('$email', '$fn', '$phone', '$occupation', '$workplace', '$nationality')";

    if(!$myadb->query($str_sql)){
        echo '{"result": 0, "message": "Could not signUp"}';
        return;
    }
    echo '{"result": 1, "message": "SigUp was successful"}';
    return;
}
