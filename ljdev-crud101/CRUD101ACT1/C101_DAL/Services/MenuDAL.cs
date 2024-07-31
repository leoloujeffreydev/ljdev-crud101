using C101_Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using System.Configuration;
using System.IO;
using System.Xml.Linq;

namespace C101_DAL.Services
{
    public class MenuDAL
    {

        private SqlConnection con;
        private void Connection()
        {
            //string constring = ConfigurationManager.ConnectionStrings["crudcs"].ToString();
            string constring = ConfigurationManager.ConnectionStrings["crudcs"].ConnectionString;
            con = new SqlConnection(constring);
            //con = new SqlConnection("Data Source=MSI\\SQLEXPRESS;Initial Catalog=HospitalDB;Persist Security Info=False;User ID=jeffDB;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False");
        }


        //GET MENU LIST
        public List<MenuEntity> GetMenuInfo()
        {
            Connection();
            List<MenuEntity> MenuInfoList = new List<MenuEntity>();

            SqlCommand cmd = new SqlCommand("SPGetMenuInfo", con);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                MenuInfoList.Add(
                         new MenuEntity
                         {
                             MENUID = Convert.ToString(dr["MENUID"]),
                             VIEWNAME = Convert.ToString(dr["VIEWNAME"]),
                             VIEWCONTROLLER = Convert.ToString(dr["VIEWCONTROLLER"]),
                         });
            }
            return MenuInfoList;
        }


        //GET LIST OF SEARCHED MENU // CONDITON: IF INPUT = MENUID
        public List<MenuEntity> GetSearchedMenu(string menuid) //this is the parameter for searching menu
        {
            Connection();
            List<MenuEntity> MenuInfoSearch = new List<MenuEntity>();

            SqlCommand cmd = new SqlCommand("SPSearchMenu", con);
            cmd.CommandType = CommandType.StoredProcedure;
            
            // Add parameter to the stored procedure command
            cmd.Parameters.AddWithValue("@MENUID", menuid);

            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                MenuInfoSearch.Add(
                         new MenuEntity
                         {
                             MENUID = Convert.ToString(dr["MENUID"]),
                             VIEWNAME = Convert.ToString(dr["VIEWNAME"]),
                             VIEWCONTROLLER = Convert.ToString(dr["VIEWCONTROLLER"]),
                         });
            }
            return MenuInfoSearch;
        }

        public List<PatientInformationEntity> FilterPatientInfoByDate(string painfostartdt, string painfoenddt)
        {
            Connection();
            List<PatientInformationEntity> FilteredByDtPatientInfoList = new List<PatientInformationEntity>();

            SqlCommand cmd = new SqlCommand("SPFilterPatientInfoByDate", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@STARTDATE", painfostartdt);
            cmd.Parameters.AddWithValue("@ENDDATE", painfoenddt);

            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            foreach (DataRow dr in dt.Rows)
            {
                FilteredByDtPatientInfoList.Add(
                    new PatientInformationEntity
                    {
                        PATIENTID = Convert.ToInt32(dr["PATIENTID"]),
                        PATIENTNAME = Convert.ToString(dr["PATIENTNAME"]),
                        DRUG = Convert.ToString(dr["DRUG"]),
                        DOSAGE = Convert.ToDecimal(dr["DOSAGE"]),
                        DATEMODIFIED = Convert.ToDateTime(dr["DATEMODIFIED"])
                    });
            }
            return FilteredByDtPatientInfoList;
        }

    }
}
