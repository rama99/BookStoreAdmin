﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAdmin.ViewModels
{
    public class Author
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string description { get; set; }
    }
}