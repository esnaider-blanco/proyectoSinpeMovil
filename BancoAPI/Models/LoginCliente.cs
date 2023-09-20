using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class LoginCliente
    {
        [Key]
        public string CedulaCliente { get; set; }

        public string Contrasena { get; set; }

    }
}
