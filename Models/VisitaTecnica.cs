namespace Projeto_SaneJa.Models
{
    public class VisitaTecnica
    {
        public Imovel? Imovel { get; set; }
        public AgenteDeSaneamento? Agente { get; set; }
        public DateTime DataSolicitacao { get; set; }
        public DateTime DataVisita { get; set; }
        public DateTime DataRetorno { get; set; }
        public DateTime DataHomologacao { get; set; }
        public int CodigoVisita { get; set; }
        public Status StatusVisita { get; set; }
        public Boolean Homologacao { get; set; }
        public string? Observacao { get; set; }
        public Status Status { get; set; }
    }
}