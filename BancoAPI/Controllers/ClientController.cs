using BancoAPI.Data.Interfaces;
using BancoAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace BancoAPI.Controllers
{
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;

        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        [HttpGet("api/getClients")]
        public async Task<IActionResult> GetClients()
        {
            var clientList = await _clientRepository.GetClients();
            return Ok(clientList);
        }

        [HttpPost("api/addClient")]
        public async Task<IActionResult> InsertClient([FromBody] Cliente cliente)
        {
            var client = await _clientRepository.InsertClient(cliente);
            return Ok(client);
        }

        [HttpPost("api/checkClient/{cedulaCliente}")]
        public async Task<IActionResult> CheckIfClientExists(int cedulaCliente)
        {
            var clientId = await _clientRepository.CheckIfClientExists(cedulaCliente);
            return Ok(clientId);
        }

        [HttpGet("api/getBankAccountTypes")]
        public async Task<IActionResult> GetBankAccountTypes()
        {
            var accountTypes = await _clientRepository.GetBankAccountTypes();
            return Ok(accountTypes);
        }

        [HttpPost("api/addBankAccountByClient")]
        public async Task<IActionResult> InsertClientBankAccount([FromBody] ClientexTipoCuenta cliente)
        {
            var client = await _clientRepository.InsertBankAccountByClient(cliente);
            return Ok(client);
        }

        [HttpGet("api/getBankAccountByClient/{clientId}")]
        public async Task<IActionResult> GetBankAccountByClient(string clientId)
        {
            var bankAccount = await _clientRepository.GetBankAccountByClient(clientId);
            return Ok(bankAccount);
        }

        [HttpGet("api/getBankAccountStatus")]
        public async Task<IActionResult> GetBankAccountStatus()
        {
            var accountStatus = await _clientRepository.GetBankAccountStatus();
            return Ok(accountStatus);
        }

        [HttpGet("api/getBankEntities")]
        public async Task<IActionResult> GetBankEntities()
        {
            var bankEntities = await _clientRepository.GetBankEntities();
            return Ok(bankEntities);
        }

        [HttpGet("api/getBankCurrencyTypes")]
        public async Task<IActionResult> GetBankCurrencyTypes()
        {
            var currencyTypes = await _clientRepository.GetBankCurrencyTypes();
            return Ok(currencyTypes);
        }

        [HttpPost("api/login")]
        [ApiExplorerSettings(GroupName = "Custom Group Name")]
        public async Task<IActionResult> LoginBancoApp([FromBody] LoginCliente cliente)
        {
            var clients = await _clientRepository.LoginBancoApp(cliente);
            return Ok(clients);
        }

        [HttpGet("api/checkClientPhoneNumber/{phoneNumber}")]
        public async Task<IActionResult> CheckClientPhoneNumber(string phoneNumber)
        {
            var cliente = await _clientRepository.CheckClientPhoneNumber(phoneNumber);
            return Ok(cliente);
        }

        [HttpGet("api/getMainBankAccountByClient/{clientId}")]
        public async Task<IActionResult> GetMainBankAccountByClient(string clientId)
        {
            var mainBankaccount = await _clientRepository.GetMainBankAccountByClient(clientId);
            return Ok(mainBankaccount);
        }

        [HttpPut("api/updateOriginAmount/{idCuentaOrigen}/{monto}")]
        public async Task<IActionResult> UpdateOriginAmount(string idCuentaOrigen, string monto)
        {
            var bankaccount = await _clientRepository.UpdateOriginAmount(Int32.Parse(idCuentaOrigen), decimal.Parse(monto) );
            return Ok(bankaccount);
        }

        [HttpPut("api/updateDestinyAmount/{idCuentaDestino}/{monto}")]
        public async Task<IActionResult> UpdateDestinyAmount(string idCuentaDestino, string monto)
        {
            var bankaccount = await _clientRepository.UpdateDestinyAmount(Int32.Parse(idCuentaDestino), decimal.Parse(monto));
            return Ok(bankaccount);
        }

        [HttpGet("api/checkMainBankAccountByClient/{clientId}")]
        public async Task<IActionResult> CheckMainBankAccountByClient(string clientId)
        {
            var mainBankAccount = await _clientRepository.CheckMainBankAccountByClient(clientId);
            return Ok(mainBankAccount);
        }
    }
}
