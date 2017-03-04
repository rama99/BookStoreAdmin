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

        // template
        public ActionResult Edit()
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
            BookStoreAdmin.ViewModels.Response<BookStoreAdmin.ViewModels.BooksListAndAdd> response = new Response<ViewModels.BooksListAndAdd>();

            BookStoreAdmin.ViewModels.BooksListAndAdd obj = new BookStoreAdmin.ViewModels.BooksListAndAdd();
            obj.authors = BookStoreAdmin.BAL.Author.GetAuthors();
            obj.categories = BookStoreAdmin.BAL.Category.GetCategories();
            obj.books = BookStoreAdmin.BAL.Book.GetBookDetails();

            response.data = obj;
            response.success = true;
            response.errorMessage = null;


            return Json(response, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult AddBook(BookStoreAdmin.ViewModels.BookRequest bookRequest)
        {
            BookStoreAdmin.ViewModels.Response<BookStoreAdmin.ViewModels.Book> response = new ViewModels.Response<BookStoreAdmin.ViewModels.Book>();

            response.data = BookStoreAdmin.BAL.Book.AddBook(bookRequest);
            response.success = true;
            response.errorMessage = null;
            return Json(response, JsonRequestBehavior.AllowGet);
            
        } 
    }
}