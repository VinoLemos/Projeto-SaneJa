using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Projeto_SaneJa.Dtos;
using Projeto_SaneJa.Models;
using Projeto_SaneJa.Repository;

namespace Projeto_SaneJa.Controllers
{
    [Route("[controller]")]
    public class AgentesController : ControllerBase
    {
        private readonly IUnitOfWork _uof;
        private readonly IMapper _mapper;
        public AgentesController(IUnitOfWork context, IMapper mapper)
        {
            _uof = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AgenteDTO>> Get()
        {
            try
            {
                var agentes = _uof.AgenteRepository?.Get().ToList();
                var agentesDto = _mapper.Map<List<AgenteDTO>>(agentes);
                return agentesDto == null ?
                NotFound("Não foram encontrados agentes") : agentesDto;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpGet("{matricula:int}", Name = "ObterAgente")]
        public ActionResult<AgenteDTO> Get(int matricula)
        {
            try
            {
                var agente = _uof.AgenteRepository?.GetById(c => c.Matricula == matricula);
                var agenteDto = _mapper.Map<AgenteDTO>(agente);
                return agenteDto == null ? NotFound("Agente não encontrado no sistema.") : agenteDto;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPost]
        public ActionResult Post(AgenteDTO agenteDto)
        {
            try
            {
                var agente = _mapper.Map<AgenteDeSaneamento>(agenteDto);
                _uof.AgenteRepository.Add(agente);
                _uof.Commit();

                agenteDto = _mapper.Map<AgenteDTO>(agente);

                return new CreatedAtRouteResult("ObterAgente",
                        new { cpf = agente.Cpf }, agenteDto);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPut("{matricula:int}")]
        public ActionResult Put(int matricula, [FromBody]AgenteDTO agenteDto)
        {
            try
            {
                if (matricula != agenteDto.Matricula) return BadRequest();

                var agente = _mapper.Map<AgenteDeSaneamento>(agenteDto);

                _uof.AgenteRepository.Update(agente);
                _uof.Commit();
                return Ok();
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpDelete("{matricula:int}")]
        public ActionResult<AgenteDTO> Delete(int matricula)
        {
            try
            {
                var agente = _uof.AgenteRepository?.GetById(c => c.Matricula == matricula);
                if (agente is null)
                {
                    return NotFound("Agente não encontrado no sistema");
                }
                _uof.AgenteRepository?.Delete(agente);
                _uof.Commit();

                var agenteDto = _mapper.Map<AgenteDTO>(agente);

                return Ok(agenteDto);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }
    }
}