using Projeto_SaneJa.Context;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Repository
{
    public class ImovelRepository : Repository<Imovel>, IImovelRepository
    {
        public ImovelRepository(AppDbContext context) : base(context)
        {
        }
    }
}