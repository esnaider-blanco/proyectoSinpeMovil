using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblClientesxTipoDireccion
    {
        public int Id { get; set; }
        public int? IdCliente { get; set; }
        public int? IdTipoDireccion { get; set; }
        public byte[] Valor { get; set; }

        public virtual TblCliente IdClienteNavigation { get; set; }
        public virtual TblTipoDireccion IdTipoDireccionNavigation { get; set; }
    }
}
