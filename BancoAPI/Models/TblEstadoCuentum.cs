using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblEstadoCuentum
    {
        public TblEstadoCuentum()
        {
            TblClientesxTipoCuenta = new HashSet<TblClientesxTipoCuentum>();
        }

        public int Id { get; set; }
        public string Descripcion { get; set; }

        public virtual ICollection<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
    }
}
