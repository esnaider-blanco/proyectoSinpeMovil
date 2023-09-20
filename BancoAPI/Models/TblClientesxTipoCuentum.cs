using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblClientesxTipoCuentum
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

        public virtual TblEstadoCuentum EstadoNavigation { get; set; }
        public virtual TblCliente IdClienteNavigation { get; set; }
        public virtual TblEntidade IdEntidadNavigation { get; set; }
        public virtual TblTipoCuentum IdTipoCuentaNavigation { get; set; }
        public virtual TblTipoMonedum IdTipoMonedaNavigation { get; set; }
    }
}
