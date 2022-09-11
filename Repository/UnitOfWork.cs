using Projeto_SaneJa.Context;

namespace Projeto_SaneJa.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ClienteRepository? _clienteRepo;
        private AgenteRepository? _agenteRepo;
        private ImovelRepository? _imovelRepo;
        private VisitaTecnicaRepository? _visita;
        public AppDbContext? _context;

        public IClienteRepository ClienteRepository => throw new NotImplementedException();

        public IImovelRepository ImovelRepository => throw new NotImplementedException();

        public IAgenteRepository Agente => throw new NotImplementedException();

        public IVisitaTecnicaRepository VisitaTecnicaRepository => throw new NotImplementedException();

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
        }

        public void Commit()
        {
            _context?.SaveChanges();
        }
    }
}