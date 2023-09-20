using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblTipoDireccion
    {
        public TblTipoDireccion()
        {
            TblClientesxTipoDireccions = new HashSet<TblClientesxTipoDireccion>();
        }

        public int Id { get; set; }
        public string Direccion { get; set; }

        public virtual ICollection<TblClientesxTipoDireccion> TblClientesxTipoDireccions { get; set; }
    }
}
