using C101_DAL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using C101_Entities;
using System.IO;
using System.Reflection;

namespace CRUD101ACT1.Controllers
{
    public class PrintController : Controller
    {
        public ActionResult PrintView()
        {
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                ModelState.Clear();
                return View(dbhandle.GetPatientInfo());
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







        //Controller END
    }
}