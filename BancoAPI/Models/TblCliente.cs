using System;
using System.Collections.Generic;

#nullable disable

namespace BancoAPI.Models
{
    public partial class TblCliente
    {
        public TblCliente()
        {
            TblClientesxTipoCuenta = new HashSet<TblClientesxTipoCuentum>();
            TblClientesxTipoDireccions = new HashSet<TblClientesxTipoDireccion>();
        }

        public int Id { get; set; }
        public byte[] CedulaCliente { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public byte[] Contrasena { get; set; }

        public virtual ICollection<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
        public virtual ICollection<TblClientesxTipoDireccion> TblClientesxTipoDireccions { get; set; }
    }
}
