using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAdmin.ViewModels
{
    public class Response<T>
    {
        [JsonProperty("success")]
        public bool success { get; set; }

        [JsonProperty("errorMessage")]
        public string[] errorMessage { get; set; }

        [JsonProperty("data")]
        public T data { get; set; }
    }
}