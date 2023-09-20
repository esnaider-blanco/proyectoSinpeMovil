using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblTipoCuentum
    {
        public TblTipoCuentum()
        {
            TblClientesxTipoCuenta = new HashSet<TblClientesxTipoCuentum>();
        }

        public int Id { get; set; }
        public string TipoCuenta { get; set; }
        public string Descripcion { get; set; }

        public virtual ICollection<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
    }
}
