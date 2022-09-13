namespace Projeto_SaneJa.Dtos
{
    public class AgenteDTO
    {
        public int Matricula { get; set; }

        public string? Nome { get; set; }
        public string? Rg { get; set; }
        public long Cpf { get; set; }
        public int Telefone { get; set; }

        public string? Login { get; set; }
        public string? Senha { get; set; }
    }
}