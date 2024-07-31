//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    //const highlightClass = 'highlight-error';

    //LABEL VALIDATION MESSAGES
    var valMesDrugName = document.getElementById('valMesDrugName');
    var valMesExpDate = document.getElementById('valMesExpDate');
    var valMesDrugDosage = document.getElementById('valMesDrugDosage');

    //--------------GET ELEMENTS OF MODAL--------------//
    var myModalPar = document.getElementById('myModalPar'); // GET MODAL PARAGRAPH ID <P>
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

    //FUNCTION VALIDATE PATIENT NAME INPUT (TEXTBOX)

    function valDrugName() {
        let txtDrugName = document.getElementById('txtDrugName').value;
        let fieldPName = document.getElementById('txtDrugName');

        let noBlankInpRes = noBlankInp(txtDrugName);

        if (!noBlankInpRes.isValid) {
            valMesDrugName.innerText = vm08; // Validation message
            fieldPName.classList.add('highlight-error'); // Invalid field will be highlighted
            return false; // Validation failed, do not submit the form
        }

        let noSpecCharRes = noSpecChar(txtDrugName);
        let noSpaceBegEndRes = noSpaceBegEnd(txtDrugName);
        let noDoubleSpaceRes = noDoubleSpace(txtDrugName);
        let fiftyMaxRes = fiftyMax(txtDrugName);
        let noNumbersRes = noNumbers(txtDrugName);

        if (!noSpecCharRes.isValid) {
            valMesDrugName.innerText = vm07;
            fieldPName.classList.add('highlight-error');
            return false; // Validation failed, do not submit the form
        }
        else if (!noSpaceBegEndRes.isValid) {
            valMesDrugName.innerText = vm06;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesDrugName.innerText = vm05;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!fiftyMaxRes.isValid) {
            valMesDrugName.innerText = vm09;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else if (!noNumbersRes.isValid) {
            valMesDrugName.innerText = vm01;
            fieldPName.classList.add('highlight-error');
            return false;
        }
        else {
            valMesDrugName.innerText = "";
            fieldPName.classList.remove('highlight-error'); //remove highlight if valid field
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: VALIDATE DRUG INPUT (TEXTBOX)

    function valDrugExpDate() {
        let txtExpDate = document.getElementById('txtExpDate').value;
        let fieldDrug = document.getElementById('txtExpDate');

        let noBlankInpRes = noBlankInp(txtExpDate);

        if (!noBlankInpRes.isValid) {
            valMesExpDate.innerText = vm08;
            fieldDrug.classList.add('highlight-error');
            return false;
        }

        //let noSpecCharRes = noSpecChar(txtExpDate);
        let noSpaceBegEndRes = noSpaceBegEnd(txtExpDate);
        let noDoubleSpaceRes = noDoubleSpace(txtExpDate);
        let fiftyMaxRes = fiftyMax(txtExpDate);
        //let noNumbersRes = noNumbers(txtExpDate);


        //if (!noSpecCharRes.isValid) {
        //    valMesExpDate.innerText = vm07;
        //    fieldDrug.classList.add('highlight-error');
        //    return false; // Validation failed, do not submit the form
        //}
        if (!noSpaceBegEndRes.isValid) {
            valMesExpDate.innerText = vm06;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesExpDate.innerText = vm05;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        else if (!fiftyMaxRes.isValid) {
            valMesExpDate.innerText = vm09;
            fieldDrug.classList.add('highlight-error');
            return false;
        }
        //else if (!noNumbersRes.isValid) {
        //    valMesExpDate.innerText = vm01;
        //    fieldDrug.classList.add('highlight-error');
        //    return false;
        //}
        else {
            valMesExpDate.innerText = "";
            fieldDrug.classList.remove('highlight-error');
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: VALIDATE  DOSAGE INPUT (TEXTBOX)

    function valDrugDosage() {
        let txtDrugDosage = document.getElementById('txtDrugDosage').value;
        let fieldDosage = document.getElementById('txtDrugDosage');

        let noBlankInpRes = noBlankInp(txtDrugDosage);

        if (!noBlankInpRes.isValid) {
            valMesDrugDosage.innerText = vm08;
            fieldDosage.classList.add('highlight-error');
            return false;
        }

        let noSpaceBegEndRes = noSpaceBegEnd(txtDrugDosage);
        let noDoubleSpaceRes = noDoubleSpace(txtDrugDosage);
        let noLettersRes = noLetters(txtDrugDosage);
        let fourDecimalOnlyRes = fourDecimalOnly(txtDrugDosage);

        if (!noSpaceBegEndRes.isValid) {
            valMesDrugDosage.innerText = vm06;
            fieldDosage.classList.add('highlight-error');
            return false; // Validation failed, do not submit the form
        }
        else if (!noDoubleSpaceRes.isValid) {
            valMesDrugDosage.innerText = vm05;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else if (!noLettersRes.isValid) {
            valMesDrugDosage.innerText = vm02;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else if (!fourDecimalOnlyRes.isValid) {
            valMesDrugDosage.innerText = vm03;
            fieldDosage.classList.add('highlight-error');
            return false;
        }
        else {
            valMesDrugDosage.innerText = "";
            fieldDosage.classList.remove('highlight-error');
            return true; // Validation passed, allow form submission
        }
    }

    //FUNCTION: CALL ALL VALIDATION IN ONE FUNCTION (VALIDATE FORM)

    function validateForm() {
        valDrugName() || valDrugExpDate() || valDrugDosage();
    }

    function validateFormConfirm() {
        if (valDrugName() & valDrugExpDate() & valDrugDosage()) { //-- comment out because I changed text box to ddl
            //if (valDrugName()) {
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

    // FUNCTION FOR TRY BUTTON TEST PURPOSES
    //function addDllItem() {
    ////    let ddlDrugName = document.getElementById('ddlDrugName');
    ////    var option = document.createElement("option");
    ////    option.text = "name";
    ////    valMesDrugDosage.innerText = "'namename";
    //       console.log("you are here");
    ////    ddlDrugName.add(option);

    //        //console.log(ddlDrugNameIndex);
    //        //console.log(selectedDrugNameText);  

    //}

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    //btnSubmit.addEventListener('click', validateForm);
    btnSubmit.addEventListener('click', validateFormConfirm);
    //btnTry.addEventListener('click', addDllItem);

    //--------------FORM SUBMIT AND PREVENT SUBMISSION--------------//

    // FORM SUBMISSION
    function FormSubmit() {
        document.getElementById('addDrugForm').submit();
    }


    // FORM PREVENT SUBMISSION
    function FormCancel() {
        document.getElementById('addDrugForm').addEventListener('submit', function (event) {
            if (!valDrugName() || !valDrugExpDate() || !valDrugDosage()) { // if not validateform -- comment out because I changed text box to ddl
                event.preventDefault(); // prevent form submission if validation fails
            }
        });
    }

    //END DOM
});
