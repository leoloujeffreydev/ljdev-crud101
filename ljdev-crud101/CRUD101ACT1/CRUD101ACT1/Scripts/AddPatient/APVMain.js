document.addEventListener('DOMContentLoaded', function () {


    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    var btnSubmit = document.getElementById('btnSubmit');
    var btnValidate = document.getElementById('btnValidate');
    //var btnSubmit = document.getElementById('btnSubmit').querySelector('input[type="button"]'); // You can use document.getElementById to select the <input> element and then set its disabled attribute:


    //-------------FORM SUBMISSION / CANCELLATION -----------------//

    function FormCancel() {
        document.getElementById('APVHiddenTextboxesForm').addEventListener('submit', function (event) {
            event.preventDefault(); // prevent form submission if validation fails

        });
    }

    //-------------FUNCTION-----------------//


    btnSubmit.addEventListener('click', function () { //button is click and submit function

        FormSubmitAPVHiddenTextboxes();

        
       
        // window.location.href = "/PatientInformation/AddPatientView/"
        //if (typeof window.validateFormConfirm === 'function') {
        //    window.validateFormConfirm();
        //} else {
        //    console.error('validateFormConfirm is not defined or not a function');
        //}





        //    console.log("Drug already given to the patient this day");)



        //if (uniqueResult == 1) {
        //    console.log("Drug already given to the patient this day");
        //}
        //else if (uniqueResult == "") {
        //    console.log("do nothing");
        //}
        //else {
        //    console.log("Continue with the validation")
        //    if (typeof window.validateFormConfirm === 'function') {
        //        window.validateFormConfirm();
        //    } else {
        //        console.error('validateFormConfirm is not defined or not a function');
        //    }
        //}


    });

    var result = document.getElementById('hiddenTxtStatus').value;
    console.log("result of DB fetch:", result);// Check if element is found


    if (result == 1) {
        alert("Drug already administered to the patient today")
        FormCancel();
    }
    else if (result == "") {
        console.log("fill up / validate drug first...");
    }
    else {
        //alert("Continue with validation / creation")
        validateFormConfirm();
    }


    

    //Call the second function after the first function completes
    //validateFormConfirm();
    //if (typeof window.validateFormConfirm === 'function') {
    //    window.validateFormConfirm();
    //} else {
    //    console.error('validateFormConfirm is not defined or not a function');
    //}


    //});

});