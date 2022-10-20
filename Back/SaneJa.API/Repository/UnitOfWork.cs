using Projeto_SaneJa.Context;

namespace Projeto_SaneJa.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ClienteRepository? _clienteRepo;
        private AgenteRepository? _agenteRepo;
        private ImovelRepository? _imovelRepo;
        private VisitaTecnicaRepository? _visitaRepo;
        public AppDbContext? _context;

        public IClienteRepository ClienteRepository 
        {
            get 
            {
                return _clienteRepo = _clienteRepo ?? new ClienteRepository(_context!);
            }    
        }

        public IImovelRepository ImovelRepository
        {
            get
            {
                return _imovelRepo = _imovelRepo ?? new ImovelRepository(_context!);
            }
        }
        public IAgenteRepository AgenteRepository
        {
            get
            {
                return _agenteRepo = _agenteRepo ?? new AgenteRepository(_context!);
            }
        }

        public IVisitaTecnicaRepository VisitaTecnicaRepository
        {
            get
            {
                return _visitaRepo = _visitaRepo ?? new VisitaTecnicaRepository(_context!);
            }
        }
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