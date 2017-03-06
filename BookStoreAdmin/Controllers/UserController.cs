using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.BAL;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.Controllers
{
    public class UserController : Controller
    {
        // GET: User Template
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string userName , string password)
        {
            BookStoreAdmin.ViewModels.Response<LoginResponse> response = new Response<LoginResponse>();

            BookStoreAdmin.ViewModels.LoginResponse data = BookStoreAdmin.BAL.User.ValidateUser(userName, password);

            if(data.isValidUser == true)
            {
                Session["user"] = data;
            }

            response.data = data;
            response.success = true;
            response.errorMessage = null;                     
            
            return Json(response, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Logout()
        {
            Session.Remove("user");
            return Json("temp", JsonRequestBehavior.AllowGet);
        } 

        //can activate action method
        public ActionResult CanActivate()
        {
            BookStoreAdmin.ViewModels.Response<LoginResponse> response = new Response<LoginResponse>();
            BookStoreAdmin.ViewModels.LoginResponse data = new LoginResponse() { errorMessage = null, isValidUser = false, fullName = "", userName = "" };


            if (Session["user"] != null)
            {
                response.data = (LoginResponse)Session["user"];
            }
           else
            {
                response.data = data;
            }

            
            return Json(response, JsonRequestBehavior.AllowGet);
        }
    }
}