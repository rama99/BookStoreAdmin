using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.ViewModels;
using BookStoreAdmin.BAL;

namespace BookStoreAdmin.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Category template
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCategories()
        {
            List<BookStoreAdmin.ViewModels.Category> categories = BookStoreAdmin.BAL.Category.GetCategories();
            return Json(categories, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult AddCategory(BookStoreAdmin.ViewModels.Category category)
        {
            category = BookStoreAdmin.BAL.Category.AddCategory(category);
            return Json(category, JsonRequestBehavior.AllowGet);
        } 
    }
}