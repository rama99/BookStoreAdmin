using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using BookStoreAdmin.Models;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.BAL
{
    public class Category
    {
        public static List<BookStoreAdmin.ViewModels.Category> GetCategories()
        {
            using(BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                return context.categories.Select(category => new BookStoreAdmin.ViewModels.Category() { id = category.id, description = category.description, name = category.name }).ToList();
            }
        }

        public static BookStoreAdmin.ViewModels.Category AddCategory(BookStoreAdmin.ViewModels.Category category)
        {
            BookStoreAdmin.Models.category objCategory = new BookStoreAdmin.Models.category();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objCategory.name = category.description;
                objCategory.description = category.description;
                objCategory = context.categories.Add(objCategory);
                context.SaveChanges();
                category.id = objCategory.id;
            }

            return category;
        }

        public static BookStoreAdmin.ViewModels.Category EditCategory(BookStoreAdmin.ViewModels.Category category)
        {
            BookStoreAdmin.Models.category objCategory = new Models.category();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objCategory = context.categories.Find(category.id);
                objCategory.name = category.name;               
                objCategory.description = category.description;
                context.SaveChanges();
            }
            return category;
        }
    }
}