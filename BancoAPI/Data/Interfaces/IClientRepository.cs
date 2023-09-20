using BancoAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BancoAPI.Data.Interfaces
{
    public interface IClientRepository
    {
        Task<List<Cliente>> GetClients();

        Task<int> InsertClient(Cliente cliente);

        Task<int> CheckIfClientExists(int clientId);

        Task<List<TblTipoCuentum>> GetBankAccountTypes();

        Task<int> InsertBankAccountByClient(ClientexTipoCuenta clientexTipoCuenta);

        Task<List<CuentasxCliente>> GetBankAccountByClient(string clientId);

        Task<List<CuentaStatus>> GetBankAccountStatus();

        Task<List<ClienteValido>> LoginBancoApp(LoginCliente cliente);

        Task<List<TblEntidade>> GetBankEntities();

        Task<List<TblTipoMonedum>> GetBankCurrencyTypes();

        Task<List<ClienteSinpe>> CheckClientPhoneNumber(string phoneNumber);

        Task<List<CuentaPrincipal>> GetMainBankAccountByClient(string clientId);

        Task<int> UpdateOriginAmount(int idCuentaOrigen, decimal monto);

        Task<int> UpdateDestinyAmount(int idCuentaDestino, decimal monto);

        Task<List<MainBankAccount>> CheckMainBankAccountByClient(string clientId);
    }
}
