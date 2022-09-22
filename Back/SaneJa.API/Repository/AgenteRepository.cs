using Projeto_SaneJa.Context;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Repository
{
    public class AgenteRepository : Repository<AgenteDeSaneamento>, IAgenteRepository
    {
        public AgenteRepository(AppDbContext context) : base(context)
        {
        }
    }
}