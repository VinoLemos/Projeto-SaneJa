using Microsoft.AspNetCore.Mvc;
using Projeto_SaneJa.Models;
using Projeto_SaneJa.Repository;

namespace Projeto_SaneJa.Controllers
{
    [Route("[controller]")]
    public class ImoveisController : ControllerBase
    {
        private readonly IUnitOfWork _uof;
        public ImoveisController(IUnitOfWork context)
        {
            _uof = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Imovel>> Get()
        {
            try
            {
                var imoveis = _uof.ImovelRepository?.Get().ToList();
                return imoveis == null ?
                NotFound("Não foram encontrados imoveis") : imoveis;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpGet("{rgi:int}", Name = "ObterImovel")]
        public ActionResult<Imovel> Get(int rgi)
        {
            try
            {
                var imovel = _uof.ImovelRepository?.GetById(c => c.Rgi == rgi);
                return imovel == null ? NotFound("Imovel não encontrado no sistema.") : imovel;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPost]
        public ActionResult Post(Imovel imovel)
        {
            try
            {
                if (imovel is null) return BadRequest("Imovel inválido");
                _uof.ImovelRepository.Add(imovel);
                _uof.Commit();

                return new CreatedAtRouteResult("ObterImovel",
                        new { rgi = imovel.Rgi }, imovel);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpPut("{rgi:int}")]
        public ActionResult Put(int rgi, Imovel imovel)
        {
            try
            {
                if (rgi != imovel.Rgi) return BadRequest();
                _uof.ImovelRepository.Update(imovel);
                _uof.Commit();
                return Ok(imovel);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }

        [HttpDelete("{rgi:int}")]
        public ActionResult Delete(int rgi)
        {
            try
            {
                var imovel = _uof.ImovelRepository?.GetById(c => c.Rgi == rgi);
                if (imovel is null)
                {
                    return NotFound("Imovel não encontrado no sistema");
                }
                _uof.ImovelRepository?.Delete(imovel);
                _uof.Commit();

                return Ok(imovel);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Ocorreu um erro ao tratar sua solicitação");
            }
        }
    }
}