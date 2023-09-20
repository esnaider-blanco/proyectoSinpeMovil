using BancoAPI.Data.Interfaces;
using BancoAPI.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace BancoAPI.Data.Repositories
{
    public class ClientRepository : IClientRepository
    {
        public readonly dbProyectoSinpeMovilContext _dbContext;

        public ClientRepository(dbProyectoSinpeMovilContext context)
        {
            _dbContext = context;
        }

        public async Task<List<Cliente>> GetClients()
        {
            return await _dbContext.Clientes.
                FromSqlRaw<Cliente>("spGetClients").
                ToListAsync();
        }

        public async Task<int> InsertClient(Cliente cliente)
        {
            string sql = @"exec [spInsertClient] 
                               @cedulaCliente
                              ,@nombre
                              ,@primerApellido
                              ,@segundoApellido
                              ,@fechaNacimiento
                              ,@contrasena
                              ,@telefono
                              ,@email
                              ,@direccion";
            List<SqlParameter> parms = new List<SqlParameter>
            {
                new SqlParameter { ParameterName = "@cedulaCliente", Value=cliente.CedulaCliente},
                new SqlParameter { ParameterName = "@nombre", Value=cliente.Nombre},
                new SqlParameter { ParameterName = "@primerApellido", Value=cliente.PrimerApellido},
                new SqlParameter { ParameterName = "@segundoApellido", Value=cliente.SegundoApellido},
                new SqlParameter { ParameterName = "@fechaNacimiento", Value=cliente.FechaNacimiento},
                new SqlParameter { ParameterName = "@contrasena", Value=cliente.Contrasena},
                new SqlParameter { ParameterName = "@telefono", Value=cliente.Telefono},
                new SqlParameter { ParameterName = "@email", Value=cliente.Email},
                new SqlParameter { ParameterName = "@direccion", Value=cliente.Direccion}
            };

            return _dbContext.Database.ExecuteSqlRaw(sql, parms.ToArray());


        }

        public async Task<int> CheckIfClientExists(int clientId)
        {
            string sql = @"exec [spCheckIfClientExists] @cedulaCliente, @clientExist OUTPUT ";

            List<SqlParameter> parms = new List<SqlParameter>
            {
                new SqlParameter { ParameterName = "@cedulaCliente", Value=clientId, SqlDbType=SqlDbType.Int, Direction = ParameterDirection.Input},
                new SqlParameter { ParameterName = "@clientExist", SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Output},
            };

            var affectedRows = _dbContext.Database.ExecuteSqlRaw(sql, parms.ToArray());
            int result = -1;
            if (parms[1].Value != DBNull.Value)
            {
                result = Convert.ToInt32(parms[1].Value);
            }
            return result;
        }

        public async Task<List<TblTipoCuentum>> GetBankAccountTypes()
        {
            var bankAccountTypes = await _dbContext.TblTipoCuenta.ToListAsync();
            return bankAccountTypes;
        }

        public async Task<List<TblEntidade>> GetBankEntities()
        {
            var bankEntities = await _dbContext.TblEntidades.ToListAsync();
            return bankEntities;
        }

        public async Task<List<TblTipoMonedum>> GetBankCurrencyTypes()
        {
            var currencyTypes = await _dbContext.TblTipoMoneda.ToListAsync();
            return currencyTypes;
        }

        public async Task<int> InsertBankAccountByClient(ClientexTipoCuenta clientexTipoCuenta)
        {
            string sql = @"exec [spInsertClientxTipoCuenta] 
                               @idCliente
                              ,@idTipoCuenta
                              ,@idEntidad
                              ,@idTipoMoneda
                              ,@nombreCuenta
                              ,@numeroCuenta
                              ,@saldo
                              ,@idEstado
                              ,@esCuentaPrincipal";
            List<SqlParameter> parms = new List<SqlParameter>
            {
                new SqlParameter { ParameterName = "@idCliente", Value=clientexTipoCuenta.IdCliente},
                new SqlParameter { ParameterName = "@idTipoCuenta", Value=clientexTipoCuenta.IdTipoCuenta},
                new SqlParameter { ParameterName = "@idEntidad", Value=clientexTipoCuenta.IdEntidad},
                new SqlParameter { ParameterName = "@idTipoMoneda", Value=clientexTipoCuenta.IdTipoMoneda},
                new SqlParameter { ParameterName = "@nombreCuenta", Value=clientexTipoCuenta.NombreCuenta},
                new SqlParameter { ParameterName = "@numeroCuenta", Value=clientexTipoCuenta.NumeroCuenta},
                new SqlParameter { ParameterName = "@saldo", Value=clientexTipoCuenta.Saldo},
                new SqlParameter { ParameterName = "@idEstado", Value=clientexTipoCuenta.IdEstadoCuenta},
                new SqlParameter { ParameterName = "@esCuentaPrincipal", Value=clientexTipoCuenta.EsCuentaPrincipal}
            };


            return _dbContext.Database.ExecuteSqlRaw(sql, parms.ToArray());
        }

        public async Task<List<CuentasxCliente>> GetBankAccountByClient(string clientId)
        {
            return await _dbContext.CuentasxCliente
                    .FromSqlRaw<CuentasxCliente>("spGetBankAccountByClient {0}", clientId)
                    .ToListAsync();
        }

        public async Task<List<CuentaStatus>> GetBankAccountStatus()
        {
            return await _dbContext.CuentaStatus
                    .FromSqlRaw<CuentaStatus>("spGetBankAccountStatus")
                    .ToListAsync();
        }

        public async Task<List<ClienteValido>> LoginBancoApp(LoginCliente cliente)
        {
            return await _dbContext.ClienteValido
                    .FromSqlRaw<ClienteValido>("spLoginBancoApp {0}, {1}", cliente.CedulaCliente, cliente.Contrasena)
                    .ToListAsync();
        }

        public async Task<List<ClienteSinpe>> CheckClientPhoneNumber(string phoneNumber)
        {
            return await _dbContext.ClienteSinpe
                    .FromSqlRaw<ClienteSinpe>("spCheckClientPhoneNumber {0}", phoneNumber)
                    .ToListAsync();
        }

        public async Task<List<CuentaPrincipal>> GetMainBankAccountByClient(string clientId)
        {
            return await _dbContext.CuentaPrincipal
                    .FromSqlRaw<CuentaPrincipal>("spGetMainBankAccountByClient {0}", clientId)
                    .ToListAsync();
        }

        public async Task<int> UpdateOriginAmount(int idCuentaOrigen, decimal monto)
        {
            return await _dbContext.Database.ExecuteSqlRawAsync("spUpdateOriginAmount {0}, {1}", idCuentaOrigen, monto);
        }

        public async Task<int> UpdateDestinyAmount(int idCuentaDestino, decimal monto)
        {
            return await _dbContext.Database.ExecuteSqlRawAsync("spUpdateDestinyAmount {0}, {1}", idCuentaDestino, monto);
        }

        public async Task<List<MainBankAccount>> CheckMainBankAccountByClient(string clientId)
        {
            return await _dbContext.MainBankAccount
                .FromSqlRaw<MainBankAccount>("spCheckMainBankAccountbyClient {0}", clientId).ToListAsync();
        }
    }
}
