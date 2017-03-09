using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;



namespace BookStoreAdmin.Filters
{
    public class CustomAuthAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
           return httpContext.Session["user"] == null ? false : true;
        }
    }
}