using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



namespace C101_Entities
{
    public class PatientInformationEntity
    {
        public int PATIENTID { get; set; }
        public string PATIENTNAME { get; set; }
        public string DRUG { get; set; }
        public decimal DOSAGE { get; set; }
        public DateTime DATEMODIFIED { get; set; }


    }
}