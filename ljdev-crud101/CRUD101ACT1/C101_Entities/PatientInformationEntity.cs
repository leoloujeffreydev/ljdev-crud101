using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace C101_Entities
{   
    public class PatientInformationEntity
    {
        [DisplayName("PATIENT ID")]
        public int PATIENTID { get; set; }
        [DisplayName("PATIENT NAME")]
        public string PATIENTNAME { get; set; }
        public string DRUG { get; set; }
        public decimal DOSAGE { get; set; }
        [DisplayName("DATE MODIFIED")]

        public DateTime DATEMODIFIED { get; set; }
        public string DATEONLY => DATEMODIFIED.ToString("yyyy-MM-dd");

    }

    



        //END ENTITY



    //public class PatientAndDrugsViewModel
    //{
    //    public PatientInformationEntity PatientInformationVM { get; set; }
    //    public IEnumerable<DrugEntity> DrugListVM { get; set; }
    //}

}