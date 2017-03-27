using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAdmin.ViewModels
{
    public class UserResponse
    {
        public int id { get; set; }
        public string user_name { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string password { get; set; }
    }

    public class UserRequest
    {
        public int id { get; set; }
        public string user_name { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string password { get; set; }
        public string confirm_password { get; set; }
    }
}