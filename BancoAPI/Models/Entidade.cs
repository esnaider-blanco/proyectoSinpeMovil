using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class Entidade
    {
        public int Id { get; set; }
        public int? IdCliente { get; set; }
        public int? IdTipoCuenta { get; set; }
        public int IdEntidad { get; set; }
        public int IdTipoMoneda { get; set; }
        public string NombreCuenta { get; set; }
        public byte[] NumeroCuenta { get; set; }
        public decimal SaldoDisponible { get; set; }
        public int? Estado { get; set; }
        public bool? EsCuentaPrincipal { get; set; }
    }
}
