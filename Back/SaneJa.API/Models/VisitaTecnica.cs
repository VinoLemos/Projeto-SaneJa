using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Projeto_SaneJa.Models
{
    [Table("Visitas")]
    public class VisitaTecnica
    {
        [JsonIgnore]
        public Imovel? Imovel { get; set; }
        [JsonIgnore]
        public AgenteDeSaneamento? Agente { get; set; }
        [Required]
        public DateTime DataSolicitacao { get; set; }
        [Required]
        public DateTime DataVisita { get; set; }
        public DateTime DataRetorno { get; set; }
        public DateTime DataHomologacao { get; set; }
        [Key]
        public int CodigoVisita { get; set; }
        public bool Homologacao { get; set; }
        public string? Observacao { get; set; }
        public enum StatusVisita { Ativa, Pendente, EmAndamento, Concluida }
        [Required]
        public StatusVisita Status { get; set; }
    }
}