using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using BookStoreAdmin.Models;
using BookStoreAdmin.ViewModels;

namespace BookStoreAdmin.BAL
{
    public class User
    {
        public static BookStoreAdmin.ViewModels.LoginResponse ValidateUser(string user_name , string password)
        {
            BookStoreAdmin.ViewModels.LoginResponse loginResponse = new LoginResponse();
            BookStoreAdmin.Models.user objUser;

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objUser = context.users.SingleOrDefault(user => user.user_name == user_name && user.password == password);
            }

            if(objUser == null)
            {
                loginResponse.fullName = "";
                loginResponse.isValidUser = false;
                loginResponse.userName = "";
                loginResponse.errorMessage = "Invalid User Name / Password ";
            }
            else
            {
                loginResponse.fullName = objUser.first_name + " " + objUser.last_name;
                loginResponse.isValidUser = true;
                loginResponse.userName = objUser.user_name;
                loginResponse.errorMessage = "";
            }

            return loginResponse;

        }

        public static List<BookStoreAdmin.ViewModels.UserResponse> GetUsers()
        {
            List<BookStoreAdmin.ViewModels.UserResponse> users;

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                users = context.users.Select(user => new BookStoreAdmin.ViewModels.UserResponse()
                {
                    id = user.id,
                    user_name = user.user_name,
                    first_name = user.first_name,
                    last_name = user.last_name,
                    password = ""
                }).ToList();

            }
            return users;               
        }

        public static void AddUser(BookStoreAdmin.ViewModels.UserRequest user)
        {
            BookStoreAdmin.Models.user objUser = new Models.user();

            using (BookStoreAdmin.Models.BookStoreAdminEntities1 context = new BookStoreAdminEntities1())
            {
                objUser.first_name = user.first_name;
                objUser.last_name = user.last_name;
                objUser.user_name = user.user_name;
                objUser.password = objUser.password;
                context.SaveChanges();
            }          

        }

    }
    }

 