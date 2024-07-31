//--------------DOM--------------//
document.addEventListener('DOMContentLoaded', function () {

    //--------------GET THE ELEMENTS FROM THE HTML DOCUMENT--------------//
    // BUTTON
    var btnGoMenu = document.getElementById('btnGoMenu');
    var btnLoadTabCont = document.getElementById('btnLoadTabCont'); 

    // TEXTBOX
    var txtCondition = document.getElementById('txtCondition')

    // DROP DOWN LISTS
    var ddlGoToMenu = document.getElementById('ddlGoToMenu');
    var ddlSearchMenu = document.getElementById('ddlSearchMenu');


    //HIDDEN TEXT BOXES
    var hiddenTxtGoToMenu = document.getElementById('hiddenTxtGoToMenu');
    var hiddenTxtSearchMenu = document.getElementById('hiddenTxtSearchMenu');
    var txtPaTabId = document.getElementById('txtPaTabId');
    var txtDrTabId = document.getElementById('txtDrTabId');
    var txtMeTabId = document.getElementById('txtMeTabId');
    var txtFilByDtPaTabId = document.getElementById('txtFilByDtPaTabId'); 
    var txtPatientInfoDate1 = document.getElementById('txtPatientInfoDate1');
    var txtPatientInfoDate2 = document.getElementById('txtPatientInfoDate2');
    var txtPaInfoStartDt = document.getElementById('txtPaInfoStartDt');
    var txtPaInfoEndDt = document.getElementById('txtPaInfoEndDt');

    //TABS

    var tabs = document.getElementById('tabs'); //get the whole element tabs
    var tabPaView = document.getElementById('tabPaView'); // get the tab child element with id tabPaView
    var patientInfoTabLink = document.querySelector('a[href="#tabPaView"]'); //get the tab link element that corresponds with tab child element, tabPaView
    var drugInfoTabLink = document.querySelector('a[href="#tabDrView"]'); //get the tab link element that corresponds with tab child element, tabDrView
    var menuInfoTabLink = document.querySelector('a[href="#tabMeView"]'); //get the tab link element that corresponds with tab child element, tabMeView


    //--------------VALIDATION MESSAGES--------------//


    //--------------FUNCTIONS--------------//


    //--------------FUNCTION FOR TESTING PURPOSES--------------//

    //--------------MODAL--------------//

    //--------------DROP DOWN LIST CHANGE VALUE THEN SET VALUE TO HIDDEN TEXTBOXES--------------//

    ddlGoToMenu.addEventListener("change", function () {

        let selectedViewNameText = ddlGoToMenu.options[ddlGoToMenu.selectedIndex].textContent;
        console.log(selectedViewNameText);
        hiddenTxtGoToMenu.value = selectedViewNameText;
        //ddlSearchMenu.options[ddlSearchMenu.selectedIndex].textContent = "";
    });

    ddlSearchMenu.addEventListener("change", function () {

        let selectedViewNameText = ddlSearchMenu.options[ddlSearchMenu.selectedIndex].textContent;
        console.log(selectedViewNameText);
        hiddenTxtSearchMenu.value = selectedViewNameText;
        //ddlGoToMenu.options[ddlGoToMenu.selectedIndex].textContent = "";
    });

    //--------------ADDING AN EVENT LISTENER TO THE BUTTON--------------//

    btnGoMenu.addEventListener("click", function () {
        var value = hiddenTxtGoToMenu.value;
        window.location.href = "/MenuController/MenuView/" + value;
    });

    btnSearchMenu.addEventListener("click", function () {
        var value = hiddenTxtSearchMenu.value;
        window.location.href = "/MenuController/MenuView/" + value;
    });


    btnSearchPaInfo.addEventListener("click", function () {
        txtPaInfoStartDt.value = txtPatientInfoDate1.value;
        txtPaInfoEndDt.value = txtPatientInfoDate2.value;
        txtFilByDtPaTabId.value = "FilByDtPaTabActive";
        txtMeTabId.value = "";
        txtPaTabId.value = "";
        txtDrTabId.value = "";
        document.getElementById('PaInfoTabFilterByDtTabForm').submit();
    });
    //--------------LOAD ALL TABS CONTENTS--------------//

    function loadAllTabsContents() {
    document.getElementById('PatientInfoTabForm').submit();
    document.getElementById('DrugInfoTabForm').submit();
    document.getElementById('MenuInfoTabForm').submit();        
    }

    function loadPaTabContents() {
        txtPaTabId.value = "PaTabActive";
        txtFilByDtPaTabId.value = "";
        txtDrTabId.value = "";
        txtMeTabId.value = "";
        document.getElementById('PatientInfoTabForm').submit();
    }
    function loadDrTabContents() {
        txtDrTabId.value = "DrTabActive";
        txtPaTabId.value = "";
        txtFilByDtPaTabId.value = "";
        txtMeTabId.value = "";
        document.getElementById('DrugInfoTabForm').submit();
    }
    function loadMeTabContents() {
        txtMeTabId.value = "MeTabActive";
        txtPaTabId.value = "";
        txtFilByDtPaTabId = "";
        txtDrTabId.value = "";
        document.getElementById('MenuInfoTabForm').submit();
    }

    //--------------TAB LINK CLICK EVENTLISTENER--------------//

    patientInfoTabLink.addEventListener('click', function () {
        loadPaTabContents();        
    });

    drugInfoTabLink.addEventListener('click', function () {
        loadDrTabContents();
    });

    menuInfoTabLink.addEventListener('click', function () {
        loadMeTabContents();
    });


    //--------------LIMIT ROW DISPLAY --------------//

    //Hide rows beyond the limit

 

    //--------------PREVENT FORM SUBMISSION--------------//


    //END DOM
});
