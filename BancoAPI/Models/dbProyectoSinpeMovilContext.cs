using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BancoAPI.Models
{
    public partial class dbProyectoSinpeMovilContext : DbContext
    {
        public dbProyectoSinpeMovilContext()
        {
        }

        public dbProyectoSinpeMovilContext(DbContextOptions<dbProyectoSinpeMovilContext> options)
            : base(options)
        {
        }
        public virtual DbSet<MainBankAccount> MainBankAccount { get; set; }
        
        public virtual DbSet<CuentaPrincipal> CuentaPrincipal { get; set; }
        
        public virtual DbSet<ClienteSinpe> ClienteSinpe { get; set; }
        
        public virtual DbSet<CuentasxCliente> CuentasxCliente { get; set; }
        
        public virtual DbSet<ClienteValido> ClienteValido { get; set; }
        public virtual DbSet<LoginCliente> LoginCliente { get; set; }
        public virtual DbSet<CuentaStatus> CuentaStatus { get; set; }
        public virtual DbSet<ClientexTipoCuenta> ClientexTipoCuenta { get; set; }
        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<Entidade> Entidades { get; set; }
        public virtual DbSet<TblCliente> TblClientes { get; set; }
        public virtual DbSet<TblClientesxTipoCuentum> TblClientesxTipoCuenta { get; set; }
        public virtual DbSet<TblClientesxTipoDireccion> TblClientesxTipoDireccions { get; set; }
        public virtual DbSet<TblEntidade> TblEntidades { get; set; }
        public virtual DbSet<TblEstadoCuentum> TblEstadoCuenta { get; set; }
        public virtual DbSet<TblTipoCuentum> TblTipoCuenta { get; set; }
        public virtual DbSet<TblTipoDireccion> TblTipoDireccions { get; set; }
        public virtual DbSet<TblTipoMonedum> TblTipoMoneda { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Entidade>(entity =>
            {
                entity.ToTable("Entidades", "BCCR");

                entity.Property(e => e.EsCuentaPrincipal).HasDefaultValueSql("((0))");

                entity.Property(e => e.NombreCuenta).HasMaxLength(25);

                entity.Property(e => e.NumeroCuenta)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.SaldoDisponible).HasColumnType("money");
            });

            modelBuilder.Entity<TblCliente>(entity =>
            {
                entity.ToTable("tblClientes");

                entity.HasIndex(e => e.CedulaCliente, "UQ__tblClien__B29D9AD8A723BD86")
                    .IsUnique();

                entity.Property(e => e.CedulaCliente)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Contrasena)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.FechaNacimiento).HasColumnType("date");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PrimerApellido)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.SegundoApellido)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblClientesxTipoCuentum>(entity =>
            {
                entity.ToTable("tblClientesxTipoCuenta");

                entity.Property(e => e.EsCuentaPrincipal).HasDefaultValueSql("((0))");

                entity.Property(e => e.NombreCuenta).HasMaxLength(25);

                entity.Property(e => e.NumeroCuenta)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.SaldoDisponible).HasColumnType("money");

                entity.HasOne(d => d.EstadoNavigation)
                    .WithMany(p => p.TblClientesxTipoCuenta)
                    .HasForeignKey(d => d.Estado)
                    .HasConstraintName("fk_tblEstadoCuenta");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TblClientesxTipoCuenta)
                    .HasForeignKey(d => d.IdCliente)
                    .HasConstraintName("fk_ClientesxTipoCuenta");

                entity.HasOne(d => d.IdEntidadNavigation)
                    .WithMany(p => p.TblClientesxTipoCuenta)
                    .HasForeignKey(d => d.IdEntidad)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tblEntidades");

                entity.HasOne(d => d.IdTipoCuentaNavigation)
                    .WithMany(p => p.TblClientesxTipoCuenta)
                    .HasForeignKey(d => d.IdTipoCuenta)
                    .HasConstraintName("fk_tblTipoCuenta");

                entity.HasOne(d => d.IdTipoMonedaNavigation)
                    .WithMany(p => p.TblClientesxTipoCuenta)
                    .HasForeignKey(d => d.IdTipoMoneda)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tblTipoMoneda");
            });

            modelBuilder.Entity<TblClientesxTipoDireccion>(entity =>
            {
                entity.ToTable("tblClientesxTipoDireccion");

                entity.Property(e => e.Valor)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TblClientesxTipoDireccions)
                    .HasForeignKey(d => d.IdCliente)
                    .HasConstraintName("fk_tblClientes");

                entity.HasOne(d => d.IdTipoDireccionNavigation)
                    .WithMany(p => p.TblClientesxTipoDireccions)
                    .HasForeignKey(d => d.IdTipoDireccion)
                    .HasConstraintName("fk_tblTipoDireccion");
            });

            modelBuilder.Entity<TblEntidade>(entity =>
            {
                entity.ToTable("tblEntidades");

                entity.Property(e => e.Codigo)
                    .IsRequired()
                    .HasMaxLength(5);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblEstadoCuentum>(entity =>
            {
                entity.ToTable("tblEstadoCuenta");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<TblTipoCuentum>(entity =>
            {
                entity.ToTable("tblTipoCuenta");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.TipoCuenta)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblTipoDireccion>(entity =>
            {
                entity.ToTable("tblTipoDireccion");

                entity.Property(e => e.Direccion)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblTipoMonedum>(entity =>
            {
                entity.ToTable("tblTipoMoneda");

                entity.Property(e => e.Moneda)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Simbolo).HasMaxLength(3);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
