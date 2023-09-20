using System.ComponentModel.DataAnnotations;

namespace BancoAPI.Models
{
    public class ClientexTipoCuenta
    {
        [Key]
        public int Id { get; set; }
        public int? IdCliente { get; set; }
        public int? IdTipoCuenta { get; set; }
        public int? IdEntidad { get; set; }
        public string? Entidad { get; set; }
        public int? IdTipoMoneda { get; set; }
        public string NombreCuenta { get; set; }
        public string NumeroCuenta { get; set; }
        public decimal Saldo { get; set; }
        public int? IdEstadoCuenta { get; set; }

        public int? EsCuentaPrincipal { get; set; }
    }
}
