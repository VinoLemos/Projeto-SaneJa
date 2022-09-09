using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Projeto_SaneJa.Models
{
    [Table("Imoveis")]
    public class Imovel
    {
        [Required(ErrorMessage = "Nome da rua obrigatório")]
        [StringLength(80, ErrorMessage = "Deve ter no máximo 80 caracteres")]
        public string? Rua { get; set; }
        public int Numero { get; set; }
        [StringLength(50)]
        public string? Complemento { get; set; }
        [Required]
        public string? Bairro { get; set; }
        [Required]
        public int Cep { get; set; }
        [Required]
        [StringLength(30)]
        public string? Cidade { get; set; }
        [Key]
        public int Rgi { get; set; }
        [Required(ErrorMessage = "RGI é obrigatório")]
        public int Hidrometro { get; set; }
        [JsonIgnore]
        public Cliente? Proprietario { get; set; }
    }
}