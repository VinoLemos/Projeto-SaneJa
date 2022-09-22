namespace Projeto_SaneJa.Dtos
{
    public class VisitaTecnicaDTO
    {
        public int rgiImovel{ get; set; }
        public int matriculaAgente { get; set; }
        public DateTime DataSolicitacao { get; set; }
        public DateTime DataVisita { get; set; }
        public DateTime DataRetorno { get; set; }
        public DateTime DataHomologacao { get; set; }
        public int CodigoVisita { get; set; }
        public bool Homologacao { get; set; }
        public string? Observacao { get; set; }
        public enum StatusVisita { Ativa, Pendente, EmAndamento, Concluida }
        public StatusVisita Status { get; set; }
    }
}