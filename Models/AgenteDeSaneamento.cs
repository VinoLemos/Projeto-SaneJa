using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projeto_SaneJa.Models
{
    [Table("Agentes")]
    public class AgenteDeSaneamento : IUsuario
    {
        [Key]
        public int Matricula { get; set; }
        [Required(ErrorMessage = "O nome é obrigatório!")]
        [StringLength(80, ErrorMessage = "O nome deve ter entre 5 e 80 caracteres", MinimumLength = 5)]
        public string? Nome { get; set; }
        [Required(ErrorMessage = "RG é obrigatório!")]
        [StringLength(9)]
        public string? Rg { get; set; }
        [Required]
        public long Cpf{ get; set; }
        public DateTime DataNascimento { get; set; }
        [Required(ErrorMessage = "Telefone é obrigatório")]
        public int Telefone { get; set; }
        [Required]
        public string? Login { get; set; }
        [Required]
        public string? Senha { get; set; }
    }
}