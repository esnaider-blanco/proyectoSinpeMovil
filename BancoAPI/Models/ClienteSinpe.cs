﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class ClienteSinpe
    {
        [Key]
        public int IdCliente { get; set; }
        public string Nombre { get; set; }
    }
}
