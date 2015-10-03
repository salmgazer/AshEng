/*global $, alert*/



//For barcode scanning
$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        alert("Scan button pressed");
        cordova.plugins.barcodeScanner.scan(
            function (result) {

                $("#barcode_result").val(result.text);

                $("#electronics_barcode").hide("fast");
                    $("#mechanical_barcode").hide("fast");
                    $("#science_barcode").hide("fast");
                    $("#design_barcode").hide("fast");

                var response = result.text;

                if (response == 'electronics_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#design_barcode").hide("fast");
                    $("#science_barcode").hide("fast");
                    $("#mechanical_barcode").show("fast");
                    $("#electronics_barcode").show("fast");
                }

                if (response == 'mechanical_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#electronics_barcode").hide("fast");
                    $("#design_barcode").hide("fast");
                    $("#science_barcode").hide("fast");
                    $("#mechanical_barcode").show("fast");
                }

                if (response == 'science_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#electronics_barcode").hide("fast");
                    $("#mechanical_barcode").hide("fast");
                    $("#design_barcode").hide("fast");
                    $("#science_barcode").show("fast");
                }

                if (response == 'design_barcode') {
                    $("#scan_ui").hide("fast");
                     $("#electronics_barcode").hide("fast");
                    $("#mechanical_barcode").hide("fast");
                    $("#science_barcode").hide("fast");
                    $("#design_barcode").show("fast");
                }

            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });


});









