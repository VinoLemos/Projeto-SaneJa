using Projeto_SaneJa.Context;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Repository
{
    public class ClienteRepository : Repository<Cliente>, IClienteRepository
    {
        public ClienteRepository(AppDbContext context) : base(context)
        {
        }
    }
}