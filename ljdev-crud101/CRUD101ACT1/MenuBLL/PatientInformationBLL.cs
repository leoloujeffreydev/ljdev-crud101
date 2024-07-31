using C101_DAL.Services;
using C101_Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Numerics;
using System.Runtime.InteropServices;
using System.Text;
using System.Xml.Linq;

namespace C101_BLL
{
    public class PatientInformationBLL
    {
        //Method to retrieve patient information based on condition
        public List<PatientInformationEntity> GetUniqueDrugBasedOnCondition(string pName, string dName, string dtMod) //GETS STATUS IF DB FROM DAL GET SUCCEED
        {
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                {
                    List<PatientInformationEntity> patientInfoEntities = dbhandle.GetUniqueDrug(pName, dName, dtMod);
                    var success = "true";
                    return patientInfoEntities; // Success indicator (1 for success)
                    
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); // Log the exception if needed
                return (null); // Failure indicator (0 for failure)

            }
        }

        //Method to determine status based on retrieved patient information
        //public int GetStatusForUniqueDrug(string pName, string dName, string dtMod)//GETS STATUS IF DB FROM DAL GET SUCCEED
        //{
        //    try
        //    {
        //        List<PatientInformationEntity> patientInfoEntities = GetUniqueDrugBasedOnCondition(pName, dName, dtMod);
        //        if (patientInfoEntities != null && patientInfoEntities.Count > 0)
        //        {
        //            return 1; // Records found, success
        //        }
        //        else
        //        {
        //            return 0;// No records found, failure
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine(ex.Message); // Log the exception if needed
        //        return -1; // Failure indicator (0 for failure)

        //    }
        //}


        public int GetStatusForUniqueDrug(int? status, string pName, string dName, string dtMod) //GETS STATUS IF DB FROM DAL GET SUCCEED
        {
            try
            {
                PatientInformationDAL dbhandle = new PatientInformationDAL();
                List<PatientInformationEntity> patientInformationEntity = dbhandle.GetUniqueDrug( pName,  dName,  dtMod);
                if(patientInformationEntity.Count > 0)
                {
                    return 1; // Success indicator (1 for success)
                }
                else
                {
                    return 0;
                }
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); // Log the exception if needed
                return 0; // Failure indicator (0 for failure)

            }
        }





        //END BLL



    }
}
