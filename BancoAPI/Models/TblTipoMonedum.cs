using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblTipoMonedum
    {
        public TblTipoMonedum()
        {
            TblClientesxTipoCuenta = new HashSet<TblClientesxTipoCuentum>();
        }

        public int Id { get; set; }
        public string Moneda { get; set; }
        public string Simbolo { get; set; }

        public virtual ICollection<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
    }
}
