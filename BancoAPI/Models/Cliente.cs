using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string CedulaCliente { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Telefono { get; set; }
        public string Email{ get; set; }
        public string Direccion { get; set; }
        public string Contrasena { get; set; }
    }
}
