using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Projeto_SaneJa.Dtos;
using Projeto_SaneJa.Models;
using Projeto_SaneJa.Repository;

namespace Projeto_SaneJa.Controllers
{
    [Route("[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly IUnitOfWork _uof;
        private readonly IMapper _mapper;
        public ClientesController(IUnitOfWork context, IMapper mapper)
        {
            _uof = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ClienteDTO>> Get()
        {
            try
            {
                var clientes = _uof.ClienteRepository?.Get().ToList();
                var clientesDto = _mapper.Map<List<ClienteDTO>>(clientes);
                return clientesDto == null ?
                NotFound("Não foram encontrados clientes") : clientesDto;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpGet("{cpf:long}", Name = "ObterCliente")]
        public ActionResult<ClienteDTO> Get(long cpf)
        {
            try
            {
                var cliente = _uof.ClienteRepository?.GetById(c => c.Cpf == cpf);
                var clienteDto = _mapper.Map<ClienteDTO>(cliente);
                return clienteDto == null ? NotFound("Cliente não encontrado no sistema.") : clienteDto;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPost]
        public ActionResult Post(ClienteDTO clienteDto)
        {
            try
            {
                if (clienteDto is null) return BadRequest("Cliente inválido");
                var cliente = _mapper.Map<Cliente>(clienteDto);
                _uof.ClienteRepository.Add(cliente);
                _uof.Commit();

                clienteDto = _mapper.Map<ClienteDTO>(cliente);

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
        public ActionResult Put(long cpf, [FromBody]ClienteDTO clienteDto)
        {
            try
            {
                if (cpf != clienteDto.Cpf) return BadRequest();

                var cliente = _mapper.Map<Cliente>(clienteDto);

                _uof.ClienteRepository.Update(cliente);
                _uof.Commit();
                return Ok(clienteDto);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpDelete("{cpf:long}")]
        public ActionResult<ClienteDTO> Delete(long cpf)
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

                var clienteDto = _mapper.Map<ClienteDTO>(cliente);

                return Ok(clienteDto);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }
    }
}