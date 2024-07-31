using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using System.Web.UI.WebControls;
using C101_BLL;
using C101_DAL.Services;
using C101_Entities;
using Microsoft.Ajax.Utilities;

namespace CRUD101ACT1.Controllers
{
    public class MenuController : Controller
    {
        public ActionResult MenuView(int? status, string patabid) //THIS ACTION CONTROLLER: LOADS DATA TO DROPDOWN LIST AND LIST OF MENU
        {
            // Instantiate BLL class
            MenuBLL menuBLL = new MenuBLL();

            var result = menuBLL.GetAllMenuInfoStatus(status);
            if (result == 1)
            {
                var model = new MenuEntity //The DAL is sending a LIST(type) and form (ddl) is expecting a MODEL, inorder to fix the error, convert list got from BLL to model
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo() // this is for loading data to LIST
                };
                ModelState.Clear();
                ViewBag.Message = result.ToString();
                return View(model);
            }
            else
            {
                ViewBag.Message = "Failed to retrieve menu information.";
                return View();
            }
        }

        [HttpPost]
        public ActionResult MenuView(string conditionGoTo, string condition2, string patabid) //THIS ACTION IS FOR CHANGING MENU : POST
        {
            ViewBag.PaTabId = patabid;
            //FOR CHANGE MENU
            MenuBLL menuBLL = new MenuBLL();
            var (viewName, controllerName) = menuBLL.GoToMenuBasedOnCondition(conditionGoTo, condition2); //calling multiple values from method in BLL using TUPLE and assign to variables
            return RedirectToAction(viewName, controllerName); // method values from BLL are assigned in this variables ("PatientInformationView", "PatientInformation")

            //FOR RETUTNING MESSAGE
            //string message = menuBLL.GetMessageBasedOnCondition(condition); // this is for showing message in view only
            //return View((object)message); // this is for showing message in view only
        }

        [HttpPost] 
        public ActionResult MenuViewSearch(string menuid) //THIS ACTION IS FOR SEARCHING MENU : POST (2ns ACTION CONTROLLER FOR MenuView)
        {
   
            MenuBLL menuBLL = new MenuBLL();
            var model = new MenuEntity //The DAL is sending a LIST(type) and form (ddl) is expecting a MODEL, inorder to fix the error, convert list got from BLL to model
            {
                MENUVM = menuBLL.GetAllMenuInfo(), // data is loaded first to ddl (cannot be empty)
                MENUSEARCH = menuBLL.GetAllSearchedMenu(menuid) // retrieved data from SP is loaded and will be displayed
            };
            ModelState.Clear();
            return View("MenuView",model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
        }

        public ActionResult PatientInformationViewTab()
        {
            try
            {
                MenuBLL menuBLL = new MenuBLL();
                var model = new MenuEntity
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo(), // this is for loading data to LIST
                };
                ModelState.Clear();
                return View("MenuView", model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View();
            }

        }

        [HttpPost]
        public ActionResult PatientInformationViewTab(string patabid)
        {
            ViewBag.PaTabId = patabid;
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                MenuBLL menuBLL = new MenuBLL();
                var model = new MenuEntity
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo(), // this is for loading data to LIST
                    PATIENTINFOTAB = dbhandle.GetPatientInfo(),// get Patieninfo from db to display as list after tab link is clicked
                };
                ModelState.Clear();
                return View("MenuView", model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View();
            }

        }

        [HttpPost]
        public ActionResult DrugInfoTab(string drtabid)
        {
            ViewBag.DrTabId = drtabid;
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                MenuBLL menuBLL = new MenuBLL();
                var model = new MenuEntity
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo(), // this is for loading data to LIST
                    DRUGINFOTAB = dbhandle.GetDrugInfo(), // get Druginfo from db to display as list after tab link is clicked
                };
                ModelState.Clear();
                return View("MenuView", model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View();
            }

        }

        [HttpPost]
        public ActionResult MenuInfoTab(string metabid)
        {
            ViewBag.MeTabId = metabid;
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                MenuBLL menuBLL = new MenuBLL();
                var model = new MenuEntity
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo(), // this is for loading data to LIST
                    MENUINFOTAB = menuBLL.GetAllMenuInfo() // get Menuinfo from db to display as list after tab link is clicked 
                };
                ModelState.Clear();
                return View("MenuView", model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View();
            }

        }

        [HttpPost]
        public ActionResult PaInfoTabFilterByDt(string painfostartdt, string painfoenddt, string filbydtpatabid)
        {
            ViewBag.FilByDtPaTabId = filbydtpatabid;
            try
            {
                MenuDAL menuDAL = new MenuDAL();
                MenuBLL menuBLL = new MenuBLL();
                var model = new MenuEntity
                {
                    MENUVM = menuBLL.GetAllMenuInfo(), // this is for loading data to DDL
                    MENUSEARCH = menuBLL.GetAllMenuInfo(), // this is for loading data to LIST
                    FILBYDTPATIENTINFOTAB = menuDAL.FilterPatientInfoByDate(painfostartdt, painfoenddt)// get Patieninfo filtered by date from db to display as list after tab link is clicked
                };
                ModelState.Clear();
                return View("MenuView", model); //since we are in the 2nd action control, this returns the main view ("Menu View) plus the retrieved data
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View();
            }
        }

            private void LogException(Exception ex)
        {
            // Here you can implement your logging mechanism, such as writing to a log file, logging to a database, or using a logging framework
            // For example, you can log to a text file:
            string logFilePath = "C:\\JEP\\MVC TUTORIAL\\MACHINE PROBLEMS\\CRUD101ACT1\\Logs\\ErrorLog.txt"; // Specify your log file path
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.WriteLine("Exception occurred at: " + DateTime.Now);
                writer.WriteLine("Exception message: " + ex.Message);
                writer.WriteLine("Stack trace: " + ex.StackTrace);
                writer.WriteLine("------------------------------------");
            }
        }

    }
}