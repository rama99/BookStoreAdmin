using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.BAL;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.Controllers
{
    public class BookController : Controller
    {
        // GET: Book
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            return View();
        }

        public ActionResult Add()
        {
            return View();
        }

        // GetBooks
        public ActionResult GetBooks()
        {
            return Json(BookStoreAdmin.BAL.Book.GetBookDetails(), JsonRequestBehavior.AllowGet);
        }
    }
}