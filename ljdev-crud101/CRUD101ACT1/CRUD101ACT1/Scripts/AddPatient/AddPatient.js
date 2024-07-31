console.log("Script loaded successfully.");
//--------------GET CURRENT DATE THEN SET TO HIDDEN hiddenTxtDate--------------//

//function getCurrentDate() {
//    let today = new Date();
//    let year = today.getFullYear();
//    let month = String(today.getMonth() + 1).padStart(2, '0');
//    let day = String(today.getDate()).padStart(2, '0');
//    return `${year}-${month}-${day}`;
//}

//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {
    console.log("apvloadedagain");
    console.log("try calling function in js1 in mainjs, removed btnsubmit in js2")
    // Set the current date to hiddenTxtDate when the page loads

    //let hiddenTxtDate = document.getElementById('hiddenTxtDate');
    //console.log(hiddenTxtDate); // Check if element is found
    //hiddenTxtDate.value = getCurrentDate();
    //console.log(hiddenTxtDate.value); // Check the value being set

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    //const highlightClass = 'highlight-error';

    //TEXTBOXES
    var txtPName = document.getElementById('txtPName');
    //console.log(txtPName);

    //LABEL VALIDATION MESSAGES
    var valMesPName = document.getElementById('valMesPName');
    var valMesDrug = document.getElementById('valMesDrug');
    var valMesDosage = document.getElementById('valMesDosage');

    // DROP DOWN LISTS
    var ddlDrugName = document.getElementById('ddlDrugName');
    var ddlDrugNameIndex = ddlDrugName.value;

    var ddlDrugDosage = document.getElementById('ddlDrugDosage');
    var ddlDrugDosageIndex = ddlDrugDosage.value;

    //HIDDEN TEXT BOXES
    // FORM: addPatientForm
    var hiddenTxtDrug = document.getElementById('hiddenTxtDrug');
    var hiddenTxtDosage = document.getElementById('hiddenTxtDosage');

    // FORM: APVHiddenTextboxesForm
    var hiddenTxtStatus = document.getElementById('hiddenTxtStatus');
    var hiddenTxtPName = document.getElementById('hiddenTxtPName');
    var hiddenTxtDName = document.getElementById('hiddenTxtDName');
    var hiddenTxtDate = document.getElementById('hiddenTxtDate');

    var uniqueDrugStatus = hiddenTxtStatus.value;


    //MODAL
    var myModalPar = document.getElementById('myModalPar'); // GET MODAL PARAGRAPH ID <P>

    //BUTTONS
    var modalBtnCancel = document.getElementById('modalBtnCancel');  // GET MODAL CANCEL BUTTON
    var modalBtnSave = document.getElementById('modalBtnSave'); // GET MODAL CONFIRM BUTTON



    //--------------VALIDATION MESSAGES--------------//
    let vm01 = 'NO NUMBERS ALLOWED INSIDE TEXT BOX';
    let vm02 = 'NO LETTER ALLOWED AND ONE DOT(.) ONLY';
    let vm03 = 'FOUR DECIMAL PLACES ONLY';
    let vm04 = 'NO SPACES ALLOWED INSIDE TEXT BOX';
    let vm05 = 'NO DOUBLE SPACE ALLOWED INSIDE TEXT BOX';
    let vm06 = 'NO SPACE / S ALLOWED IN THE BEGINNING AND END OF TEXT';
    let vm07 = "NO SPECIAL CHARACTER ALLOWED EXCEPT(-) AND(')";
    let vm08 = 'ENTER VALUE IN THE FIELD';
    let vm09 = '50 CHARACTERS ONLY';
    let vm10 = 'Please select a drug';
    let vm11 = 'Please select dosage';

    //--------------MODAL CONFIRMATION / VALIDATION MESSAGES--------------//
    let mm01 = 'ARE YOU SURE YOU WANT TO SAVE RECORD?';
    let mm02 = 'DRUG ALREADY GIVEN TO THE PATIENT TODAY';

    //--------------FUNCTIONS--------------//

    // REGEX FOR VALIDATIONS:

    //NO NUMBERS ALLOWED INSIDE TEXT BOX
    function noNumbers(input) {
        var regex = /^[^0-9]*$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO LETTER ALLOWED AND ONE DOT(.) ONLY
    function noLetters(input) {
        var regex = /^[0-9]+(\.[0-9]+)?$/;
        return { isValid: regex.test(input), value: input };
    }

    //FOUR DECIMAL PLACES ONLY
    function fourDecimalOnly(input) {
        var regex = /^\d+(\.\d{1,4})?$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO SPACES ALLOWED INSIDE TEXT BOX
    function noWhiteSpace(input) {
        var regex = /^\S+$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO DOUBLE SPACE ALLOWED INSIDE TEXT BOX
    function noDoubleSpace(input) {
        var regex = /^(?!.*\s{2}).+$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO SPACE/S ALLOWED IN THE BEGINNING AND END OF TEXT
    function noSpaceBegEnd(input) {
        var regex = /^(?!\s)(?!.*\s$).+$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO SPECIAL CHARACTER ALLOWED EXCEPT (-) AND (')
    function noSpecChar(input) {
        var regex = /^[a-zA-Z0-9-' ]+$/;
        return { isValid: regex.test(input), value: input };
    }

    //NO BLANK INPUT ALLOWED
    function noBlankInp(input) {
        var regex = /\S/;
        return { isValid: regex.test(input), value: input };
    }

    //50 CHARACTERS ONLY
    function fiftyMax(input) {
        var regex = /^.{1,50}$/;
        return { isValid: regex.test(input), value: input };
    }

    //FUNCTION FOR HIDDEN TEXTBOX UNIQUE DRUG STATUS
    function valUniqueDrug() {
        return uniqueDrugStatus != 1;
    }

    //FUNCTION VALIDATE PATIENT NAME INPUT (TEXTBOX)

    function valPName() {
        let txtPName = document.getElementById('txtPName').value;
        let fieldPName = document.getElementById('txtPName');

        let noBlankInpRes = noBlankInp(txtPName);

        if (!noBlankInpRes.isValid) {
            valMesPName.innerText = vm08; // Validation message
            fieldPName.classList.add('highlight-error'); // Invalid field will be highlighted
            return false; // Validation failed, do not submit the form
        }

        let noSpecCharRes = noSpecChar(txtPName);
        let noSpaceBegEndRes = noSpaceBegEnd(txtPName);
        let noDoubleSpaceRes = noDoubleSpace(txtPName);
        let fiftyMaxRes = fiftyMax(txtPName);
        let noNumbersRes = noNumbers(txtPName);

        if (!noSpecCharRes.isValid) {
            valMesPName.innerText = vm07;
            fieldPName.classList.add('highlight-error');
            return false; // Validation failed, do not submit the form
        }
        else if (!noSpaceBegEndRes.isValid) {
            valMesPName.innerText = vm06;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesPName.innerText = vm05;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!fiftyMaxRes.isValid) {
            valMesPName.innerText = vm09;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!noNumbersRes.isValid) {
            valMesPName.innerText = vm01;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else {
            valMesPName.innerText = "";
            fieldPName.classList.remove('highlight-error'); //remove highlight if valid field
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: VALIDATE DRUG INPUT (TEXTBOX)

    //function valDrug() {
    //    let txtDrug = document.getElementById('txtDrug').value;
    //    let fieldDrug = document.getElementById('txtDrug');

    //    let noBlankInpRes = noBlankInp(txtDrug);

    //    if (!noBlankInpRes.isValid) {
    //        valMesDrug.innerText = vm08;
    //        fieldDrug.classList.add('highlight-error');
    //        return false;
    //    }

    //    let noSpecCharRes = noSpecChar(txtDrug);
    //    let noSpaceBegEndRes = noSpaceBegEnd(txtDrug);
    //    let noDoubleSpaceRes = noDoubleSpace(txtDrug);
    //    let fiftyMaxRes = fiftyMax(txtDrug);
    //    let noNumbersRes = noNumbers(txtDrug);


    //    if (!noSpecCharRes.isValid) {
    //        valMesDrug.innerText = vm07;
    //        fieldDrug.classList.add('highlight-error');
    //        return false; // Validation failed, do not submit the form
    //    }
    //    else if (!noSpaceBegEndRes.isValid) {
    //        valMesDrug.innerText = vm06;
    //        fieldDrug.classList.add('highlight-error');
    //        return false;
    //    }
    //    else if (!noDoubleSpaceRes.isValid) {
    //        valMesDrug.innerText = vm05;
    //        fieldDrug.classList.add('highlight-error');
    //        return false;
    //    }
    //    else if (!fiftyMaxRes.isValid) {
    //        valMesDrug.innerText = vm09;
    //        fieldDrug.classList.add('highlight-error');
    //        return false;
    //    }
    //    else if (!noNumbersRes.isValid) {
    //        valMesDrug.innerText = vm01;
    //        fieldDrug.classList.add('highlight-error');
    //        return false;
    //    }
    //    else {
    //        valMesDrug.innerText = "";
    //        fieldDrug.classList.remove('highlight-error');
    //        return true; // Validation passed, allow form submission
    //    }
    //}

    //FUNCTION: VALIDATE  DOSAGE INPUT (TEXTBOX)

    //function valDosage() {
    //    let txtDosage = document.getElementById('txtDosage').value;
    //    let fieldDosage = document.getElementById('txtDosage');

    //    let noBlankInpRes = noBlankInp(txtDosage);

    //    if (!noBlankInpRes.isValid) {
    //        valMesDosage.innerText = vm08;
    //        fieldDosage.classList.add('highlight-error');
    //        return false;
    //    }

    //    let noSpaceBegEndRes = noSpaceBegEnd(txtDosage);
    //    let noDoubleSpaceRes = noDoubleSpace(txtDosage);
    //    let noLettersRes = noLetters(txtDosage);
    //    let fourDecimalOnlyRes = fourDecimalOnly(txtDosage);

    //    if (!noSpaceBegEndRes.isValid) {
    //        valMesDosage.innerText = vm06;
    //        fieldDosage.classList.add('highlight-error');
    //        return false; // Validation failed, do not submit the form
    //    }
    //    else if (!noDoubleSpaceRes.isValid) {
    //        valMesDosage.innerText = vm05;
    //        fieldDosage.classList.add('highlight-error');
    //        return false;
    //    }
    //    else if (!noLettersRes.isValid) {
    //        valMesDosage.innerText = vm02;
    //        fieldDosage.classList.add('highlight-error');
    //        return false;
    //    }
    //    else if (!fourDecimalOnlyRes.isValid) {
    //        valMesDosage.innerText = vm03;
    //        fieldDosage.classList.add('highlight-error');
    //        return false;
    //    }
    //    else {
    //        valMesDosage.innerText = "";
    //        fieldDosage.classList.remove('highlight-error');
    //        return true; // Validation passed, allow form submission
    //    }
    //}

    //FUNCTION: VALIDATE  DRUG INPUT (SELECTED VALUE IN DROPDOWNLIST)

    function valDrug() {
        let ddlDrugNameIndex = ddlDrugName.value;
        let fieldDrug = document.getElementById('ddlDrugName');

        if (ddlDrugNameIndex == "") {
            //console.log("Input Please");
            valMesDrug.innerText = vm10;
            return false; // Prevent form submission
            $('#myModal').modal('hide');
        }
        //else if (!valUniqueDrug()) {
        //    alert("Drug already administered")
        //    fieldDrug.classList.add('highlight-error');
        //    return false;
        //}
        else {
            valMesDrug.innerText = "";
            console.log("Enter name");
            return true; // Continue with form submission
        }
    }

    //FUNCTION: VALIDATE  DOSAGE INPUT (SELECTED VALUE IN DROPDOWNLIST)

    function valDosage() {
        let ddlDrugDosageIndex = ddlDrugDosage.value;

        if (ddlDrugDosageIndex == "") {
            valMesDosage.innerText = vm11;
            return false; // Prevent form submission
            $('#myModal').modal('hide');
        }
        else {
            valMesDosage.innerText = "";
            console.log("Enter dosage");
            return true; // Continue with form submission
        }
    }



    //FUNCTION: CALL ALL VALIDATION IN ONE FUNCTION (VALIDATE FORM)

    function validateForm() {
        valPName() & valDrug() & valDosage();
    }

    window.validateForm = validateForm;

    function validateFormConfirm() {

        if (valPName() & valDrug() & valDosage()) { //-- comment out because I changed text box to ddl
            //if (valPName()) {

            var returnTxtPName = document.getElementById('returnTxtPName').value;
            var returnTxtDName = document.getElementById('returnTxtDName').value;
            var returnTxtDosage = document.getElementById('returnTxtDosage').value;

            var apreturnTxtPName = document.getElementById('apreturnTxtPName');
            var apreturnTxtDName = document.getElementById('apreturnTxtDName');
            var apreturnTxtDosage = document.getElementById('apreturnTxtDosage');

            apreturnTxtPName.value = returnTxtPName;
            console.log(returnTxtPName);
            apreturnTxtDName.value = returnTxtDName;
            console.log(returnTxtDName);
            apreturnTxtDosage.value = returnTxtDosage;
            console.log(returnTxtDosage);
            hiddenTxtDrug.value = returnTxtDName;
            hiddenTxtDosage.value = returnTxtDosage;

            myModalPar.textContent = mm01;
            $('#myModal').modal('show');
            modalBtnCancel.addEventListener('click', FormCancel);
            modalBtnSave.addEventListener('click', FormSubmit);

            

        }
        else {
            //alert("incorrect")
            $('#myModal').modal('hide');
        }

        apreturnTxtPName.value = "";
        apreturnTxtDName.value = "";
        apreturnTxtDosage.value = "";
    }

    // Ensure validateFormConfirm() is globally accessible (optional if defined globally) //you can now call this function in another js script
    window.validateFormConfirm = validateFormConfirm;


    //--------------DROP DOWN LIST CHANGE VALUE THEN SET VALUE TO HIDDEN TEXTBOXES--------------//

    ddlDrugName.addEventListener("change", function () {
        let selectedDrugNameText = ddlDrugName.options[ddlDrugName.selectedIndex].textContent;
        console.log(selectedDrugNameText);
        hiddenTxtDrug.value = selectedDrugNameText;
        hiddenTxtDName.value = selectedDrugNameText;
    });

    ddlDrugDosage.addEventListener("change", function () {

        let selectedDrugDosageText = ddlDrugDosage.options[ddlDrugDosage.selectedIndex].textContent;
        console.log(selectedDrugDosageText);
        hiddenTxtDosage.value = selectedDrugDosageText;
        hiddenTxtDos.value = selectedDrugDosageText;
    });

    //--------------SIMULTANEOUSLY DISPLAY VALUE FROM txtPName TO HIDDEN hiddenTxtPName--------------//

    //$(document).ready(function () {
    //    $('#inputBox').on('input', function () {
    //        var inputText = $(this).val();
    //        $('#outputBox').val(inputText);
    //    });
    //});


    //$(document).ready(function () {
    //    $('#txtPName').keyup(function () {
    //        var typedText = $(this).val();
    //        console.log(typedText);
    //        $('#hiddenTxtPName').val(typedText);
    //    });
    //});

    // FUNCTION FOR TRY BUTTON TEST PURPOSES
    //function addDllItem() {
    ////    let ddlDrugName = document.getElementById('ddlDrugName');
    ////    var option = document.createElement("option");
    ////    option.text = "name";
    ////    valMesDosage.innerText = "'namename";
    //       console.log("you are here");
    ////    ddlDrugName.add(option);

    //        //console.log(ddlDrugNameIndex);
    //        //console.log(selectedDrugNameText);

    //}

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    //btnSubmit.addEventListener('click', validateForm);

    // FORM: APVHiddenTextboxesForm


    // FORM: addPatientForm

    // SAMPLE BUTTON CLICK WITH ONE FUNCTION:

    btnSubmit.addEventListener('click', validateFormConfirm);
    //btnTry.addEventListener('click', FormSubmitAPVHiddenTextboxes);
    //btnTryhidden.addEventListener('click', FormSubmitAPVHiddenTextboxes);

    //SAMPLE BUTTON CLICK WITH TWO FUNCTION:

    //btnSubmit.addEventListener('click', function () {
    // Call the first function
    //FormSubmitAPVHiddenTextboxes();

    // Call the second function after the first function completes
    //validateFormConfirm();
    //});

    //--------------CALL FUNCTION TO RUN SCRIPT AUTOMATICALLY W/O BUTTON CLICK--------------//
    //NOTE: BUTTON IS CLICKED FROM THE FIRST SCRIPT: UniqueDrug.js

    //validateFormConfirm();

    // If validateFormConfirm() is defined globally, you can use window.validateFormConfirm()
    //window.validateFormConfirm(); // This assumes validateFormConfirm() is a global function



    //--------------FORM SUBMIT AND PREVENT SUBMISSION--------------//

    // FORM SUBMISSION
    function FormSubmit() {
        document.getElementById('addPatientForm').submit();
    }

    //function FormSubmitAPVHiddenTextboxes() {
    //    document.getElementById('APVHiddenTextboxes').submit();
    //}

    // FORM PREVENT SUBMISSION
    function FormCancel() {
        document.getElementById('addPatientForm').addEventListener('submit', function (event) {
            if (!valPName() || !valDrug() || !valDosage()) { // if not validateform -- comment out because I changed text box to ddl
                //if (!valPName()) { // if not validateform
                event.preventDefault(); // prevent form submission if validation fails
            }

        });
    }

    //--------------FUNCTION FOR TESTING PURPOSES--------------//


    // TESTING HIGHLIGHT TEXT BOX FOR VALIDATION

    //function tryH() {
    //    let aptxtPName = document.getElementById('txtPName');
    //    let aptxtPNameval = document.getElementById('txtPName').value;
    //    if (aptxtPNameval == "1") {
    //        aptxtPName.classList.add('highlight-error');
    //    }
    //    else {
    //        aptxtPName.classList.remove('highlight-error');
    //    }
    //}

    //--------------MODAL--------------//

    // TESTING MODAL SHOW AND CHANGE MODAL CONTENT

    //function showModal() {
    //    apModalBody.innerHTML = mm01;
    //    $('#apModal').modal('show');
    //}

    //function tryModal() {
    //    let txtPName = document.getElementById('txtPName');
    //    let aptxtPNameval = document.getElementById('txtPName').value;

    //    if (aptxtPNameval == "m") {
    //        //apModalBody.innerHTML = mm01;
    //        apModalPar.textContent = mm01;
    //        $('#apModal').modal('show');
    //        //txtPName.value = "mm";
    //    }
    //    else {
    //        //apModalBody.innerHTML = mm01;
    //        //txtPName.value = "not mm";
    //        alert("mm")
    //    }
    //}

    // FORM PREVENT SUBMISSION

    //document.getElementById('addPatientForm').addEventListener('submit', function (event) {
    //    if (!valPName() || !valDrug() || !valDosage()) { // if not validateform
    //        event.preventDefault(); // prevent form submission if validation fails
    //    }

    //});

    //END DOM


});
