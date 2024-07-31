using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace C101_Entities
{
    public class MenuEntity
    {
        public IEnumerable<MenuEntity> MENUVM { get; set; }
        public IEnumerable<MenuEntity> MENUSEARCH { get; set; }

        //This setup allows you to store and manage collections of PatientInformationEntity objects 
        //within instances of MenuEntity, facilitating data organization and manipulation within your application.
        public List<PatientInformationEntity> PATIENTINFOTAB { get; set; }
        public List<PatientInformationEntity> FILBYDTPATIENTINFOTAB { get; set; }
        public List<DrugEntity> DRUGINFOTAB { get; set; }
        public List<MenuEntity> MENUINFOTAB { get; set; }
        public MenuEntity()
        {
            PATIENTINFOTAB = new List<PatientInformationEntity>();
            FILBYDTPATIENTINFOTAB = new List<PatientInformationEntity>();
            DRUGINFOTAB = new List<DrugEntity>();
            MENUINFOTAB = new List<MenuEntity>();
        }
        public string SelectedMenu { get; set; }

        [DisplayName("MENU ID")]
        public string MENUID { get; set; }

        [DisplayName("MENU NAME")]
        public string VIEWNAME { get; set; }

        [DisplayName("MENU CONTROLLER")]
        public string VIEWCONTROLLER { get; set; }
    }
}
