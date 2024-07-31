//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//

    const addPatientForm = document.getElementById('addPatientForm');
    const btnSubmit = document.getElementById('btnSubmit');

    //--------------VALIDATION MESSAGES--------------//
 

    //--------------FUNCTIONS--------------//
    //valPName();
    //valDrug();

    //--------------PREVENT FORM SUBMISSION--------------//

    //document.getElementById('addPatientForm').addEventListener('submit', function (event)
    //{
    //    if (!valPName())
    //    {
    //        event.preventDefault(); // Prevent form submission if validation fails
    //    } 
    //    else if (!valDrug())
    //    {
    //        event.preventDefault(); // Prevent form submission if validation fails
    //    }
    //});

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    //btnTryJS.addEventListener('click', valPName);
    btnSubmit.addEventListener('click', valPName, valDrug, addPatientForm);

    //btnSubmit.addEventListener('click', function () {
    //    valPName();
    //    valDrug();
    //    addPatientForm()
    //});

    //document.getElementById('addPatientForm').addEventListener('submit', function (event) {
    //    if (!valPName()) {
    //        event.preventDefault(); // Prevent form submission if validation fails
    //    }
    //    else if (!valDrug()) {
    //        event.preventDefault(); // Prevent form submission if validation fails
    //    }
    //});

    //END DOM
});
