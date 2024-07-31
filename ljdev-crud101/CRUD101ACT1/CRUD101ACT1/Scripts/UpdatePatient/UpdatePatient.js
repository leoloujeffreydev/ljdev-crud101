//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    console.log("epv loaded")

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    //const highlightClass = 'highlight-error';
    let valMesPName = document.getElementById('valMesPName');
    let valMesDrug = document.getElementById('valMesDrug');
    let valMesDosage = document.getElementById('valMesDosage');

    //--------------GET ELEMENTS OF MODAL--------------//
    let myModalPar = document.getElementById('myModalPar'); // GET MODAL PARAGRAPH ID <P>
    let modalBtnCancel = document.getElementById('modalBtnCancel');  // GET MODAL CANCEL BUTTON
    let modalBtnSave = document.getElementById('modalBtnSave'); // GET MODAL CONFIRM BUTTON

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

    //--------------MODAL CONFIRMATION MESSAGES--------------//
    let mm01 = 'ARE YOU SURE YOU WANT TO SAVE RECORD?';


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

    //FUNCTION VALIDATE PATIENT NAME INPUT

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

    //FUNCTION: VALIDATE DRUG INPUT

    function valDrug() {
        let txtDrug = document.getElementById('txtDrug').value;
        let fieldDrug = document.getElementById('txtDrug');

        let noBlankInpRes = noBlankInp(txtDrug);

        if (!noBlankInpRes.isValid) {
            valMesDrug.innerText = vm08;
            fieldDrug.classList.add('highlight-error');
            return false;
        }

        let noSpecCharRes = noSpecChar(txtDrug);
        let noSpaceBegEndRes = noSpaceBegEnd(txtDrug);
        let noDoubleSpaceRes = noDoubleSpace(txtDrug);
        let fiftyMaxRes = fiftyMax(txtDrug);
        let noNumbersRes = noNumbers(txtDrug);


        if (!noSpecCharRes.isValid) {
            valMesDrug.innerText = vm07;
            fieldDrug.classList.add('highlight-error');
            return false; // Validation failed, do not submit the form
        }
        else if (!noSpaceBegEndRes.isValid) {
            valMesDrug.innerText = vm06;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesDrug.innerText = vm05;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else if (!fiftyMaxRes.isValid) {
            valMesDrug.innerText = vm09;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else if (!noNumbersRes.isValid) {
            valMesDrug.innerText = vm01;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else {
            valMesDrug.innerText = "";
            fieldDrug.classList.remove('highlight-error');
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: VALIDATE  DOSAGE INPUT

    function valDosage() {
        let txtDosage = document.getElementById('txtDosage').value;
        let fieldDosage = document.getElementById('txtDosage');

        let noBlankInpRes = noBlankInp(txtDosage);

        if (!noBlankInpRes.isValid) {
            valMesDosage.innerText = vm08;
            fieldDosage.classList.add('highlight-error');
            return false;
        }

        let noSpaceBegEndRes = noSpaceBegEnd(txtDosage);
        let noDoubleSpaceRes = noDoubleSpace(txtDosage);
        let noLettersRes = noLetters(txtDosage);
        let fourDecimalOnlyRes = fourDecimalOnly(txtDosage);

        if (!noSpaceBegEndRes.isValid) {
            valMesDosage.innerText = vm06;
            fieldDosage.classList.add('highlight-error');
            return false; // Validation failed, do not submit the form
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesDosage.innerText = vm05;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else if (!noLettersRes.isValid) {
            valMesDosage.innerText = vm02;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else if (!fourDecimalOnlyRes.isValid) {
            valMesDosage.innerText = vm03;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else {
            valMesDosage.innerText = "";
            fieldDosage.classList.remove('highlight-error');
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: CALL ALL VALIDATION IN ONE FUNCTION (VALIDATE FORM)

    function validateForm() {
        valPName() || valDrug() || valDosage();
    }

    function validateFormConfirm() {
        if (valPName() & valDrug() & valDosage()) {
            myModalPar.textContent = mm01;
            $('#myModal').modal('show');
            modalBtnCancel.addEventListener('click', FormCancel);
            modalBtnSave.addEventListener('click', FormSubmit);
        }
        else {
            //alert("incorrect")
            $('#myModal').modal('hide');
        }
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

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    //btnSubmit.addEventListener('click', validateForm);
    btnSubmit.addEventListener('click', validateFormConfirm);
    //btnTry.addEventListener('click', tryModal);

    //--------------FORM SUBMIT AND PREVENT SUBMISSION--------------//

    // FORM SUBMISSION
    function FormSubmit() {
        document.getElementById('editPatientForm').submit();
    }


    // FORM PREVENT SUBMISSION
    function FormCancel() {
        document.getElementById('editPatientForm').addEventListener('submit', function (event) {
            if (!valPName() || !valDrug() || !valDosage()) { // if not validateform
                event.preventDefault(); // prevent form submission if validation fails
            }

        });
    }

    // FORM PREVENT SUBMISSION

    //document.getElementById('addPatientForm').addEventListener('submit', function (event) {
    //    if (!valPName() || !valDrug() || !valDosage()) { // if not validateform
    //        event.preventDefault(); // prevent form submission if validation fails
    //    }

    //});

    //END DOM
});
