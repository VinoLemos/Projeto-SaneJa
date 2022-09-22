using Microsoft.EntityFrameworkCore;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {            
        }

        public DbSet<AgenteDeSaneamento>? Agentes { get; set; }
        public DbSet<Cliente>? Clientes { get; set; }
        public DbSet<Imovel>? Imoveis { get; set; }
        public DbSet<VisitaTecnica>? Visitas { get; set; }
    }
}