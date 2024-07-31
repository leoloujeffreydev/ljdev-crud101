using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using C101_Entities;
using C101_DAL.Services;
using System.Security.Claims;
using System.Runtime.InteropServices;
using System.Reflection;
using System.Data.SqlClient;
using System.Data;
using System.Drawing;
using System.IO;
using C101_BLL;

namespace CRUD101ACT1.Controllers
{
    public class PatientInformationController : Controller
    {
        //1. *************RETRIEVE ALL PATIENT INFORMATION ******************
        // GET: PATIENTINFORMATION/PATIENINFORMATIONVIEW
        public ActionResult PatientInformationView()
        {
            PatientInformationDAL dbhandle = new PatientInformationDAL();
            ModelState.Clear();
            return View(dbhandle.GetPatientInfo());
        }


        //2. *************ADD NEW PATIENT ******************
        //GET: PATIENTINFORMATION/ADDPATIENTVIEW
        public ActionResult AddPatientView()
        {
            PatientInformationDAL dbhandle = new PatientInformationDAL();
            var model = new PatientAndDrugsViewModel //The DAL is sending a LIST(type) and form (ddl) is expecting a MODEL, inorder to fix the error, convert list got from DAL to model
            {
                DRUGVM = dbhandle.GetDrugInfo(),
                DISTINCTDOSAGEVM = dbhandle.GetDistinctDosage()
            };
            return View(model);
        }

        // POST: PATIENTINFORMATION/ADDPATIENTVIEW
        [HttpPost]
        public ActionResult AddPatientView(PatientAndDrugsViewModel smodel, string apretpName, string apretdName, string apretDosage)
        {
            // Load dropdown list data
            PatientInformationDAL dbhandle = new PatientInformationDAL();
            var model = new PatientAndDrugsViewModel
            {
                DRUGVM = dbhandle.GetDrugInfo(),
                DISTINCTDOSAGEVM = dbhandle.GetDistinctDosage()
            };


            ViewBag.PName = apretpName;
            ViewBag.DName = apretdName;
            ViewBag.Dosage = apretDosage; 

            try
            {
                if (ModelState.IsValid)
                {
                    PatientInformationDAL sdb = new PatientInformationDAL();

                    if (sdb.AddPatient(smodel))
                    {
                        ViewBag.Message = "Patient Details Added Successfully";
                        ModelState.Clear();
                    }
                }
                return View(model);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return View(model);

            }
        }

        //[HttpPost]
        //public ActionResult APVHiddenTextboxes() //THIS ACTION IS FOR SEARCHING MENU : POST (2ns ACTION CONTROLLER FOR MenuView)
        //{
        //    return View();
        //}



        // 3. ************* EDIT STUDENT DETAILS ******************
        // GET: PATIENTINFORMATION/EDITPATIENTVIEW/1001
        public ActionResult EditPatientView(int id)
        {
            PatientInformationDAL sdb = new PatientInformationDAL();
            return View(sdb.GetPatientInfo().Find(smodel => smodel.PATIENTID == id));
        }

