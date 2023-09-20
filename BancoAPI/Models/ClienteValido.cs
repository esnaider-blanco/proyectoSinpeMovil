using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class ClienteValido
    {
        [Key]
        public int Id { get; set; }

        public string Nombre { get; set; }

        public string PrimerApellido { get; set; }
    }
}
