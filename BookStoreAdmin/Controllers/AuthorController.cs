﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using BookStoreAdmin.BAL;
using BookStoreAdmin.ViewModels;
using BookStoreAdmin.Filters;

namespace BookStoreAdmin.Controllers
{
    
    public class AuthorController : Controller
    {
        // GET: Author template
        public ActionResult Index()
        {
            return View();
        }

        [CustomAuth]        
        public ActionResult GetAuthors()
        {           

            List<BookStoreAdmin.ViewModels.Author> authors = BookStoreAdmin.BAL.Author.GetAuthors();

            BookStoreAdmin.ViewModels.Response<List<BookStoreAdmin.ViewModels.Author>> response = new Response<List<ViewModels.Author>>();

            response.success = true;
            response.errorMessage = null;
            response.data = authors;

           //      

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        public ActionResult List()
        {            
            return View();
        }

        // Template
        public ActionResult Add()
        {
           // Response.Headers.Set("__RequestVerificationToken", AntiForgeryToken());
            return View();
        }

        // Template
        public ActionResult Edit()
        {
            return View();
        }

        [HttpPost]
        [CustomAuth]
        //[ValidateAntiForgeryToken]
        // [ValidateHeaderAntiForgeryToken]
        public ActionResult AddAuthor(BookStoreAdmin.ViewModels.Author author)
        {          

            BookStoreAdmin.ViewModels.Response< BookStoreAdmin.ViewModels.Author> response = new ViewModels.Response<BookStoreAdmin.ViewModels.Author>();
            author = BookStoreAdmin.BAL.Author.AddAuthor(author);

            response.success = true;
            response.data = author;
            response.errorMessage = null;            

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        [CustomAuth]
        [HttpPost]
        public ActionResult EditAuthor(BookStoreAdmin.ViewModels.Author author)
        {
            BookStoreAdmin.ViewModels.Response<BookStoreAdmin.ViewModels.Author> response = new ViewModels.Response<BookStoreAdmin.ViewModels.Author>();
            author = BookStoreAdmin.BAL.Author.EditAuthor(author);

            response.success = true;
            response.data = author;
            response.errorMessage = null;           

            return Json(response, JsonRequestBehavior.AllowGet);
        }
    }
    
}