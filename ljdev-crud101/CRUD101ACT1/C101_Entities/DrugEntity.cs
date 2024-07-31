using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel;
using System.Web.Mvc;

namespace C101_Entities
{
    public class DrugEntity 
        {
        [DisplayName("DRUG ID")]
        public int DRUGID { get; set; }

        [DisplayName("DRUG NAME")]
        public string DRUGNAME { get; set; }

        [DisplayName("START DATE")]
        public DateTime DRUGSTARTDATE { get; set; }

        [DisplayName("EXPIRATION DATE")]
        public DateTime EXPIRATIONDATE { get; set; }

        [DisplayName("DOSAGE")]
        public decimal DOSAGE { get; set; }
        //public string strDOSAGE => DOSAGE.ToString();
        }
    
}
