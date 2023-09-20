using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblEntidade
    {
        public TblEntidade()
        {
            TblClientesxTipoCuenta = new HashSet<TblClientesxTipoCuentum>();
        }

        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
    }
}
