using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAdmin.ViewModels
{
    public class LoginResponse
    {
        public string userName { get; set; }
        public string fullName { get; set; }
        public bool isValidUser { get; set; }
        public string errorMessage { get; set; }
    }
   
}
 