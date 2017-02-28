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
        // template
        public ActionResult Index()
        {
            return View();
        }

        // template
        public ActionResult List()
        {
            return View();
        }

        // template
        public ActionResult Add()
        {
            return View();
        }

        // GetBooks
        public ActionResult GetBooks()
        {
            return Json(BookStoreAdmin.BAL.Book.GetBookDetails(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetBooks1()
        {
            BookStoreAdmin.ViewModels.BooksListAndAdd obj = new BookStoreAdmin.ViewModels.BooksListAndAdd();
            obj.authors = BookStoreAdmin.BAL.Author.GetAuthors();
            obj.categories = BookStoreAdmin.BAL.Category.GetCategories();
            obj.books = BookStoreAdmin.BAL.Book.GetBookDetails();

            return Json(obj, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult AddBook(BookStoreAdmin.ViewModels.BookRequest bookRequest)
        {

            try
            {
                BookStoreAdmin.BAL.Book.AddBook(bookRequest);
                return Json(bookRequest, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        } 
    }
}