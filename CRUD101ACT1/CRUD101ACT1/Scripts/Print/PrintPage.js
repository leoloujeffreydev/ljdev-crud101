document.addEventListener('DOMContentLoaded', function () {


    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    var btnPrintPage = document.getElementById('btnPrintPage');
    var PrintPatientInfoForm = document.getElementById('PrintPatientInfoForm');

    //--------------FUNCTION--------------//
    function printPage() {
        window.print();
    }

    function printDiv(divId) {
        var printContents = document.getElementById(divId).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }

    btnPrintPage.addEventListener('click', function () { //button is click and submit function
       // printPage();
        printDiv(divId);
    });

});