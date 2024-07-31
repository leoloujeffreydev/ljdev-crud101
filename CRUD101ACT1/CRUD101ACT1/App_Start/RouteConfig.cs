using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CRUD101ACT1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                //defaults: new { controller = "FolderContainingCSHTMLfile", action = "CSHTMLfileName", id = UrlParameter.Optional }
                defaults: new { controller = "PatientInformation", action = "PatientInformationView", id = UrlParameter.Optional }
            );
        }
    }
}
