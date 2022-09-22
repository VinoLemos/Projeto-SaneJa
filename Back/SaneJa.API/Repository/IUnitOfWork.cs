namespace Projeto_SaneJa.Repository
{
    public interface IUnitOfWork
    {
         IClienteRepository ClienteRepository { get; }
         IImovelRepository ImovelRepository { get; }
         IAgenteRepository AgenteRepository { get; }
         IVisitaTecnicaRepository VisitaTecnicaRepository { get; }
         void Commit();
    }
}