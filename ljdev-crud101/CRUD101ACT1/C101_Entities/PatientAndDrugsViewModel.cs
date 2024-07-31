using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Web.Mvc;

namespace C101_Entities
{
    public class PatientAndDrugsViewModel
    {
        public PatientInformationEntity PATIENTINFORMATIONVM { get; set; }

        //This setup allows you to store and manage collections of PatientInformationEntity objects 
        //within instances of PatientAndDrugsViewModel, facilitating data organization and manipulation within your application.
        public List<PatientInformationEntity> PATIENTINFOVM { get; set; }
        public PatientAndDrugsViewModel()
        {
            PATIENTINFOVM = new List<PatientInformationEntity>();

        }

        public IEnumerable<DrugEntity> DRUGVM { get; set; }
        public IEnumerable<DrugEntity> DISTINCTDOSAGEVM { get; set; }
        //public DrugEntity DRUGVM { get; set; }
        //public DrugEntity DRUGVM { get; set; }

        public string SelectedDrugName { get; set; }


        public string SelectedDrugDosage { get; set; }


      
    }

    public class PatientInfoEntity : IEnumerable<PatientInfoEntity>
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

        public IEnumerator<PatientInfoEntity> GetEnumerator()
        {
            yield return this;
        }

        // Implementing non-generic IEnumerable interface explicitly
        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }

    //END ENTITY

}

