using Microsoft.AspNetCore.Mvc;
using Projeto_SaneJa.Models;
using Projeto_SaneJa.Repository;

namespace Projeto_SaneJa.Controllers
{
    [Route("[controller]")]
    public class AgentesController : ControllerBase
    {
        private readonly IUnitOfWork _uof;
        public AgentesController(IUnitOfWork context)
        {
            _uof = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AgenteDeSaneamento>> Get()
        {
            try
            {
                var agentes = _uof.AgenteRepository?.Get().ToList();
                return agentes == null ?
                NotFound("Não foram encontrados agentes") : agentes;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpGet("{cpf:long}", Name = "ObterAgente")]
        public ActionResult<AgenteDeSaneamento> Get(long cpf)
        {
            try
            {
                var agente = _uof.AgenteRepository?.GetById(c => c.Cpf == cpf);
                return agente == null ? NotFound("Agente não encontrado no sistema.") : agente;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPost]
        public ActionResult Post(AgenteDeSaneamento agente)
        {
            try
            {
                if (agente is null) return BadRequest("Agente inválido");
                _uof.AgenteRepository.Add(agente);
                _uof.Commit();

                return new CreatedAtRouteResult("ObterAgente",
                        new { cpf = agente.Cpf }, agente);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPut("{cpf:long}")]
        public ActionResult Put(long cpf, AgenteDeSaneamento agente)
        {
            try
            {
                if (cpf != agente.Cpf) return BadRequest();
                _uof.AgenteRepository.Update(agente);
                _uof.Commit();
                return Ok(agente);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpDelete("{cpf:long}")]
        public ActionResult Delete(long cpf)
        {
            try
            {
                var agente = _uof.AgenteRepository?.GetById(c => c.Cpf == cpf);
                if (agente is null)
                {
                    return NotFound("Agente não encontrado no sistema");
                }
                _uof.AgenteRepository?.Delete(agente);
                _uof.Commit();

                return Ok(agente);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }
    }
}