        // POST: PatientInformation/EditPatientView/PATIENTID
        [HttpPost]
        public ActionResult EditPatientView(int id, PatientInformationEntity smodel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PatientInformationDAL sdb = new PatientInformationDAL();
                    if (sdb.UpdatePatient(smodel))
                    {
                        ViewBag.Message = "Patient Details Updated Successfully";
                        ModelState.Clear();
                    }
                }
                //return RedirectToAction("EditPatientView");
                PatientInformationDAL sbd = new PatientInformationDAL(); // ADD THIS CODE UPDATE, TO SHOW ALERT AND RETURN PATIENTINFORMATION VIEW UNEMPTY
                return View("PatientInformationView", sbd.GetPatientInfo()); // ADD THIS CODE UPDATE, TO SHOW ALERT AND RETURN PATIENTINFORMATION VIEW UNEMPTY
                //return View(); this is the previous code
            }
            catch
            {
                return View();
            }
        }

        // 4. ************* DELETE PATIENT DETAILS ******************
        // GET: /PatientInformation/DeletePatient/PATIENTID
        public ActionResult DeletePatientView(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PatientInformationDAL sdb = new PatientInformationDAL();
                    if (sdb.DeletePatient(id))
                    {
                        ViewBag.Message = "Patient Deleted Successfully";
                        ModelState.Clear();
                    }
                }
                PatientInformationDAL sbd = new PatientInformationDAL(); // ADD THIS CODE UPDATE, TO SHOW ALERT AND RETURN PATIENTINFORMATION VIEW UNEMPTY
                return View("PatientInformationView", sbd.GetPatientInfo()); // ADD THIS CODE UPDATE, TO SHOW ALERT AND RETURN PATIENTINFORMATION VIEW UNEMPTY
                //return RedirectToAction("PatientInformationView"); this is the previous code
            }
            catch
            {
                return View();
            }
        }

        public ActionResult DrugView()
        {
            PatientInformationDAL dbhandle = new PatientInformationDAL();
            ModelState.Clear();
            return View(dbhandle.GetDrugInfo());
        }


        // **************** ADD NEW DRUG *********************
        // GET: PatientInformation/AddDrugView
        public ActionResult AddDrugView()
        {
            return View();
        }

        // POST: PatientInformation/AddDrugView
        [HttpPost]
        public ActionResult AddDrugView(DrugEntity smodel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PatientInformationDAL sdb = new PatientInformationDAL();
                    if (sdb.AddDrug(smodel))
                    {
                        ViewBag.Message = "Drug Details Added Successfully";
                        ModelState.Clear();

                        //return RedirectToAction("DrugView");
                    }
                }
                return View();
            }
            catch
            {
                return View();
            }
        }

        [HttpPost]
        public ActionResult APVHiddenTextboxes(int? status, string pName, string dName, string dtMod, string dosage)
        {
            PatientInformationBLL patientInfoBll = new PatientInformationBLL();
            var result = patientInfoBll.GetStatusForUniqueDrug(status, pName, dName, dtMod);

            if (result == 1)
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                var model = new PatientAndDrugsViewModel() //The DAL is sending a LIST(type) and form (ddl) is expecting a MODEL, inorder to fix the error, convert list got from DAL to model
                {
                    DRUGVM = dbhandle.GetDrugInfo(),
                    DISTINCTDOSAGEVM = dbhandle.GetDistinctDosage(),
                    PATIENTINFOVM = dbhandle.GetUniqueDrug(pName, dName, dtMod)
                };
                //ModelState.Clear();
                ViewBag.Result = result.ToString();
                //ViewBag.JsonData = Newtonsoft.Json.JsonConvert.SerializeObject(result); // If you have more complex data structures or need to pass structured data, you can serialize data from your controller to JSON format and then use it in JavaScript.

                // Set properties directly in the model or ViewBag // returns input after formload / refresh
                //ViewBag.PName = pName;
                //ViewBag.DName = dName;

                return View("AddPatientView", model);
                //string strresult = result.ToString;
                //return Content(ViewBag.Result);
            }
            else
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                var model = new PatientAndDrugsViewModel() //The DAL is sending a LIST(type) and form (ddl) is expecting a MODEL, inorder to fix the error, convert list got from DAL to model
                {
                    DRUGVM = dbhandle.GetDrugInfo(),
                    DISTINCTDOSAGEVM = dbhandle.GetDistinctDosage(),
                    PATIENTINFOVM = dbhandle.GetUniqueDrug(pName, dName, dtMod)
                };
                //ModelState.Clear();
                ViewBag.Result = result.ToString(); // value set to textbox to check if record is 1 or 0

                // Set properties directly in the model or ViewBag // returns input after formload / refresh
                ViewBag.PName = pName;
                ViewBag.DName = dName;
                ViewBag.Dosage = dosage;
                ViewBag.Message = "Drug validated, submit record.";

                return View("AddPatientView", model);
                //return View("AddPatientView", model);
                //return Json(model);
                //return Content(ViewBag.Result);
                //return RedirectToAction("AddPatientView");
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

        // Controller end
    }
}