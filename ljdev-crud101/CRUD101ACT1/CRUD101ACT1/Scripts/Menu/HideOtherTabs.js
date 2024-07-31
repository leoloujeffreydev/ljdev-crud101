//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//

    //HIDDEN TEXT BOXES
    var txtPaTabId = document.getElementById('txtPaTabId');
    var txtDrTabId = document.getElementById('txtDrTabId');
    var txtMeTabId = document.getElementById('txtMeTabId');
    var ddlNumOfRec = document.getElementById('ddlNumOfRec');


    if (txtPaTabId.value == "PaTabActive") {
        console.log("PaTabActive");
        $('#tabPaView').show();
        $('#tabFilByDtPaView').hide();
        $('#tabDrView').hide();
        $('#tabMeView').hide();
    }
    else if (txtDrTabId.value == "DrTabActive") {
        console.log("DrTabActive");
        $('#tabPaView').hide();
        $('#tabFilByDtPaView').hide();
        $('#tabDrView').show();
        $('#tabMeView').hide();
    }
    else if (txtMeTabId.value == "MeTabActive") {
        console.log("MeTabActive");
        $('#tabPaView').hide();
        $('#tabFilByDtPaView').hide();
        $('#tabDrView').hide();
        $('#tabMeView').show();
    }
    else if (txtFilByDtPaTabId.value == "FilByDtPaTabActive") {
        console.log("FilByDtPaTabActive");
        $('#tabPaView').hide();
        $('#tabFilByDtPaView').show();
        $('#tabDrView').hide();
        $('#tabMeView').hide();
    }
    else {
        console.log("noActiveTabs");
        $('#tabPaView').show();
        $('#tabFilByDtPaView').hide();
        $('#tabDrView').hide();
        $('#tabMeView').hide();
    }

    var PaTableBody = document.getElementById('PaTableBody');
    var DrTableBody = document.getElementById('DrTableBody');
    var MeTableBody = document.getElementById('MeTableBody');

    // THIS GETS THE VALUE OF THE STATIC DROPDOWN LIST
    ddlNumOfRec.addEventListener("change", function () {
        var selectedNumOfRec = ddlNumOfRec.options[ddlNumOfRec.selectedIndex].value;
        console.log(selectedNumOfRec);


        // CHECK WHICH TAB IS ACTIVE THEN SHOW OR HIDE ROWS
        if (txtPaTabId.value == "PaTabActive") {
            const tableBody = document.getElementById('PaTableBody').getElementsByTagName('tbody')[0];
            const rows = tableBody.getElementsByTagName('tr');
            const rowLimit = selectedNumOfRec;


            // Show rows up to the row limit
            for (let i = 0; i < Math.min(rows.length, rowLimit); i++) {
                rows[i].style.display = ''; // Show the row
            }

            //Hide rows beyond the limit
            for (let i = rowLimit; i < rows.length; i++) {
                rows[i].style.display = 'none';
            }
        }
        else if (txtFilByDtPaTabId.value == "FilByDtPaTabActive") {
            const tableBody = document.getElementById('FilByDtPaTableBody').getElementsByTagName('tbody')[0];
            const rows = tableBody.getElementsByTagName('tr');
            const rowLimit = selectedNumOfRec;

            // Show rows up to the row limit
            for (let i = 0; i < Math.min(rows.length, rowLimit); i++) {
                rows[i].style.display = ''; // Show the row
            }

            // Hide rows beyond the limit
            for (let i = rowLimit; i < rows.length; i++) {
                rows[i].style.display = 'none';
            }
        }
        else if (txtDrTabId.value == "DrTabActive") {
            const tableBody = document.getElementById('DrTableBody').getElementsByTagName('tbody')[0];
            const rows = tableBody.getElementsByTagName('tr');
            const rowLimit = selectedNumOfRec;

            // Show rows up to the row limit
            for (let i = 0; i < Math.min(rows.length, rowLimit); i++) {
                rows[i].style.display = ''; // Show the row
            }

            // Hide rows beyond the limit
            for (let i = rowLimit; i < rows.length; i++) {
                rows[i].style.display = 'none';
            }
        }
        else if (txtMeTabId.value == "MeTabActive") {
            const tableBody = document.getElementById('MeTableBody').getElementsByTagName('tbody')[0];
            const rows = tableBody.getElementsByTagName('tr');
            const rowLimit = selectedNumOfRec;

            // Show rows up to the row limit
            for (let i = 0; i < Math.min(rows.length, rowLimit); i++) {
                rows[i].style.display = ''; // Show the row
            }
            // Hide rows beyond the limit
            for (let i = rowLimit; i < rows.length; i++) {
                rows[i].style.display = 'none';
            }
        }


    });


    //const tableBody = document.getElementById('PaTableBody').getElementsByTagName('tbody')[0];
    //const rows = tableBody.getElementsByTagName('tr');
    //const rowLimit = 5;

    //// Hide rows beyond the limit
    //for (let i = rowLimit; i < rows.length; i++) {
    //    rows[i].style.display = 'none';
    //}

});