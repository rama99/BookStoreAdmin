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
            BookStoreAdmin.ViewModels.LoginResponse loginResponse = BookStoreAdmin.BAL.User.ValidateUser(userName, password);

            if(loginResponse.isValidUser == true)
            {
                Session["user"] = loginResponse;
            }
            return Json(loginResponse, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Logout()
        {
            Session.Remove("user");
            return Json("temp", JsonRequestBehavior.AllowGet);
        } 
    }
}