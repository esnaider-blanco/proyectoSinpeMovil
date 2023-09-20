using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class CuentaPrincipal
    {
        [Key]
        public int Id { get; set; }
        public string Entidad { get; set; }

        public decimal Saldo { get; set; }
    }
}
