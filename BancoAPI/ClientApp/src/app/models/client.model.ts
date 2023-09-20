export class client{    
    cedulaCliente: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: string;
    contrasena: string;
    telefono: string;
    email: string;
    direccion: string

  
    constructor(cedulaCliente: string, nombre: string,primerApellido: string,segundoApellido: string,fechaNacimiento: string, contrasena: string, telefono: string, email: string, direccion: string) {
      this.cedulaCliente = cedulaCliente;
      this.nombre = nombre;
      this.primerApellido = primerApellido;
      this.segundoApellido = segundoApellido;      
      this.fechaNacimiento = fechaNacimiento;
      this.contrasena = contrasena;
      this.telefono = telefono;
      this.email = email;
      this.direccion = direccion;
    }
}