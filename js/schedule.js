/*global $, alert*/



//For barcode scanning
$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        alert("Scan button pressed");
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#barcode_result").val(result.text);

                var response = result.text;

                if (response == 'skip_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#skip_barcode").show("fast");
                }

                if (response == 'design_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#design_barcode").show("fast");
                }

                if (response == 'databank_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#databank_barcode").show("fast");
                }

                if (response == 'norton_barcode') {
                    $("#scan_ui").hide("fast");
                    $("#norton_barcode").show("fast");
                }

            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});









