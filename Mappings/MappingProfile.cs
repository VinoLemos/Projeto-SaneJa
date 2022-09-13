using AutoMapper;
using Projeto_SaneJa.Dtos;
using Projeto_SaneJa.Models;

namespace Projeto_SaneJa.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Cliente, ClienteDTO>().ReverseMap();
            CreateMap<AgenteDeSaneamento, AgenteDTO>().ReverseMap();
            CreateMap<Imovel, ImovelDTO>().ReverseMap();
            CreateMap<VisitaTecnica, VisitaTecnicaDTO>().ReverseMap(); 
        }
    }
}