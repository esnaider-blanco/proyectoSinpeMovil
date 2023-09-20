using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoAPI.Models
{
    public class MainBankAccount
    {
        [Key]
        public int TotalMainAccount { get; set; }
    }
}
