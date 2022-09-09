namespace Projeto_SaneJa.Models
{
    public class Cliente : IUsuario
    {
        public string? Nome { get; set; }
        public string? Rg { get; set; }
        public long Cpf { get; set; }
        public DateTime DataNascimento { get; set; }
        public int Telefone { get; set; }
        public string? Login { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string? Senha { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}