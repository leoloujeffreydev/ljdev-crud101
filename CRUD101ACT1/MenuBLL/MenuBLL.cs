using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using C101_DAL.Services;
using C101_Entities;

namespace C101_BLL
{
    public class MenuBLL
    {
        public (string, string) GoToMenuBasedOnCondition(string conditionGoTo, string condition2) //TUPLE: used to get multiple return values //method for CHANGINE MENU
        {
            //MENU / VIEWS VARIABLES
            string aDV = "AddDrugView"; //viewName
            string aPV = "AddPatientView"; //viewName
            string dV= "DrugView"; //viewName
            string pIV = "PatientInformationView"; //viewName
            string mV = "MenuView"; //viewName
            string cPI = "PatientInformation"; //controllerName
            string cMen = "Menu"; //controllerName
                
            if (conditionGoTo == "ADV")
            {
                //return "Condition is true!";
                //string viewName = "\"PatientInformationView\"" + "," + "\"PatientInformation\"";
                string viewName = aDV; //parameter1: condition
                string controllerName = cPI; //parameter3: condition2
                return (viewName, controllerName); //TUPLE: how TUPLE return multiple variables then assign to 'out' parameters
            }
            else if (conditionGoTo == "APV")
            {
                //return "Condition is false!";
                //return "DrugView";
                string viewName = aPV; //parameter1: condition
                string controllerName = cPI; //parameter3: condition2
                return (viewName, controllerName); //TUPLE: how TUPLE return multiple variables then assign to 'out' parameters
            }
            else if (conditionGoTo == "DV")
            {
                //return "Condition is false!";
                //return "DrugView";
                string viewName = dV; //parameter1: condition
                string controllerName = cPI; //parameter3: condition2
                return (viewName, controllerName); //TUPLE: how TUPLE return multiple variables then assign to 'out' parameters
            }
            else if (conditionGoTo == "PIV")
            {
                //return "Condition is false!";
                //return "DrugView";
                string viewName = pIV; //parameter1: condition
                string controllerName = cPI; //parameter3: condition2
                return (viewName, controllerName); //TUPLE: how TUPLE return multiple variables then assign to 'out' parameters
            }
            else if (conditionGoTo == "MV")
            {
                //return "Condition is false!";
                //return "DrugView";
                string viewName = mV; //parameter1: condition
                string controllerName = cMen; //parameter3: condition2
                return (viewName, controllerName); //TUPLE: how TUPLE return multiple variables then assign to 'out' parameters
            }
            else
            {
                return ("No Menu Selected","No Menu Selected");//Make this like this to avoid error when no value is selected
            }
        }

        public List<MenuEntity> GetAllMenuInfo() //GET ALL MENU INFO FROM DB THRU DAL (SP)
        {
            try
            {
                MenuDAL dbhandle = new MenuDAL();
                {
                    List<MenuEntity> menuEntities = dbhandle.GetMenuInfo();
                    return menuEntities; // Success indicator (1 for success)
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); // Log the exception if needed
                return (null); // Failure indicator (0 for failure)

            }
        }

        public List<MenuEntity> GetAllSearchedMenu(string menuid) //GET SEARCHED MENU INFO FROM DB THRU DAL (SP) // CONDITON: IF INPUT = MENUID
        {
            try
            {
                MenuDAL dbhandle = new MenuDAL();
                {
                    List<MenuEntity> menuEntities = dbhandle.GetSearchedMenu(menuid);
                    return menuEntities; // Success indicator (1 for success)
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); // Log the exception if needed
                return (null); // Failure indicator (0 for failure)

            }
        }



        public int GetAllMenuInfoStatus(int? status) //GETS STATUS IF DB FROM DAL GET SUCCEED
        {
            try
            {
                MenuDAL dbhandle = new MenuDAL();
                List<MenuEntity> menuEntities = dbhandle.GetMenuInfo();
                return 1; // Success indicator (1 for success)
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); // Log the exception if needed
                return 0; // Failure indicator (0 for failure)

            }
        }
    }
}
