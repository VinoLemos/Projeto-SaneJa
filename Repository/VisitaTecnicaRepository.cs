using Projeto_SaneJa.Context;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Repository
{
    public class VisitaTecnicaRepository : Repository<VisitaTecnica>, IVisitaTecnicaRepository
    {
        public VisitaTecnicaRepository(AppDbContext context) : base(context)
        {
        }
    }
}