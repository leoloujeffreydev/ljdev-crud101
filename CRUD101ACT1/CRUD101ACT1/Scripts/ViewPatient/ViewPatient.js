//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//


    //--------------VALIDATION MESSAGES--------------//


    //--------------FUNCTIONS--------------//


    //--------------FUNCTION FOR TESTING PURPOSES--------------//

    //--------------MODAL--------------//

    function showModal() {
        $('#apModal').modal('show');
    }

    function tryModal() {
        let txtPName = document.getElementById('txtPName');
        let aptxtPNameval = document.getElementById('txtPName').value;

        if (aptxtPNameval == "m") {
            $('#apModal').modal('show');
            txtPName.value = "mm";
        }
        else {
            txtPName.value = "not mm";
        }
    }

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    //btnSubmit.addEventListener('click', validateForm);
    btnTry.addEventListener('click', tryModal);
    //btnSubmit.addEventListener('click', valPName, valDrug, valDosage);

    //--------------PREVENT FORM SUBMISSION--------------//
    document.getElementById('addPatientForm').addEventListener('submit', function (event) {
        if (!valPName() || !valDrug() || !valDosage()) { // if not validateform
            event.preventDefault(); // prevent form submission if validation fails
        }

    });


    //END DOM
});
