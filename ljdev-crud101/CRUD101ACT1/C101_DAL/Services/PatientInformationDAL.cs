using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using C101_Entities;
using System.IO;
using System.Security.Cryptography.X509Certificates;

namespace C101_DAL.Services
{
    public class PatientInformationDAL
    {
        private SqlConnection con;
        private void Connection()
        {
            //string constring = ConfigurationManager.ConnectionStrings["crudcs"].ToString();
            string constring = ConfigurationManager.ConnectionStrings["crudcs"].ConnectionString;
            con = new SqlConnection(constring);
            //con = new SqlConnection("Data Source=MSI\\SQLEXPRESS;Initial Catalog=HospitalDB;Persist Security Info=False;User ID=jeffDB;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False");
        }

        // ********** VIEW STUDENT DETAILS ********************
        public List<PatientInformationEntity> GetPatientInfo()
        {
            Connection();
            List<PatientInformationEntity> PatientInfoList = new List<PatientInformationEntity>();

            SqlCommand cmd = new SqlCommand("SPGetPatientInfo", con);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                PatientInfoList.Add(
                    new PatientInformationEntity
                    {
                        PATIENTID = Convert.ToInt32(dr["PATIENTID"]),
                        PATIENTNAME = Convert.ToString(dr["PATIENTNAME"]),
                        DRUG = Convert.ToString(dr["DRUG"]),
                        DOSAGE = Convert.ToDecimal(dr["DOSAGE"]),
                        DATEMODIFIED = Convert.ToDateTime(dr["DATEMODIFIED"])
                    });
            }
            return PatientInfoList;
        }

        // **************** ADD NEW STUDENT *********************
        public bool AddPatient(PatientAndDrugsViewModel smodel)
        {
            Connection();
            SqlCommand cmd = new SqlCommand("SPAddPatient", con);
            cmd.CommandType = CommandType.StoredProcedure;

            string drugName = smodel.SelectedDrugName;

            string selectedDrugDosageString = smodel.SelectedDrugDosage;
            decimal drugDosage;
            decimal.TryParse(selectedDrugDosageString, out drugDosage);

            //decimal drugDosage = smodel.SelectedDrugDosage.To;

            //cmd.Parameters.AddWithValue("@PATIENTID", smodel.PATIENTID); -- auto id increment in database
            cmd.Parameters.AddWithValue("@PATIENTNAME", smodel.PATIENTINFORMATIONVM.PATIENTNAME);
            cmd.Parameters.AddWithValue("@DRUG", smodel.PATIENTINFORMATIONVM.DRUG);
            cmd.Parameters.AddWithValue("@DOSAGE", smodel.PATIENTINFORMATIONVM.DOSAGE);
            //cmd.Parameters.AddWithValue("@DATEMODIFIED", smodel.DATEMODIFIED); -- auto date in database

            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();

            if (i >= 1)
                return true;
            else
                return false;
        }

