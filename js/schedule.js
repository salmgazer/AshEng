/*global $, alert*/


  $(document).ready(function () {


        //hide hider and popup_box
        $("#robert_satcher_hider").hide();
        $("#robert_satcher_popupbox").hide();


        //Popup bio for robert satcher
        $("#robert_satcher_pic").click(function () {
            $("#robert_satcher_hider").fadeIn("fast");
             $('#robert_satcher_popupbox').fadeIn("fast");
//            $('#robert_satcher_popupbox').fadeIn("fast");
        });

        //on click hide the message and the
        $("#robert_satcher_close").click(function () {
            $("#robert_satcher_hider").fadeOut("fast");
            $('#robert_satcher_popupbox').fadeOut("fast");
        });





       $("#patrick_awuah_hider").hide();
        $("#patrick_awuah_popupbox").hide();


       //on click show the hider div and the message
        $("#patrick_awuah_pic").click(function () {
            $("#patrict_awuah_hider").fadeIn("fast");
            $('#patrick_awuah_popupbox').fadeIn("fast");
        });


         $("#patrick_awuah_close").click(function () {
            $("#patrick_awuah_hider").fadeOut("fast");
            $('#patrick_awuah_popupbox').fadeOut("fast");
        });





       $("#amissah_arthur_hider").hide();
        $("#amissah_arthur_popupbox").hide();

       //on click show the hider div and the message
        $("#amissah_arthur_pic").click(function () {
            $("#amissah_arthur_hider").fadeIn("fast");
            $('#amissah_arthur_popupbox').fadeIn("fast");
        });

         $("#amissah_arthur_close").click(function () {
            $("#amissah_arthur_hider").fadeOut("fast");
            $('#amissah_arthur_popupbox').fadeOut("fast");
        });





       $("#mills_robertson_hider").hide();
        $("#mills_robertson_popupbox").hide();

       //on click show the hider div and the message
        $("#mills_robertson_pic").click(function () {
            $("#mills_robertson_hider").fadeIn("fast");
            $('#mills_robertson_popupbox').fadeIn("fast");
        });


         $("#mills_robertson_close").click(function () {
            $("#mills_robertson_hider").fadeOut("fast");
            $('#mills_robertson_popupbox').fadeOut("fast");
        });



        //on click hide the message and the

        });







//For barcode scanning
$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        alert("Scan button pressed");
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#barcode_result").val(result.text);
                $("#scan_ui").hide("fast");
                $("#skip_barcode").show("fast");
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});









