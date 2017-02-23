using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using BookStoreAdmin.Models;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.BAL
{
    public class Book
    {
        public static List<BookStoreAdmin.ViewModels.Book> GetBookDetails()
        {
            using(BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                List<BookStoreAdmin.ViewModels.Book> books = context.books.Select(book => new BookStoreAdmin.ViewModels.Book()
                {
                    id = book.id,
                    title = book.title,
                    description = book.description,
                    category = new ViewModels.Category() { id = book.category.id, description = book.category.description, name = book.category.name },
                    authors = book.authors.Select((author) => new BookStoreAdmin.ViewModels.Author()
                    {
                        id = author.id,
                        description = author.description,
                        first_name = author.description,
                        last_name = author.last_name
                    }).ToList(),
                    price = book.price

                }).ToList();

                return books;
            }
        } 
    }
}