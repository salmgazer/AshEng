/*global $, alert*/

//$(function () {
//    'use strict';
//    $('#profile_pic').click(function () {
////        alert('Image pressed');
////        $('#modal1').openModal();
//    });
//});


  $(document).ready(function () {
        //hide hider and popup_box
        $("#hider").hide();
        $("#popup_box").hide();

        //on click show the hider div and the message
        $("#profile_pic").click(function () {
            $("#hider").fadeIn("slow");
            $('#popup_box').fadeIn("slow");
        });
        //on click hide the message and the
        $("#buttonClose").click(function () {

            $("#hider").fadeOut("slow");
            $('#popup_box').fadeOut("slow");
        });

        });
