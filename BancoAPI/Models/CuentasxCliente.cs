using System.ComponentModel.DataAnnotations;

namespace BancoAPI.Models
{
    public class CuentasxCliente
    {
        [Key]
        public int Id { get; set; }
        public int? IdCliente { get; set; }
        public string TipoCuenta { get; set; }
        public string Entidad { get; set; }
        public string TipoMoneda { get; set; }
        public string NombreCuenta { get; set; }
        public string NumeroCuenta { get; set; }
        public decimal Saldo { get; set; }
        public string EstadoCuenta { get; set; }
        public int? EsCuentaPrincipal { get; set; }
    }
}
