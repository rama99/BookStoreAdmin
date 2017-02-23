using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAdmin.ViewModels
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public BookStoreAdmin.ViewModels.Category category { get; set; }
        public List<BookStoreAdmin.ViewModels.Author> authors { get; set; }
        public decimal price { get; set; }
    }

    public class BookRequest
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public int category { get; set; }
        public List<int> authors { get; set; }
        public decimal price { get; set; }
    }
}