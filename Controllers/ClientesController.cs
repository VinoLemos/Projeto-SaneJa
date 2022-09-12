using Microsoft.AspNetCore.Mvc;
using Projeto_SaneJa.Models;
using Projeto_SaneJa.Repository;

namespace Projeto_SaneJa.Controllers
{
    [Route("[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly IUnitOfWork _uof;
        public ClientesController(IUnitOfWork context)
        {
            _uof = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Cliente>> Get()
        {
            try
            {
                var clientes = _uof.ClienteRepository?.Get().ToList();
                return clientes == null ?
                NotFound("Não foram encontrados clientes") : clientes;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpGet("{cpf:long}", Name = "ObterCliente")]
        public ActionResult<Cliente> Get(long cpf)
        {
            try
            {
                var cliente = _uof.ClienteRepository?.GetById(c => c.Cpf == cpf);
                return cliente == null ? NotFound("Cliente não encontrado no sistema.") : cliente;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPost]
        public ActionResult Post(Cliente cliente)
        {
            try
            {
                if (cliente is null) return BadRequest("Cliente inválido");
                _uof.ClienteRepository.Add(cliente);
                _uof.Commit();

                return new CreatedAtRouteResult("ObterCliente",
                        new { cpf = cliente.Cpf }, cliente);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPut("{cpf:long}")]
        public ActionResult Put(long cpf, Cliente cliente)
        {
            try
            {
                if (cpf != cliente.Cpf) return BadRequest();
                _uof.ClienteRepository.Update(cliente);
                _uof.Commit();
                return Ok(cliente);
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
                var cliente = _uof.ClienteRepository?.GetById(c => c.Cpf == cpf);
                if (cliente is null)
                {
                    return NotFound("Cliente não encontrado no sistema");
                }
                _uof.ClienteRepository?.Delete(cliente);
                _uof.Commit();

                return Ok(cliente);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }
    }
}