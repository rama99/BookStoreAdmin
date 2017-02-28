using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.BAL;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.Controllers
{
    public class AuthorController : Controller
    {
        // GET: Author template
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetAuthors()
        {
            List<BookStoreAdmin.ViewModels.Author> authors = BookStoreAdmin.BAL.Author.GetAuthors();

            var response = new Response<List<BookStoreAdmin.ViewModels.Author>>()
            {
                success = true,
                errorMessage = "dsfdf",
                data = authors
            };

            //  Response.StatusCode = 400;
            //  return Json(response, JsonRequestBehavior.AllowGet);
            return Json(authors, JsonRequestBehavior.AllowGet);

        }

        public ActionResult List()
        {
            return View();
        }

        // Template
        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddAuthor(BookStoreAdmin.ViewModels.Author author)
        {
            author = BookStoreAdmin.BAL.Author.AddAuthor(author);
            return Json(author, JsonRequestBehavior.AllowGet);
        }
    }
    
}