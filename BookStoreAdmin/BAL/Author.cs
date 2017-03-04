using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using BookStoreAdmin.Models;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.BAL
{
    public class Author
    {
        public static List<BookStoreAdmin.ViewModels.Author> GetAuthors()
        {
            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                return context.authors.Select(author => new BookStoreAdmin.ViewModels.Author() { id = author.id, first_name = author.first_name, last_name = author.last_name, description = author.description }).ToList();
            }
        }

        public static BookStoreAdmin.ViewModels.Author AddAuthor(BookStoreAdmin.ViewModels.Author author)
        {
            BookStoreAdmin.Models.author objAuthor = new Models.author();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objAuthor.first_name = author.first_name;
                objAuthor.last_name = author.last_name;
                objAuthor.description = author.description;

                objAuthor = context.authors.Add(objAuthor);
                context.SaveChanges();
                author.id = objAuthor.id;
            }

            return author;
        }

        public static BookStoreAdmin.ViewModels.Author EditAuthor(BookStoreAdmin.ViewModels.Author author)
        {
            BookStoreAdmin.Models.author objAuthor = new Models.author();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objAuthor = context.authors.Find(author.id);
                objAuthor.first_name = author.first_name;
                objAuthor.last_name = author.last_name;
                objAuthor.description = author.description;
                context.SaveChanges();
            }
            return author;
        }
    }
}