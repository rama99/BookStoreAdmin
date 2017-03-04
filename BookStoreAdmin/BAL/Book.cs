﻿using System;
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
                        first_name = author.first_name,
                        last_name = author.last_name
                    }).ToList(),
                    price = book.price

                }).ToList();

                return books;
            }
        }

        public static BookStoreAdmin.ViewModels.Book AddBook(BookStoreAdmin.ViewModels.BookRequest objBookRequest)
        {
            BookStoreAdmin.Models.book book = new book();

            BookStoreAdmin.ViewModels.Book objBook = new ViewModels.Book();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                book.title = objBookRequest.title;
                book.description = objBookRequest.description;
                book.fk_category_id = objBookRequest.category;
                book.price = objBookRequest.price;

                foreach (int authorId in objBookRequest.authors)
                {
                    book.authors.Add(new Models.author() { id = authorId });
                }
                book.created_on = new DateTimeOffset();

                context.books.Add(book);

                foreach (BookStoreAdmin.Models.author author in book.authors)
                {
                    context.Entry(author).State = System.Data.Entity.EntityState.Unchanged;
                }

                context.SaveChanges();
            }

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objBook = context.books
                    .Where( b => b.id == book.id)
                    .Select(book1 => new BookStoreAdmin.ViewModels.Book()
                {
                    id = book1.id,
                    title = book1.title,
                    description = book1.description,
                    category = new ViewModels.Category() { id = book1.category.id, description = book1.category.description, name = book1.category.name },
                    authors = book1.authors.Select((author) => new BookStoreAdmin.ViewModels.Author()
                    {
                        id = author.id,
                        description = author.description,
                        first_name = author.first_name,
                        last_name = author.last_name
                    }).ToList(),
                    price = book1.price

                }).Single();
            }

            return objBook;
        }

      /*  public static BookStoreAdmin.ViewModels.Book EditAuthor(BookStoreAdmin.ViewModels.Book book)
        {
            BookStoreAdmin.Models.book objBook = new Models.book();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objBook = context.books.Find(book.id);
                objAuthor.first_name = author.first_name;
                objAuthor.last_name = author.last_name;
                objAuthor.description = author.description;
                context.SaveChanges();
            }
            return book;
        } */
    }
}