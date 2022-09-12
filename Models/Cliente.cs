using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projeto_SaneJa.Models
{
    [Table("Clientes")]
    public class Cliente : IUsuario
    {
        [Required(ErrorMessage = "O nome é obrigatório!")]
        [StringLength(80, ErrorMessage = "O nome deve ter entre 5 e 80 caracteres", MinimumLength = 5)]
        public string? Nome { get; set; }
        [Required(ErrorMessage = "RG é obrigatório!")]
        [StringLength(9)]
        public string? Rg { get; set; }
        [Key]
        public long Cpf { get; set; }
        public DateTime DataNascimento { get; set; }
         [Required(ErrorMessage = "Telefone é obrigatório")]
        public int Telefone { get; set; }
        [Required]
        public string? Login { get; set; }
        [Required]
        public string? Senha { get; set; }
        public ICollection<Imovel>? Imoveis { get; set; }

        public Cliente()
        {
            Imoveis = new Collection<Imovel>();
        }
    }
}