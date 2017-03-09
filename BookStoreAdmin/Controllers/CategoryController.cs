using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.ViewModels;
using BookStoreAdmin.BAL;
using BookStoreAdmin.Filters;

namespace BookStoreAdmin.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Category template
        public ActionResult Index()
        {
            return View();
        }

        [CustomAuth]
        public ActionResult GetCategories()
        {
            List<BookStoreAdmin.ViewModels.Category> categories = BookStoreAdmin.BAL.Category.GetCategories();

            BookStoreAdmin.ViewModels.Response<List<BookStoreAdmin.ViewModels.Category>> response = new Response<List<ViewModels.Category>>();

            response.success = true;
            response.errorMessage = null;
            response.data = categories;

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        public ActionResult List()
        {
            return View();
        }

        // ADD Category Template
        public ActionResult Add()
        {
            return View();
        }

        public ActionResult Edit()
        {
            return View();
        }

        [HttpPost]
        [CustomAuth]
        public ActionResult AddCategory(BookStoreAdmin.ViewModels.Category category)
        {
            BookStoreAdmin.ViewModels.Response<BookStoreAdmin.ViewModels.Category> response = new ViewModels.Response<BookStoreAdmin.ViewModels.Category>();

            category = BookStoreAdmin.BAL.Category.AddCategory(category);

            response.success = true;
            response.data = category;
            response.errorMessage = null;

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [CustomAuth]
        public ActionResult EditCategory(BookStoreAdmin.ViewModels.Category category)
        {
            BookStoreAdmin.ViewModels.Response<BookStoreAdmin.ViewModels.Category> response = new ViewModels.Response<BookStoreAdmin.ViewModels.Category>();
            category = BookStoreAdmin.BAL.Category.EditCategory(category);

            response.success = true;
            response.data = category;
            response.errorMessage = null;

            return Json(response, JsonRequestBehavior.AllowGet);
        }
    }
}