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

        public ActionResult Add()
        {
            return View();
        }

        public ActionResult List()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetUsers()
        {
            BookStoreAdmin.ViewModels.Response<List<UserResponse>> response = new Response<List<UserResponse>>();
            List<BookStoreAdmin.ViewModels.UserResponse> data = BookStoreAdmin.BAL.User.GetUsers();

            response.data = data;
            response.success = true;
            response.errorMessage = null;

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddUser(BookStoreAdmin.ViewModels.UserRequest user)
        {
            BookStoreAdmin.ViewModels.Response<string> response = new Response<string>();

            BookStoreAdmin.BAL.User.AddUser(user);
            response.data = "";
            response.success = true;
            response.errorMessage = null;

            return Json(response, JsonRequestBehavior.AllowGet);
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
        
        public ActionResult Logout()
        {
            Session.Remove("user");
            return Json(new { }, JsonRequestBehavior.AllowGet);
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