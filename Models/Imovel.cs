namespace Projeto_SaneJa.Models
{
    public class Imovel
    {
        public string? Rua { get; set; }
        public int Numero { get; set; }
        public string? Complemento { get; set; }
        public string? Bairro { get; set; }
        public int Cep { get; set; }
        public string? Cidade { get; set; }
        public int Rgi { get; set; }
        public int Hidrometro { get; set; }
        public Cliente? Proprietario { get; set; }
    }
}