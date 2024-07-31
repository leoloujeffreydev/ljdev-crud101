//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //var btnSubmit = document.getElementById('btnSubmit').querySelector('input[type="button"]'); 


    console.log("disableedb33");
  
    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    var btnSubmit = document.getElementById('btnSubmit');
    var btnValidate = document.getElementById('btnValidate');
    //console.log(btnSubmit);
    

    var fieldtxtPName = document.getElementById('txtPName');
    var fieldddlDrugName = document.getElementById('ddlDrugName');
    var fieldddlDrugDosage = document.getElementById('ddlDrugDosage');


    var txtPName = document.getElementById('txtPName').value;
    var ddlDrugName = document.getElementById('ddlDrugName').value;
    var ddlDrugDosage = document.getElementById('ddlDrugDosage').value;
    var returnTxtPName = document.getElementById('returnTxtPName').value;
    var returnTxtDName = document.getElementById('returnTxtDName').value;
    var returnTxtDosage = document.getElementById('returnTxtDosage').value;
    //var apreturnTxtPName = document.getElementById('apreturnTxtPName').value;
    //var apreturnTxtDName = document.getElementById('apreturnTxtDName').value;
    //var apreturnTxtDosage = document.getElementById('apreturnTxtDosage').value;

    var valMesPName = document.getElementById('valMesPName');
    var valMesDrug = document.getElementById('valMesDrug');
    var valMesDosage = document.getElementById('valMesDosage');


    console.log(txtPName);
    console.log(ddlDrugName);
    console.log(ddlDrugDosage);

    //--------------SET THE ELEMENTS READONLY AND DISABLED--------------//

    btnSubmit.disabled = true;
    btnValidate.disabled = false;
    fieldtxtPName.readOnly = false;
    fieldddlDrugDosage.disabled = false;
    fieldddlDrugName.disabled = false;

    //var btnSubmit = document.getElementById('btnSubmit').querySelector('input[type="button"]'); // You can use document.getElementById to select the <input> element and then set its disabled attribute:

    // Disable the button
    //btnSubmit.disabled = true;

     //--------------FUNCTION--------------//

    function PassValidatation() {
        if (valMesPName.innerText == "" && valMesDrug.innerText == "" && valMesDosage.innerText == "") {
            return 0;
        }
    }
        //console.log(PassValidatation);

    //--------------FUNCTION SUBMIT FORM AND GET DATA FROM DATABASE THEN DISPLAY--------------//

    function FormSubmitAPVHiddenTextboxes() {

        var element = document.getElementById('APVHiddenTextboxesForm');
        console.log("Element:", element); // Check if element is found
        document.getElementById('APVHiddenTextboxesForm').submit();

    }

    // Ensure validateFormConfirm() is globally accessible (optional if defined globally)
    window.FormSubmitAPVHiddenTextboxes = FormSubmitAPVHiddenTextboxes;

    btnValidate.addEventListener('click', function () { //button is click and submit function
    //event.preventDefault(); // Prevent default form submission

        validateForm();

        if (PassValidatation() == 0) {
            console.log("Proceed with drug validation");
            FormSubmitAPVHiddenTextboxes();
        }
        //btnSubmit.disabled = true;
        //btnValidate.disabled = false;
    });

    var result = document.getElementById('hiddenTxtStatus').value;
    console.log("result of DB fetch:", result);// Check if element is found

    if (result == 1) {
        alert("Drug already administered to the patient today");
    }
    else if (result == "") {
        console.log("continue...");
    }
    else {
        //alert("Continue with validation / creation")
        btnSubmit.disabled = false;
        btnValidate.disabled = true;
        fieldtxtPName.readOnly = true;
        fieldddlDrugDosage.disabled = true;
        fieldddlDrugName.disabled = true;
        console.log("disable validate button and enable create button");

        //var apreturnTxtPName = document.getElementById('apreturnTxtPName').value;
        //var apreturnTxtDName = document.getElementById('apreturnTxtDName').value;
        //var apreturnTxtDosage = document.getElementById('apreturnTxtDosage').value;

        //apreturnTxtPName = returnTxtPName;
        //console.log(returnTxtPName);
        //apreturnTxtDName = returnTxtDName;
        //console.log(returnTxtDName);
        //apreturnTxtDosage = returnTxtDosage;
        //console.log(returnTxtDosage);

        console.log("post form submit textbox get valuesS");
        //validateFormConfirm();
    }

    // END DOM

});