        // ***************** UPDATE STUDENT DETAILS *********************
        public bool UpdatePatient(PatientInformationEntity smodel)
        {
            Connection();
            SqlCommand cmd = new SqlCommand("SPUpdatePatientInfo", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@PATIENTID", smodel.PATIENTID);
            cmd.Parameters.AddWithValue("@PATIENTNAME", smodel.PATIENTNAME);
            cmd.Parameters.AddWithValue("@DRUG", smodel.DRUG);
            cmd.Parameters.AddWithValue("@DOSAGE", smodel.DOSAGE);
            //cmd.Parameters.AddWithValue("@DATEMODIFIED", smodel.DATEMODIFIED);

            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();

            if (i >= 1)
                return true;
            else
                return false;
        }

        // ********************** DELETE STUDENT DETAILS *******************
        public bool DeletePatient(int id)
        {
            Connection();
            SqlCommand cmd = new SqlCommand("[SPDeletePatient]", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@PATIENTID", id);

            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();

            if (i >= 1)
                return true;
            else
                return false;
        }

        // ********** VIEW DRUG DETAILS ********************
        public List<DrugEntity> GetDrugInfo()
        {
            Connection();
            List<DrugEntity> DrugInfoList = new List<DrugEntity>();

            SqlCommand cmd = new SqlCommand("SPGetDrugInfo", con);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
               DrugInfoList.Add(
                    new DrugEntity
                    {
                        DRUGID = Convert.ToInt32(dr["DRUGID"]),
                        DRUGNAME = Convert.ToString(dr["DRUGNAME"]),
                        DRUGSTARTDATE = Convert.ToDateTime(dr["DRUGSTARTDATE"]),
                        EXPIRATIONDATE = Convert.ToDateTime(dr["EXPIRATIONDATE"]),
                        DOSAGE = Convert.ToDecimal(dr["DOSAGE"])
                    });
            }
            return DrugInfoList;
        }

        // **************** DISPLAY DISTINCT DOSAGE *********************
        public List<DrugEntity> GetDistinctDosage()
        {
            Connection();
            List<DrugEntity> DrugDosageList = new List<DrugEntity>();

            SqlCommand cmd = new SqlCommand("SPGetDrugInfoDistinctDosage", con);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                DrugDosageList.Add(
                     new DrugEntity
                     {
                         //DRUGID = Convert.ToInt32(dr["DRUGID"]),
                         //DRUGNAME = Convert.ToString(dr["DRUGNAME"]),
                         //DRUGSTARTDATE = Convert.ToDateTime(dr["DRUGSTARTDATE"]),
                         //EXPIRATIONDATE = Convert.ToDateTime(dr["EXPIRATIONDATE"]),
                         DOSAGE = Convert.ToDecimal(dr["DOSAGE"])
                     });
            }
            return DrugDosageList;
        }

        // **************** ADD DRUG *********************
        public bool AddDrug(DrugEntity smodel)
        {
            try
            {
                Connection();
                SqlCommand cmd = new SqlCommand("SPAddDrug", con);
                cmd.CommandType = CommandType.StoredProcedure;

                //cmd.Parameters.AddWithValue("@PATIENTID", smodel.PATIENTID); -- auto id increment in database
                cmd.Parameters.AddWithValue("@DRUGNAME", smodel.DRUGNAME);
                cmd.Parameters.AddWithValue("@EXPIRATIONDATE", smodel.EXPIRATIONDATE);
                cmd.Parameters.AddWithValue("@DOSAGE", smodel.DOSAGE);
                //cmd.Parameters.AddWithValue("@DATEMODIFIED", smodel.DATEMODIFIED); -- auto date in database

                con.Open();
                int i = cmd.ExecuteNonQuery();
                con.Close();

                if (i >= 1)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                // Log the exception for later inspection
                LogException(ex);

                // You can re-throw the exception for higher-level error handling if needed
                throw; // Alternatively, you can return false or handle the exception without re-throwing it
            }
        }

        //CHECK IF DRUG ADDED IS ONE DRUG PER DAY PER PERSON : PROMPT: "DRUG IS ALREADY GIVEN TO THIS PERSON TODAY"
        // PARAMETER / CONDITION : PATIENTNAME, DRUGNAME, DATEMODIFIED
        public List<PatientInformationEntity> GetUniqueDrug(string pName, string dName, string dtMod)
        {
            Connection();
            List<PatientInformationEntity> UniqueDrugList = new List<PatientInformationEntity>();

            SqlCommand cmd = new SqlCommand("SPUniqueDrug", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@PATIENTNAME", pName);
            cmd.Parameters.AddWithValue("@DRUG", dName);
            cmd.Parameters.AddWithValue("@DATEMODIFIED", dtMod);

            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                UniqueDrugList.Add(
                     new PatientInformationEntity
                     {
                         PATIENTID = Convert.ToInt32(dr["PATIENTID"]),
                         PATIENTNAME = Convert.ToString(dr["PATIENTNAME"]),
                         DRUG = Convert.ToString(dr["DRUG"]),
                         DOSAGE = Convert.ToDecimal(dr["DOSAGE"]),
                         DATEMODIFIED = Convert.ToDateTime(dr["DATEMODIFIED"])
                     });
            }
            return UniqueDrugList;
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


        //end DAL
    }
}
