export class bankAccount{    
    idCliente: number;
    idTipoCuenta: number;
    idEntidad: number;
    idTipoMoneda: number;
    nombreCuenta: string;
    numeroCuenta:string;
    saldo: number;
    idEstadoCuenta: number;
    esCuentaPrincipal: number;

  
    constructor( idCliente: number, idTipoCuenta: number, idEntidad: number, idTipoMoneda: number, nombreCuenta: string,numeroCuenta:string, saldo: number, idEstadoCuenta: number,esCuentaPrincipal: number) {
        this.idCliente = idCliente;
        this.idTipoCuenta = idTipoCuenta;
        this.idEntidad = idEntidad;
        this.idTipoMoneda = idTipoMoneda;
        this.nombreCuenta = nombreCuenta;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.idEstadoCuenta = idEstadoCuenta;
        this.esCuentaPrincipal = esCuentaPrincipal;
    }
}